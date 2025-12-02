
import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypt from "bcryptjs";
import User from "../models/User";



passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email: string, password: string, done: any) => {
      try {
        let user = await User.findOne({ email });

        // No user exists → could optionally reject login or auto-create
        if (!user) return done(null, false);

        // Check password
        if (!user.password) return done(null, false); // user exists but has no password (maybe Google-only)

        const match = await bcrypt.compare(password, user.password);
        if (!match) return done(null, false);

        //  Set isNewUser flag for first-time login
        // if (user.isNewUser === undefined || user.isNewUser === null) {
        //   user.isNewUser = true; // first-time login
        //   await user.save();
        // } 


        // Only mark false after first successful login
        if (user.isNewUser === true) {
          user.isNewUser = false;
          await user.save();
        } else {
          user.isNewUser = false; // returning user
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);



// // Google OAuth2 strategy - only register if env vars are set
const googleClientID = process.env.GOOGLE_CLIENT_ID ?? "";
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? "";
const googleCallback = process.env.GOOGLE_CALLBACK_URL ?? "/auth/google/callback";



passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID!,
      clientSecret: googleClientSecret!,
      callbackURL: googleCallback!,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {

        // console.log("Google profile:", profile);
        const email = profile.emails?.[0]?.value || undefined;


        if (!email) return done(null, false, { message: "No email from Google" });


        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Try finding by email
          user = await User.findOne({ email });

          if (user) {
            user.googleId = profile.id;
            user.isNewUser = false;
            await user.save();
          } else {
            // Create new user
            user = await User.create({
              googleId: profile.id,
              email,
              isNewUser: true,
            });
          }
        } else {
          user.isNewUser = false;
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);



passport.serializeUser((user: any, done) => {
  done(null, user?.id ?? user?._id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;

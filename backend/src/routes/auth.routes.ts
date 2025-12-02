

import { Router, Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import User from "../models/User";

const router = Router();


// SIGNUP
router.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });

    // Regenerate session and login new user
    req.session.regenerate((err) => {
      if (err) return next(err);
      req.login(user, (err: Error) => {
        if (err) return next(err);
        res.json(user); // now req.user is the new user
      });
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error" });
  }
});



// LOGOUT
// router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
//   // req.logout({ keepSessionInfo: false }, (err: Error) => {
//   // if (err) return next(err);
//   // res.json({ message: "Logged out" });
//   // });

//   req.logout(() => {
//     req.session.destroy(() => {
//       res.json({ message: "Logged out" });
//     });
//   });


// });



router.post("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out" });
    });
  });
});


// LOCAL LOGIN
router.post("/login", (req: Request, res: Response, next: NextFunction) => {
  // Fully clear previous session if any
  req.logout({ keepSessionInfo: false }, (err: Error) => {
    if (err) return next(err);


    passport.authenticate("local", async (err: Error, user: any, info: any) => {
      if (err) return next(err);
      // if (!user) return res.status(400).json({ error: "Invalid credentials" });


      if (!user) return res.status(400).json({ error: info?.message || "Invalid credentials" });


      // Regenerate session to avoid old session conflicts
      req.session.regenerate((err) => {
        if (err) return next(err);
        req.login(user, (err: Error) => {
          if (err) return next(err);
          res.json(user);
        });
      });
    })(req, res, next);


  });
});

// GOOGLE LOGIN
router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req: Request, res: Response) => {
    const isNew = req.user?.isNewUser;
    if (isNew) return res.redirect("http://localhost:5173/complete-profile");
    return res.redirect("http://localhost:5173/dashboard");
  }
);

// COMPLETE PROFILE
router.post("/complete-profile", async (req: Request, res: Response) => {
  const user = req.user as any;
  if (!user) return res.status(401).json({ error: "Not authenticated" });

  const { name, phone } = req.body;

  try {
    user.name = name;
    user.phone = phone;
    user.profileCompleted = true;
    user.isNewUser = false;
    await user.save();


    res.json({ message: "Profile updated" });


  } catch (e) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET CURRENT USER
router.get("/me", (req: Request, res: Response) => {
  res.json(req.user || null);
});

export default router;

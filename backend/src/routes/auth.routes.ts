// // import { Router } from "express";
// // import passport from "passport";
// // import User from "../models/User";
// // import bcrypt from "bcryptjs";
// // import { v4 as uuid } from "uuid";

// // const router = Router();

// // // Signup
// // router.post("/signup", async (req, res) => {
// //     const { email, password } = req.body;

// //     const hash = await bcrypt.hash(password, 10);

// //     const user = await User.create({ email, password: hash });
// //     res.json(user);
// // });

// // // Login
// // router.post(
// //     "/login",
// //     passport.authenticate("local"),
// //     (req, res) => {
// //         res.json(req.user);
// //     }
// // );

// // // Google OAuth
// // router.get("/google", passport.authenticate("google", { scope: ["email"] }));

// // router.get(
// //     "/google/callback",
// //     passport.authenticate("google", { failureRedirect: "/" }),
// //     (req, res) => {
// //         res.redirect(process.env.FRONTEND_URL!);
// //     }
// // );

// // router.post("/magic/send", async (req, res) => {
// //     const { email } = req.body;

// //     let user = await User.findOne({ email });

// //     if (!user) {
// //         // Auto-create user if not exists
// //         user = await User.create({ email });
// //     }

// //     const token = uuid();
// //     user.magicToken = token;
// //     user.magicTokenExpires = new Date(Date.now() + 1000 * 60 * 10); // 10 minutes
// //     await user.save();

// //     const loginLink = `${process.env.FRONTEND_URL}/magic-login?token=${token}`;

// //     await sendMagicLink(email, loginLink);

// //     res.json({ message: "Magic link sent!" });
// // });



// // // Logout
// // router.post("/logout", (req, res) => {
// //     req.logout(() => {});
// //     res.json({ message: "Logged out" });
// // });

// // // Session check
// // router.get("/me", (req, res) => {
// //     res.json(req.user || null);
// // });


// // router.get(
// //     "/magic/verify",
// //     passport.authenticate("email-magic", { failureRedirect: "/" }),
// //     (req, res) => {
// //         res.redirect(process.env.FRONTEND_URL!);
// //     }
// // );




// // export default router;

// // async function sendMagicLink(email: string, loginLink: string): Promise<void> {
// //     // TODO: Implement email sending using a service like nodemailer, SendGrid, or AWS SES
// //     // Example with nodemailer:
// //     // const transporter = nodemailer.createTransport({...});
// //     // await transporter.sendMail({
// //     //     to: email,
// //     //     subject: "Your Magic Login Link",
// //     //     html: `<a href="${loginLink}">Click here to login</a>`,
// //     // });

// //     console.log(`Magic link sent to ${email}: ${loginLink}`);
// // }



// // import { Router } from "express";
// // import bcrypt from "bcryptjs";
// // import passport from "passport";
// // import { v4 as uuid } from "uuid";
// // import User from "../models/User";

// // const router = Router();

// // // Signup
// // router.post("/signup", async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

// //         const existing = await User.findOne({ email });
// //         if (existing) return res.status(409).json({ error: "User already exists" });

// //         const hash = await bcrypt.hash(password, 10);
// //         const user = await User.create({ email, password: hash });
// //         res.json(user);
// //     } catch (err) {
// //         res.status(500).json({ error: "Server error" });
// //     }
// // });

// // // Login
// // router.post(
// //     "/login",
// //     passport.authenticate("local"),
// //     (req, res) => {
// //         res.json(req.user);
// //     }
// // );

// // // Google OAuth
// // router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

// // router.get(
// //     "/google/callback",
// //     passport.authenticate("google", { failureRedirect: "/" }),
// //     (req, res) => {
// //         res.redirect(process.env.FRONTEND_URL!);
// //     }
// // );

// // router.post("/magic/send", async (req, res) => {
// //     try {
// //         const { email } = req.body;
// //         if (!email) return res.status(400).json({ error: "Email is required" });

// //         let user = await User.findOne({ email });

// //         if (!user) {
// //             // Auto-create user if not exists (ensure email present)
// //             user = await User.create({ email });
// //         }

// //         const token = uuid();
// //         user.magicToken = token;
// //         user.magicTokenExpires = new Date(Date.now() + 1000 * 60 * 10); // 10 minutes
// //         await user.save();

// //         const loginLink = `${process.env.FRONTEND_URL}/magic-login?token=${token}`;

// //         await sendMagicLink(email, loginLink);

// //         res.json({ message: "Magic link sent!" });
// //     } catch (err) {
// //         res.status(500).json({ error: "Server error" });
// //     }
// // });

// // // Logout
// // router.post("/logout", (req, res) => {
// //     req.logout(() => {});
// //     res.json({ message: "Logged out" });
// // });

// // // Session check
// // router.get("/me", (req, res) => {
// //     res.json(req.user || null);
// // });

// // router.get(
// //     "/magic/verify",
// //     passport.authenticate("email-magic", { failureRedirect: "/" }),
// //     (req, res) => {
// //         res.redirect(process.env.FRONTEND_URL!);
// //     }
// // );

// // export default router;

// // async function sendMagicLink(email: string, loginLink: string): Promise<void> {
// //     // TODO: Implement email sending using a service like nodemailer, SendGrid, or AWS SES
// //     console.log(`Magic link sent to ${email}: ${loginLink}`);
// // }



// // ...existing code...
// import { Router } from "express";
// import bcrypt from "bcryptjs";
// import passport from "passport";
// import User from "../models/User";

// const router = Router();

// router.post("/signup", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ error: "Email and password are required" });

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(409).json({ error: "User already exists" });

//     const hash = await bcrypt.hash(password, 10);
//     const user = await User.create({ email, password: hash });
//     res.json({ id: user._id, email: user.email });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // router.post("/login", passport.authenticate("local"), (req, res) => {
// //   console.log("Login successful for user:", req.user);
// //     res.json(req.user);
// // });


// router.post("/login", (req, res, next) => {
//   if (req.isAuthenticated()) {
//     req.logout(() => {
//       // After logging out, continue with login
//       passport.authenticate("local", (err: any, user: Express.User, info: any) => {
//         if (err) return next(err);
//         if (!user) return res.status(400).json({ error: "Invalid credentials" });
//         req.login(user, (err) => {
//           if (err) return next(err);
//           return res.json(user);
//         });
//       })(req, res, next);
//     });
//   } else {
//     passport.authenticate("local", (err: Error, user: any, info: any) => {
//       if (err) return next(err);
//       if (!user) return res.status(400).json({ error: "Invalid credentials" });
//       req.login(user, (err) => {
//         if (err) return next(err);
//         return res.json(user);
//       });
//     })(req, res, next);
//   }
// });

// router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));


// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
//     const isNew = req.user?.isNewUser;
//     console.log("Google OAuth successful, user:", req.user, "isNewUser:", isNew);

//     if (isNew) {
//       // FIRST TIME USER
//       return res.redirect("http://localhost:5173/complete-profile");
//     }

//     // RETURNING USER
//     return res.redirect("http://localhost:5173/dashboard");
//   }
// );


// router.post("/complete-profile", async (req: any, res) => {
//   if (!req.user) return res.status(401).json({ error: "Not authenticated" });

//   const { name, phone } = req.body;

//   try {
//     req.user.name = name;
//     req.user.phone = phone;
//     req.user.profileCompleted = true;

//     req.user.isNewUser = false;
//     await req.user.save();

//     res.json({ message: "Profile updated" });
//   } catch (e) {
//     res.status(500).json({ error: "Server error" });
//   }
// });



// router.post("/logout", (req, res, next) => {
// req.logout({ keepSessionInfo: false }, (err) => {
// if (err) return next(err);
// res.json({ message: "Logged out" });
// });
// });


// router.get("/me", (req, res) => {
//   res.json(req.user || null);
// });



// export default router;





import { Router, Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import User from "../models/User";

const router = Router();

// SIGNUP
// router.post("/signup", async (req: Request, res: Response) => {
// try {
// const { email, password } = req.body;
// if (!email || !password) return res.status(400).json({ error: "Email and password are required" });


// const existing = await User.findOne({ email });
// if (existing) return res.status(409).json({ error: "User already exists" });

// const hash = await bcrypt.hash(password, 10);
// const user = await User.create({ email, password: hash });
// res.json({ id: user._id, email: user.email });


// } catch (err) {
// console.error("Signup error:", err);
// res.status(500).json({ error: "Server error" });
// }
// });



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
router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
req.logout({ keepSessionInfo: false }, (err: Error) => {
if (err) return next(err);
res.json({ message: "Logged out" });
});
});

// LOCAL LOGIN
router.post("/login", (req: Request, res: Response, next: NextFunction) => {
// Fully clear previous session if any
req.logout({ keepSessionInfo: false }, (err: Error) => {
if (err) return next(err);


passport.authenticate("local", async (err: Error, user: any, info: any) => {
  if (err) return next(err);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

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
if (isNew) return res.redirect("[http://localhost:5173/complete-profile](http://localhost:5173/complete-profile)");
return res.redirect("[http://localhost:5173/dashboard](http://localhost:5173/dashboard)");
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

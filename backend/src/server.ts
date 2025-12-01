import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import passport from "passport";

import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import "./config/passport";

const app = express();

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
   saveUninitialized: true,

    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      cookie: {
        sameSite: "lax",   // REQUIRED FOR GOOGLE OAUTH
        secure: false      // set to true only in production HTTPS
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

export default app;

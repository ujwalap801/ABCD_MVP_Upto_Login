// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>{" "}
//   </StrictMode>
// );



// src/main.tsx or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import LandingPage from "../src/components/pages/LandingPage";
import Signup from "../src/components/pages/SignupModel";
import Signin from "../src/components/pages/Signin";
import Home from "../src/components/pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import CompleteProfile from "./components/pages/CompleteProfile";
import DashboardPage from "./components/pages/DashboardPage";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/complete-profile", element: <CompleteProfile /> },

  { path: "/dashboard", element: <DashboardPage /> },
  // protected route
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

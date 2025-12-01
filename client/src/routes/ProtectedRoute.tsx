// src/routes/ProtectedRoute.tsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (!auth?.user) return <Navigate to="/signin" replace />;

  return children;
}

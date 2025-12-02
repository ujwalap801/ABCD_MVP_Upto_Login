// // src/routes/ProtectedRoute.tsx
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// // export default function ProtectedRoute({ children }: { children: JSX.Element }) {
// //   const auth = useContext(AuthContext);

// //   if (!auth?.user) return <Navigate to="/signin" replace />;

// //   return children;
// // }


import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  // Context NOT initialized
  if (!auth) {
    return <Navigate to="/signin" replace />;
  }

  const { user, loading } = auth;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

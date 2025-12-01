// src/pages/Home.tsx
import { useContext } from "react";
import { AuthContext } from  '../../context/AuthContext';

export default function Home() {
  const { user } = useContext(AuthContext)!;

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome, {user?.email}</h1>
      <p>You are logged in successfully.</p>
    </div>
  );
}

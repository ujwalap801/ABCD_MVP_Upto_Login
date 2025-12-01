// src/pages/Signin.tsx
import React, { useState, useContext } from "react";
import api from "../../api/axios"
import { AuthContext } from  '../../context/AuthContext';


import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const { user,setUser } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      setUser(res.data);
      navigate("/dashboard"); // redirect to dashboard
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

    console.log(user);

  const googleSignin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div style={{ maxWidth: 350, margin: "50px auto" }}>
      <h2>Sign In</h2>
      {msg && <p>{msg}</p>}

      <form onSubmit={handleSignin}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

        <button type="submit">Sign In</button>
      </form>

      <hr />

      <button onClick={googleSignin}>Sign In with Google</button>
    </div>
  );
}

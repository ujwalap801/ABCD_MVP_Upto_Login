


import React, { useState } from "react";
import api from "../../api/axios"
import { useNavigate } from "react-router-dom";

export default function SignupModel() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res= await api.post("/signup", { email, password });
         console.log("Signup success:", res.data);
      navigate("/complete-profile"); // <-- redirect after signup
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
    }
  };



  const googleSignup = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div style={{ maxWidth: 350, margin: "50px auto" }}>
      <h2>Signup</h2>
      {msg && <p>{msg}</p>}

      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required /><br />

        <button type="submit">Create Account</button>
      </form>

      <hr />

      <button onClick={googleSignup}>Signup with Google</button>
    </div>
  );
}
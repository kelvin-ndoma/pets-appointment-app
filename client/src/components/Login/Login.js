import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUsername(user);
          navigate("/petlist"); // updated route
        });
      }
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f2f2f2",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          background: "rgba(255,255,255,0.9)",
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Login</h1>
        <label htmlFor="username" style={{ marginBottom: "10px" }}>
          Username
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px", borderRadius: "5px", border: "none", boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}
        />
        <label htmlFor="password" style={{ marginBottom: "10px" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginBottom: "20px", borderRadius: "5px", border: "none", boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}
        />
        <button
          type="submit"
          className="btn-login"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            background: "#1d1d1d",
            color: "#fff",
            textTransform: "uppercase",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
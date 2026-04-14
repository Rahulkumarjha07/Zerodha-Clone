import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setMessage("Please enter email and password");
        setType("error");
        return;
      }

      const res = await axios.post("https://zerodha-clone-93hl.onrender.com/login", {
        email,
        password,
      });

      setMessage("Login successful ✅");
      setType("success");

      // ✅ FIX: Save token to localStorage before redirecting
      localStorage.setItem("token", res.data.token);

      // ✅ FIX: Pass token in URL so port 3001 can pick it up
      setTimeout(() => {
        window.location.href = `https://zerodha-clone-pi-lovat.vercel.app?token=${res.data.token}`;
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.msg || "Login failed");
      setType("error");
    }
  };

  const styles = {
    container: {
      height: "100vh",
      background: "linear-gradient(135deg, #eef2f7, #dbeafe)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    backBtn: {
      position: "absolute",
      top: "20px",
      left: "20px",
      background: "none",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
      color: "#387ed1",
    },
    card: {
      background: "white",
      padding: "35px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      width: "320px",
      textAlign: "center",
    },
    title: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      outline: "none",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#387ed1",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    footerText: {
      marginTop: "15px",
    },
    link: {
      color: "#387ed1",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        {message && (
          <p style={{ color: type === "error" ? "#ff4d4f" : "#28a745", marginBottom: "10px" }}>
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}
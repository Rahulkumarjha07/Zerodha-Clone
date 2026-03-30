import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email.includes("@")) {
      setMessage("Invalid email");
      setType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      setType("error");
      return;
    }

    try {
      await axios.post("http://localhost:8080/signup", {
        email,
        password,
      });

      setMessage("Signup successful ✅");
      setType("success");

      setTimeout(() => navigate("/login"), 1500);

    } catch (err) {
      setMessage(err.response?.data?.msg || "Signup failed");
      setType("error");
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Back Button */}
      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        {message && (
          <p style={{
            color: type === "error" ? "red" : "green",
            marginBottom: "10px"
          }}>
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

        <button style={styles.button} onClick={handleSignup}>
          Signup
        </button>

        {/* Login Link */}
        <p style={styles.footerText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#f5f7fa",
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
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#387ed1",
    color: "white",
    border: "none",
    borderRadius: "5px",
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
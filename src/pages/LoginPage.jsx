import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
// import { Parallax } from "react-parallax";
import "../styles/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    // <Parallax
    //   bgImage="https://i.pinimg.com/736x/b4/73/75/b47375b6dad921a042f9d5ed16ee9353.jpg"
    //   bgImageAlt="background image"
    //   strength={500}
    // >
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">
          Login
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
    </div>
    // </Parallax>
  );
};

export default LoginPage;

import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./login.css";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayScreen, setDisplayScreen] = useState(false);

  const signupDetails = async () => {
    setDisplayScreen(true);
    let signUpUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/signup";

    try {
      await axios.post(signUpUrl, {
        name: name,
        email: email,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const addLoginDetails = async () => {
    let loginUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/login";

    try {
      await axios.post(loginUrl, {
        email: "bannu@rahi.us",
        password: "bannurahi@143",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-container">
      <div></div>
      <div style={{ width: "100%" }}>
        {displayScreen ? (
          <h3 className="heading">Sign Up</h3>
        ) : (
          <h3 className="heading">Log In</h3>
        )}

        <div className="txtfields">
          {displayScreen ? (
            <>
              <p>Name</p>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}></TextField>
            </>
          ) : (
            ""
          )}
          <p>Email Address</p>
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></TextField>

          <p>Password</p>

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></TextField>

          <Button className="button-con" onClick={addLoginDetails}>
            Login
          </Button>

          <p className="textgoo">
            If you are not Logged. Please{" "}
            <Button onClick={signupDetails} className="button-con">
              Sign Up
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

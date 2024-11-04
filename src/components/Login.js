import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import "./login.css";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayScreen, setDisplayScreen] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [erroremail, setErroremail] = useState(false);
  const [errorPassword, setErorPassword] = useState(false);
  const [showToastify, setShowToastify] = useState(false);
  // const toastifymessage = toast("Logged in successfull");
  const signupDetails = async () => {
    setDisplayScreen(true);
  };

  const errorMessageName = (name) => {
    if (name.length === 0) {
      setErrorName("Please Enter Name Id");
      // return once a validation check failed
      return;
    } else if (name.length <= 3) {
      // idi name.length <= 3 kada
      setErrorName("Username wil be more than 3 character");
      return;
    } else if (name.length >= 25) {
      // ikkada kuda
      setErrorName("UserName will be less than 25 characters");
      return;
    }
    // if all 3 validation passed - empty the error
    setErrorName("");
    console.log(name);
  };

  const addLoginDetails = async () => {
    let loginUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/login";
    let signUpUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/signup";

    if (displayScreen === true) {
      errorMessageName(name);
      if (password === "" && email === "" && name === "") {
        setErorPassword(true);
        setErroremail(true);
        // setErrorName(true); // - idi ikkada undakudadu ga idi tesey chudu
        return;
      }
      try {
        const data = await axios.post(signUpUrl, {
          name: name,
          email: email,
          password: password,
        });
        console.log(data, "hhhh");
      } catch (err) {
        console.log(err);
      }
    } else {
      if (password === "" && email === "") {
        setErroremail(true);
        setErorPassword(true);
        return;
      }
      try {
        const data = await axios.post(loginUrl, {
          email: email,
          password: password,
        });
        if (data.status === 200) {
          setShowToastify(true);

          if (showToastify === true) {
            toast.success("Success Notification !", {
              position: "top-center",
            });
          }
        }
        console.log(data, "logintoken");
      } catch (err) {
        console.log(err);
      }
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
                required
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </>
          ) : (
            ""
          )}
          <p>{errorName}</p>
          <p>Email Address</p>
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <p className="errorMessage">
            {erroremail ? "Please Enter Email" : ""}
          </p>
          <p>Password</p>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            required
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <p className="errorMessage">
            {errorPassword ? "Please Enter Password" : ""}
          </p>
          {displayScreen ? (
            <Button className="button-con" onClick={addLoginDetails}>
              Signup
            </Button>
          ) : (
            <Button className="button-con" onClick={addLoginDetails}>
              Login
            </Button>
          )}
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

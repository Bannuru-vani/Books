import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button } from "@mui/material";
import "./login.css";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayScreen, setDisplayScreen] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [erroremail, setErroremail] = useState("");
  const [errorPassword, setErorPassword] = useState("");
  const [showToastify, setShowToastify] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const toastifymessage = toast("Logged in successfull");
  const signupDetails = () => {
    setDisplayScreen(true);
  };
  const LoginDetails = () => {
    setDisplayScreen(false);
  };
  const emailValidation = (email) => {
    if (email === "") {
      setErroremail("Please enter email");
      return;
    }
    if (emailRegex.test(email)) {
      setErroremail("");
      return "";
    } else {
      setErroremail("Please Enter Valid email");
    }
  };

  const notify = () => {
    toast.error(errorMessage);
  };
  const errorMessageName = (name) => {
    if (name.length === 0) {
      setErrorName("Please Enter Name");
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
  const errorPasswordfun = (password) => {
    if (password === "") {
      setErorPassword("Please Enter Password");
      return;
    } else if (password.length < 6) {
      setErorPassword("Password length should be more than 6");
      return;
    }
    setErorPassword("");
    return;
  };

  const addLoginDetails = async () => {
    let loginUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/login";
    let signUpUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/signup";

    if (displayScreen === true) {
      errorMessageName(name);
      errorPasswordfun(password);
      emailValidation(email);
      if (password === "" && email === "" && name === "") {
        // setErorPassword(true);
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
        if (data.status === 200) {
          setShowToastify(true);
          setName("");

          setEmail("");
          setPassword("");
          setErorPassword("");
          setErrorName("");
          setErroremail("");
          if (showToastify === true) {
            toast.success("Successfully Signup !");
          }
        }
        console.log(data, "hhhh");
      } catch (err) {
        setErroremail(err.response.data.message);
        console.log(err.response.data.message);
      }
    } else {
      errorPasswordfun(password);
      emailValidation(email);
      if (password === "" && email === "") {
        // setErorPassword(true);
        notify();
        return;
      }
      try {
        const data = await axios.post(loginUrl, {
          email: email,
          password: password,
        });
        debugger;
        if (data.status === 200) {
          setShowToastify(true);
          if (showToastify === true) {
            toast.success("Logged in Successfully !");
          }
          setEmail("");
          setPassword("");
          setErorPassword("");

          setErroremail("");
        }
        console.log(data, "logintoken");
      } catch (err) {
        setErrorMessage(err.response.data.message);
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
          <p className="errorMessage">{errorName}</p>
          <p>Email Address</p>
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <p className="errorMessage">{erroremail}</p>
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
          <p className="errorMessage">{errorPassword}</p>
          {displayScreen ? (
            <Button className="button-con" onClick={addLoginDetails}>
              Signup
            </Button>
          ) : (
            <Button className="button-con" onClick={addLoginDetails}>
              Login
            </Button>
          )}
          {displayScreen ? (
            <p className="textgoo">
              If you are already Signup. Please{" "}
              <Button onClick={LoginDetails} className="button-con">
                Login
              </Button>
            </p>
          ) : (
            <p className="textgoo">
              If you are not Logged. Please{" "}
              <Button onClick={signupDetails} className="button-con">
                Sign Up
              </Button>
            </p>
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      ></ToastContainer>
    </div>
  );
}

export default Login;

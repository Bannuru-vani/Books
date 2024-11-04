import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./login.css";
import axios from "axios";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayScreen, setDisplayScreen] = useState(false);
  const [errorName,setErrorName] = useState(false);
  const [erroremail,setErroremail] = useState(false)
  const[errorPassword,setErorPassword] = useState(false)

  const signupDetails = async () => {
    setDisplayScreen(true);
  };
  const errorMessageName = (type) =>{
    switch(type){
      case (type === ""):
       <p> Please Enter Name Id</p>
       setErrorName(true)
      break;
      case(type.length >=3 ):
      <p>Username wil be more than 3 character</p>
       setErrorName(true)
      break;
      case(type.length <=25):
      <p>UserName will be less than 25 characters</p>
       setErrorName(true)
      break;

    }
  }
  console.log(errorMessageName,"errmes")
  const addLoginDetails = async () => {
    let loginUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/login";
    let signUpUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/signup";
    if (displayScreen == "true") {
      try {
        await axios.post(signUpUrl, {
          name: name,
          email: email,
          password: password,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      if(password == "" && email == ""){
        setErroremail(true);
        setErorPassword(true)
        return
      }
      try {
        await axios.post(loginUrl, {
          email: "bannu@rahi.us",
          password: "bannurahi@143",
        });
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
                onChange={(e) => setName(e.target.value)}></TextField>
            </>
          ) : (
            ""
          )}
          <p></p>
          <p>Email Address</p>
          <TextField
            id="outlined-basic"
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}></TextField>
            
            <p className="errorMessage">{erroremail ? "Please Enter Email" : ""}</p>
          <p>Password</p>

          <TextField
            id="outlined-basic"
            label="Password"
            required
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></TextField>
                   <p className="errorMessage">{errorPassword ? "Please Enter Password" : ""}</p>
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

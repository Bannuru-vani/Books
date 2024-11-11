import axios from "axios";
import React, { useState } from "react";
import "./loginlogout.css";
import { useNavigate } from "react-router-dom";
function Loginlogout() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErorPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const getEmailErrorMessage = (email) => {
    if (email === "") {
      setErrorEmail("Please enter email id");
      return;
    }
    if (emailRegex.test(email)) {
      setErrorEmail("Please enter valid email");
      return;
    }
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
  const handleSubmit = async () => {
    let loginUrl = "https://blogs-k8y2.onrender.com/api/v1/auth/login";
    getEmailErrorMessage(email);
    errorPasswordfun(password);
    if (email === "" && password === "") {
      return;
    }
    try {
      let data = await axios.post(loginUrl, {
        email: email,
        password: password,
      });
      if (data.status === 200) {
        debugger;
        console.log(data.data.token);
        let token = data.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="logilog-cont">
      <h1>Login</h1>
      <input
        className="input-field"
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p style={{ color: "red", margin: "0px" }}>{errorEmail}</p>
      <input
        type="password"
        className="input-field"
        valie={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <p style={{ color: "red", margin: "0px" }}>{errorPassword}</p>
      <button className="button-con" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
export default Loginlogout;

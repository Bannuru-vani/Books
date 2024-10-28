import React from "react";
import {TextField,Button} from "@mui/material";
import "./login.css"
function Login() {
  return (
    <div className="login-container">
        <div>

        </div>
        <div style={{width:"100%"}}>
        <h3 className="heading">Log In</h3>
     
        <div className="txtfields">
 
        <p>Email Address</p>
  <TextField id="outlined-basic" label="Email" ></TextField>
 
    <p>Password</p>
    
    <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
    <Button className="button-con">Submit</Button>
    <p className="textgoo">Continue with <span>Google?</span></p>
        </div>
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

      </div>
  );
}

export default Login;

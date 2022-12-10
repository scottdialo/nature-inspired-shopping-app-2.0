import React from "react";
import { useState } from "react";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

  


    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        console.log("You are logged in....");
        navigate("/orders", {
          state: "Hello World!",
        });
      })
      .catch((error) => {
        console.log( error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="login-container">
      <h4 className="login-title">Login</h4>

      <form>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input 
    type="text" 
    className="form-control"  
    onChange={(e) => { setLoginEmail(e.target.value);}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input 
    type="password" 
    className="form-control" 
    name="password"
    autoComplete="on"
    onChange={(e) => {setLoginPassword(e.target.value);}}
    />
  </div>
  
  <button type="submit" className="btn btn-success"  onClick={login}>Login</button>
</form>
      
    </div>
  );
}

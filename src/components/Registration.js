
import { useState } from "react";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase-config"
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCity, setRegisterCity] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");

  // const [loggedInUser, setloggedInUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setloggedInUser(currentUser);
  // });

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerCity,
        registerPhone
      );
      console.log(user);
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h4 className="register-title">Registration </h4>
      
      <form className="registration-form">
          <div className="mb-3">
              <label className="form-label">Email address</label>
              <input 
              autoComplete="true"
              type="email" 
              className="form-control"  
              onChange={(e) => {setRegisterEmail(e.target.value); }} />
         </div>

         <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
              autoComplete="true"
              type="password" 
              className="form-control"  
              onChange={(e) => {setRegisterPassword(e.target.value)}} />
         </div>

         <div className="mb-3">
              <label className="form-label">City</label>
              <input 
              type="text" 
              className="form-control"  
              onChange={(e) => {setRegisterCity(e.target.value)}} />
         </div>

         <div className="mb-3">
              <label className="form-label">Phone</label>
              <input 
              type="text" 
              className="form-control"  
              onChange={(e) => {setRegisterPhone(e.target.value)}} />
         </div>

        <button onClick={register} className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

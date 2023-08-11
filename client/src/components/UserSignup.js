/* handles sign up for a ticketuser(customer) and event organiser*/
//username,email
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {  SIGNUP_SUCCESS } from "./ServerActions";
import { NewUser } from "./ServerActions";
import "./UserAuth.css"
export default function UserSignUp() {
  const dispatch = useDispatch();
  

  // Define state variables for form input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = useSelector((state) => state.newUser.userDetails);

  function handleFormSubmit(event) {
    console.log("Submit button clicked");
    event.preventDefault();

    const newUserDetails = {
      username: username,
      email: email,
      password: password,
    };
    //console.log(newUserDetails);

    // Dispatch the newUser action with userDetails
    dispatch({ type: SIGNUP_SUCCESS, payload: newUserDetails });
  }

  // Use useEffect to call NewUser when userDetails changes
  useEffect(() => {
    if (userDetails) {
      dispatch(NewUser(userDetails));
    }
  }, [userDetails, dispatch]);
return(
  <div className="user-auth-content-container">
      <form onSubmit={handleFormSubmit} className="user-auth-form">
        <div className="user-auth-input-container">
        <label htmlFor="user-auth-input-password"><h2>Username</h2></label>
          <input
            id="user-auth-input-name" 
            className="user-auth-form-input"         
            type="text"
            value={username}
            required  
            onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="user-auth-input-container">
        <label htmlFor="user-auth-input-password"><h2>Email address</h2></label>
          <input
            id="user-auth-input-password" 
            className="user-auth-form-input" 
            type="email"
            placeholder="Email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="user-auth-input-container">
        <label htmlFor="user-auth-input-password"><h2>Password</h2></label>
          <input
            id="user-auth-input-password" 
            className="user-auth-form-input" 
            type="password"
            value={password}
            placeholder="Password" 
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button className="solid-success-btn form-user-auth-submit-btn" type="submit">Create New Account</button>
        
        <div className="existing-user-container">
          <Link to="/login" className="links-with-blue-underline existing-user-link" id="existing-user-link">
          Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
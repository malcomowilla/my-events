/* handles sign up for a ticketuser(customer) and event organiser*/
//username,email
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserAuth.css"
import { useDispatch,useSelector } from "react-redux";
//import { ORGANIZER_SIGNUP_REQUEST } from "./ServerActions";
import { organizerSignupRequest } from "../Reducers/organizerActions";
import { NewOrganizer } from "./ServerActions";

export default function OrganizerSignUpForm() {
  const dispatch = useDispatch();
  

  // Define state variables for form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image,setImage]=useState("");

  const organizerDetails = useSelector((state) => state.organizer.organizerDetails);

  function handleFormSubmit(event) {
    console.log("Submit button clicked");
    event.preventDefault();

    const newOrganizerDetails = {
      name: name,
      email: email,
      password: password,
    };
    //console.log(newUserDetails);

    // Dispatch the newUser action with userDetails
   dispatch(organizerSignupRequest(newOrganizerDetails));
  }

  // Use useEffect to call NewUser when userDetails changes
  useEffect(() => {
    if (organizerDetails) {
      dispatch(NewOrganizer(organizerDetails));//where NewOrganizer is a function in the serveractions
    }
  }, [organizerDetails, dispatch]);
return(
  <div className="user-auth-content-container">
       <form
        onSubmit={handleFormSubmit}
        className="user-auth-form"
      >
        <div className="user-auth-input-container">
        <label htmlFor="user-auth-input-password"><h2> Organizer name</h2></label>
          <input
            id="user-auth-input-name" 
            className="user-auth-form-input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="user-auth-input-container">
        <label htmlFor="user-auth-input-password"><h2>Email address</h2></label>        
          <input
            id="user-auth-input-password" 
            className="user-auth-form-input" 
            type="email"
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
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="user-auth-input-container">
          <input
            id="user-auth-input-password" 
            className="user-auth-form-input"         
            type="file"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>
        <button className="solid-success-btn form-user-auth-submit-btn" type="submit">
          Enter
        </button>
              
        <div className="existing-user-container">
          <Link to="/login" className="links-with-blue-underline existing-user-link" id="existing-user-link">
          Already have an account? Login Here</Link>
        </div>
      </form>
    </div>
  );
}
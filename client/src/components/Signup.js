/* handles sign up for a ticketuser(customer) and event organiser*/
//username,email
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SIGNUP_REQUEST } from "./ServerActions";

export default function SignUp() {
  const dispatch = useDispatch();
  

  // Define state variables for form input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    console.log("Submit button clicked")
    event.preventDefault();
    
    const userDetails = {
      username: username,
      email: email,
      password: password,
    };
    console.log(userDetails)


    // Dispatch the newUser action with userDetails
    dispatch({ type: SIGNUP_REQUEST ,payload: userDetails});
  }
return(
    <>
      

      <form
        onSubmit={handleFormSubmit}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Sign Up Here</h1>
        <h3 className="">Username</h3>
        <div>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            
          />
        </div>
        <h3>Email</h3>
        <div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            
          />
        </div>
        <h4>Password</h4>
        <div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            
          />
        </div>
        <button type="submit">
          Enter
        </button>
        <p>
          Already have an account?
          <br />{" "}
          <Link to="/signIn">
            Login Here
          </Link>
        </p>
      </form>
    </>
  );
}
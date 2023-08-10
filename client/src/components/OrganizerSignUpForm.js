/* handles sign up for a ticketuser(customer) and event organiser*/
//username,email
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
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
    <>
      
     <h2>Organizer</h2>
      <form
        onSubmit={handleFormSubmit}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Sign Up Here</h1>
        <h3 className="">Name</h3>
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <h3>Email</h3>
        <div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <h4>Password</h4>
        <div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <h4>Image</h4>
        <div>
          <input
            type="file"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>
        <button type="submit">
          Enter
        </button>
        <p>
          Already have an account?
          <br />{" "}
          <Link to="/login">
            Login Here
          </Link>
        </p>
      </form>
    </>
  );
}
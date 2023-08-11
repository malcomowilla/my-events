import { useDispatch/*,useSelector*/ } from "react-redux";
import { LoginOrganizer } from "./ServerActions";
import { logoutOrganizer } from "../Reducers/OloginReducer";
import { useState } from "react";
import "./UserAuth.css"
const OrganizerLogin=()=>{
    const dispatch = useDispatch()

    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const organizerLoginDetails={
      name:name,
      password:password
  }
    
    //const loginDetails = useSelector((state) => state.loginUser.loginDetails);
    function handleFormSubmit(event) {
    console.log("Submit button clicked");
    event.preventDefault();

   
    dispatch(LoginOrganizer(organizerLoginDetails));
    
    }
  const handleLogOutO=()=>{
    // After dispatching logout action
    if(organizerLoginDetails !== null)
    dispatch(logoutOrganizer(organizerLoginDetails));
   // Clear local storage
    localStorage.removeItem("organizer"); 
  }
  
  return(
    <div className="user-auth-content-container">
      <form
        onSubmit={handleFormSubmit} className="user-auth-form">
        <label htmlFor="user-auth-input-password"><h2>Username</h2></label>
        <div className="user-auth-input-container">
          <input
            id="user-auth-input-email" 
            className="user-auth-form-input"           
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="user-auth-input-container" >
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
        <div className="user-options-container">
            <div className="remember-me-container">
                <input type="checkbox" id="remember-me"/>
                 <label htmlFor="remember-me">Remember Me</label>
            </div>
        </div>
        <button type="submit" className="solid-success-btn form-user-auth-submit-btn">Login</button>
        <button className="solid-success-btn form-user-auth-submit-btn" onClick={handleLogOutO}>Logout</button>
        </form>     
    </div>

)
}
export default OrganizerLogin;
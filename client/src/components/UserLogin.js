import { useState} from "react"
import { useDispatch/*,useSelector*/ } from "react-redux";
import { /*LOGIN_SUCCESS,*/ LoginUser } from "./ServerActions";
import { logoutUser } from "../Reducers/loginReducer";
import "./UserAuth.css"
const UserLogin=()=>{
   const dispatch = useDispatch()

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const loginDetails={
      username:username,
      password:password
  }
    
    //const loginDetails = useSelector((state) => state.loginUser.loginDetails);
    function handleFormSubmit(event) {
    console.log("Submit button clicked");
    event.preventDefault();

   
    dispatch(LoginUser(loginDetails));
    
    }
  const handleLogOut=()=>{
    // After dispatching logout action
    if(loginDetails !== null)
    dispatch(logoutUser(loginDetails));
   // Clear local storage
    localStorage.removeItem("user"); 
  }
  return(
    <div className="user-auth-content-container">
           <form onSubmit={handleFormSubmit} className="user-auth-form">
        <label htmlFor="user-auth-input-password"><h2>Username</h2></label>
        <div className="user-auth-input-container">
          <input
            id="user-auth-input-email" 
            className="user-auth-form-input" 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        <button className="solid-success-btn form-user-auth-submit-btn">Login</button>
        <button className="solid-success-btn form-user-auth-submit-btn" onClick={handleLogOut}>Logout</button>
        </form>    
    </div>

)
}
export default UserLogin;


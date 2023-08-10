import { useState} from "react"
import { useDispatch/*,useSelector*/ } from "react-redux";
import { /*LOGIN_SUCCESS,*/ LoginUser } from "./ServerActions";
import { logoutUser } from "../Reducers/loginReducer";
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
    <>
      

      <form
        onSubmit={handleFormSubmit}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Login Here</h1>
        <h3 className="">Username</h3>
        <div>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
        <button type="submit">
          Enter
        </button>
        </form>
        <div>
            <h2>Log Out</h2>
            <button onClick={handleLogOut}>LOG OUT</button>
        </div>
        
    </>

)
}
export default UserLogin;


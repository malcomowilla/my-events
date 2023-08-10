import { useDispatch/*,useSelector*/ } from "react-redux";
import { LoginOrganizer } from "./ServerActions";
import { logoutOrganizer } from "../Reducers/OloginReducer";
import { useState } from "react";
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
    <>
      

      <form
        onSubmit={handleFormSubmit}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Login Here</h1>
        <h3 className="">Name</h3>
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            <button onClick={handleLogOutO}>LOG OUT</button>
        </div>
        
    </>

)
}
export default OrganizerLogin;
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { LOGIN_SUCCESS, LoginUser } from "./ServerActions";
const Login=()=>{
   const dispatch = useDispatch()

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    
    const loginDetails = useSelector((state) => state.loginUser.loginDetails);
    function handleFormSubmit(event) {
    console.log("Submit button clicked");
    event.preventDefault();

    const newLoginDetails={
        username:username,
        password:password
    }
    console.log(newLoginDetails);

    // Dispatch the newUser action with userDetails
    dispatch({ type: LOGIN_SUCCESS, payload: newLoginDetails  });
  }

  // Use useEffect to call NewUser when userDetails changes
  useEffect(() => {
    if (loginDetails) {
      dispatch(LoginUser(loginDetails));
    }
  }, [loginDetails, dispatch]);
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
        </form>
    </>

)
}
export default Login;
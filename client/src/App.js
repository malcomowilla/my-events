import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchEvents } from "./components/ServerActions"; //coz it's not the only component in EventActions
import Login from "./components/Login";
import SignUp from "./components/Signup";
import EventDetails from "./components/EventDetails";
import TicketCart from "./components/TicketCart";
import Organiser from "./components/Organiser";
import AuthProvider from "./providers/Auth.provider";
import { useAuthContext } from "./providers/Auth.provider";
//import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const SecureRoute = ({ component: Component, ...rest }) => {
  const authContext = useAuthContext(); // Get the user context
 // const navigate=useNavigate();
 /* const toLogin=()=>{
    navigate("/login")
  }*/
  if (rest.required && !authContext.user.isAuthenticated) {
    // Redirect to login page if not authenticated
  return <Login/>
  }

  return <Component />;
};
const BaseRoute = ({ component: Component }) => { // Using destructuring here
  return (
    <AuthProvider required={false}>
      <NavBar />
      <Component /> {/* Rendering the Component here */}
    </AuthProvider>
  );
};
/*const PrivateTicketCartRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);

  return (
      <TicketCart
          {...rest}
          render={props =>
              isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
          }
      />
  );
};*/



function App() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  console.log(`events state variable:${events}`);
  
  useEffect(() => {
    dispatch(FetchEvents());
  }, [dispatch]);
  console.log(`events state variable:${events}`);


  return (
    <BrowserRouter>
      {/*<AuthProvider required={true}> {/* Pass required={true} for secure routes */}
      <Routes>
        <Route path="/" element={<BaseRoute component={Home}/>}></Route>
        <Route path="/events" element={<BaseRoute component={EventList}/>}></Route>
        <Route path="/signUp" element={<BaseRoute component={SignUp}/>}></Route>
        <Route path="/login" element={<BaseRoute component={Login}/>}></Route>
        <Route path="/EventDetails/:id" element={<SecureRoute component={EventDetails} />} />
        <Route path="/BookedTickets" element={<BaseRoute component={TicketCart} />}></Route>
        <Route path="/Organiser" element={<SecureRoute component={Organiser}/>}></Route>
      </Routes>
      {/*</AuthProvider>*/}
    </BrowserRouter>
  );
}

export default App;
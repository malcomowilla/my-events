/*default landing page */
import React from "react";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";
import { useNavigate } from "react-router-dom";
import './Home.css'
import CityIllustration from "../assets/lofi-vaporwave.gif"


const Home=()=>{
  const navigate=useNavigate()
  const events = useSelector((state) => state.events);
  const allEvents=()=>{
     navigate("/events")
  }
  const toSignUp=()=>{
    navigate("/signUp")
  }
  // Limit the events to 6 
  const homePageEvents = events.slice(0, 6);
    return(
      <div className='home-component-container'>
        <div className='home-page-img-container'>
        <img className="home-page-background-img" src={CityIllustration} alt="Library Illustration"/>
        </div>
      <h1 className='homepage-headings'>Highlights</h1>
          <p>Do you have events you want to share with us?
            Sign up <button onClick={toSignUp}>here</button> as an organizer to host them with us!
          </p>
          <button className="solid-secondary-btn homepage-explore-all-btn" onClick={allEvents}>
            Explore All events
          </button>
          <div>
            {homePageEvents.map((event) => (
             <EventItem key={event.id} event={event} />
             
          ))}
          </div>
        </div>
        
    )
}
export default Home;
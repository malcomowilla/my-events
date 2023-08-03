import { useNavigate } from "react-router-dom";
const EventItem = (props) => {
    const event = props.event;
    const id= event.id
    const navigate=useNavigate();
    const details=()=>{
        navigate(`/EventDetails/${id}`)
    }
    
    return (
      <div key={event.id}>
        <h2>{event.name}</h2>
        <img src={event.image_url} alt={event.name} />
        <p>{event.description}</p>
        <p>{event.location}</p>
        <p>{event.date}</p>
        <p>
          See more
          <br />{" "}
          <button onClick={details}>Details</button>
        </p>
      </div>
    );
  };
  
  export default EventItem;
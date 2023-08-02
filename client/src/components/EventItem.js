import { Link } from "react-router-dom";
const EventItem = (props) => {
    const event = props.event;
    const id= event.id
    
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
          <Link to={`/EventDetails/${id}`}>
            Details
          </Link>
        </p>
      </div>
    );
  };
  
  export default EventItem;
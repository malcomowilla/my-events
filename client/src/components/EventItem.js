import { useNavigate } from "react-router-dom";
import './EventItem.css'
import { useAuthContext } from "../providers/Auth.provider";
const EventItem = (props) => {
  const event = props.event;
  const id = event.id;
  const navigate = useNavigate();
  const authContext = useAuthContext(); // Get the user context

  const details = () => {
    if (authContext.user) {
      // Check if the user is logged in
      navigate(`/EventDetails/${id}`);
    } else {
      // Redirect to login page if not logged in
      navigate("/login");
    }
  };

  return (
  <div className='products-container'>
     <div className="products-card-grid">

  
    <div className="card-basic" key={event.id}>
      <img src={event.image_url} alt={event.name} />
        <div className="card-item-details">
          <div className="item-title">
              <h3>{event.name}</h3>
          </div>         
      <p>{event.location}</p>
      <p>{event.date}</p>
     <div className="card-button">
      <button onClick={details}>Details</button>
      </div>             
    </div>
   </div>
  </div>
</div>
  );
};

export default EventItem;
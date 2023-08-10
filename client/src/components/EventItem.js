import { useNavigate } from "react-router-dom";
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
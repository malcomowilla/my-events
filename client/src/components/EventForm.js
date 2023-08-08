import { useState } from "react";
const EventForm=(
  isUpdatePage = false,
  eventData = undefined,
  errorMsg,
  handleSubmit,
)=>{
//sign up as an organizer,
//login as an organizer,
//if logged in, redirect to events CRUD
const [name, setName] = useState(eventData?.title || "");
  const [description, setDescription] = useState(eventData?.description || "");
  const [location, setLocation] = useState(eventData?.location || "");
  const [capacity,setCapacity]=useState(eventData?.capacity || "");
  const [date, setDate] = useState(eventData?.date  || "");
  const [image, setImage] = useState(eventData?.image || "");
  

  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      location,
      name: name,
      description,
      date: date,
      image,
      capacity,
    };
    handleSubmit(newEvent);
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-5">
      <form
        id="Add Event"
        onSubmit={onSubmit}
        className="w-1/2 border rounded-lg shadow-lg p-4 flex flex-col gap-4"
        method="post"
      >
        <h1 className="text-center text-2xl text-rose-600 uppercase">
          {isUpdatePage ? "Update this event" : "Create a new event"}
        </h1>
        {errorMsg && (
          <p className="text-center text-xl text-red-500">{errorMsg}</p>
        )}
        <h3>Name</h3>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Image Url</h3>
        <div>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Description</h3>
        <div>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg w-full text-gray-700"
          />
        </div>
        <h3>Location</h3>
        <div>
          <input
            type="text"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <h3>Capacity</h3>
        <div>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <h3>Date</h3>
        <div>
          <input
            type="datetime-local"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
          
        >
          {isUpdatePage ? "Update" : "Create"} Event
        </button>
      </form>
    </div>
  );

}
export default EventForm;
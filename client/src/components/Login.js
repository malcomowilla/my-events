import UserLogin from "./UserLogin";
import OrganizerLogin from "./OrganizerLogin";
import { useState } from "react";
const Login=()=>{
    const [selectedType, setSelectedType] = useState("user");

    const handleTypeChange = (type) => {
      setSelectedType(type);
    };
  
    return (
      <div>
        <div>
          <button onClick={() => handleTypeChange("user")}>User Login</button>
          <button onClick={() => handleTypeChange("organizer")}>Organizer Login</button>
        </div>
  
        {selectedType === "user" ? (
          <UserLogin />
        ) : (
          <OrganizerLogin />
        )}
      </div>
    );
}
export default Login;
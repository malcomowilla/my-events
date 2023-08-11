import UserLogin from "./UserLogin";
import OrganizerLogin from "./OrganizerLogin";
import { useState } from "react";
import "./UserAuth.css";

const Login = () => {
  const [selectedType, setSelectedType] = useState("user");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="login-container">
      <div className="login-buttons">
        <button
          className={`login-button ${selectedType === "user" ? "selected" : ""}`}
          onClick={() => handleTypeChange("user")}
        >
          User Login
        </button>
        <button
          className={`login-button ${selectedType === "organizer" ? "selected" : ""}`}
          onClick={() => handleTypeChange("organizer")}
        >
          Organizer Login
        </button>
      </div>

      {selectedType === "user" ? (
        <UserLogin />
      ) : (
        <OrganizerLogin />
      )}
    </div>
  );
};

export default Login;

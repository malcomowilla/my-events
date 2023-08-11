import React, { useState } from "react";
import UserSignUp from "./UserSignup";
import OrganizerSignUpForm from "./OrganizerSignUpForm";
import "./UserAuth.css";

export default function SignUp() {
  const [selectedType, setSelectedType] = useState("user");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="sign-up-container">
      <div className="button-container">
        <button onClick={() => handleTypeChange("user")}>User Sign Up</button>
        <button onClick={() => handleTypeChange("organizer")}>Organizer Sign Up</button>
      </div>

      {selectedType === "user" ? (
        <UserSignUp />
      ) : (
        <OrganizerSignUpForm />
      )}
    </div>
  );
}

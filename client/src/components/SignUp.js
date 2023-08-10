import React, { useState } from "react";
import UserSignUp from "./UserSignup";
import OrganizerSignUpForm from "./OrganizerSignUpForm";

export default function SignUp() {
  const [selectedType, setSelectedType] = useState("user");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <div>
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
import React from "react";

export default function ClubDetails({ club }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{club.name}</h1>
      <p>
        <strong>大学:</strong> {club.university}
      </p>
      <p>{club.description}</p>
      <p>{club.details}</p>
    </div>
  );
}

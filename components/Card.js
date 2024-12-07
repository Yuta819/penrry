// Card Component for displaying club/circle info
import React from "react";

export default function Card({ club }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{club.name}</h2>
      <p>
        <strong>大学:</strong> {club.university}
      </p>
      <p>{club.description}</p>
    </div>
  );
}

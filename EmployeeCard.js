import React from "react";

function EmployeeCard({ name, role, photo, onDelete }) {
  return (
    <div className="employee-card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default EmployeeCard;

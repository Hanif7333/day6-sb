import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun", role: "Developer", photo: "https://via.placeholder.com/150" },
    { id: 2, name: "Priya", role: "Designer", photo: "https://via.placeholder.com/150" },
  ]);

  const [formData, setFormData] = useState({ name: "", role: "", photo: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role) {
      alert("Name and Role are required!");
      return;
    }
    const newEmployee = {
      id: Date.now(),
      ...formData,
      photo: formData.photo || "https://via.placeholder.com/150",
    };
    setEmployees([...employees, newEmployee]);
    setFormData({ name: "", role: "", photo: "" });
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="App">
      <h1>Employee Directory</h1>

      <form onSubmit={addEmployee}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Enter Role"
          value={formData.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="photo"
          placeholder="Enter Image URL (optional)"
          value={formData.photo}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>

      <h2>Total Employees: {employees.length}</h2>

      <div className="employee-list">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            role={emp.role}
            photo={emp.photo}
            onDelete={() => deleteEmployee(emp.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

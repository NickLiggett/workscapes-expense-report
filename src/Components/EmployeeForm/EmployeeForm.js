import "../EmployeeForm/EmployeeForm.css";
import { Paper } from "@mui/material"
import { useState } from "react";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [manager, setManager] = useState("");

  return (
    <div className="employee-form-wrapper">
      <Paper elevation={5} className="employee-form">
        <label className="employee-input-wrapper">
          Employee Name:
          <input
            className="employee-input"
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>
        <label className="employee-input-wrapper">
          Employee Email:
          <input
            className="employee-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>
        <label className="employee-input-wrapper">
          Manager:
          <select className="employee-input">
            <option>Select manager...</option>
            <option>Jay</option>
            <option>Silent Bob</option>
            <option>Kitty Boo Boo Fuck</option>
          </select>
        </label>
      </Paper>
    </div>
  );
};

export default EmployeeForm;

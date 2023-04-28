import "../App/App.css";
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import "primereact/resources/themes/md-light-indigo/theme.css";
import 'primeicons/primeicons.css';

import EmployeeForm from "../EmployeeForm/EmployeeForm";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const App = () => {
  const [currentPage, setPage] = useState("Employee Page");
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <div className="App">
      <header>
        <p className="workscapes-logo">W | workscapes</p>
        <p className="expense-report-title">Expense Report</p>
      </header>
      <div className="main-body">
        <Tabs onChange={handleChange} value={currentPage} centered>
          <Tab value="Employee Page" label="Employee Information" />
          <Tab value="Expense Information" label="Expense Information" />
        </Tabs>
        {currentPage === "Employee Page" ? (
          <EmployeeForm />
        ) : (
          <ExpenseForm
            rows={rows}
            setRows={setRows}
            rowModesModel={rowModesModel}
            setRowModesModel={setRowModesModel}
          />
        )}
      </div>
    </div>
  );
};

export default App;

import "../ExpenseForm/ExpenseForm.css";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Paper } from "@mui/material";

import FullFeaturedCrudGrid from "../CrudGrid/CrudGrid";

const ExpenseForm = ({ rows, setRows, rowModesModel, setRowModesModel }) => {
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="expense-info">
      <div className="date-and-purpose-wrapper">
        <Paper className="date-wrapper">
          <p className="date-selector-text">Expense Date Range</p>
          <div className="date-selector-input-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker slotProps={{ textField: { size: "small" } }} /> <p>to</p>
              <DatePicker slotProps={{ textField: { size: "small" } }} />
            </LocalizationProvider>
          </div>
        </Paper>
        <Paper className="purpose-wrapper">
          <p className="purpose-input-text">Expense Business Purpose</p>
          <div className="purpose-input-wrapper">
            <InputText className="purpose-input"></InputText>
          </div>
        </Paper>
      </div>
      <div className="crud-grid-wrapper">
        <FullFeaturedCrudGrid
          rows={rows}
          setRows={setRows}
          rowModesModel={rowModesModel}
          setRowModesModel={setRowModesModel}
        />
      </div>
      <Paper className="upload-receipt-wrapper">
        <p className="upload-receipt-text">
          Upload a receipt for each entry above
        </p>
        <FileUpload
          className="file-upload"
          multiple
          maxFileSize={1000000}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </Paper>
      <Button
        className="submit-button"
        label="Submit Expense Report"
        icon="pi pi-check"
        loading={loading}
        loadingIcon="pi pi-spin pi-spinner"
        onClick={load}
      />
    </div>
  );
};

export default ExpenseForm;

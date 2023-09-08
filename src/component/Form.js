import React from "react";
import "./Form.css";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import "./Modal.css";

function Form() {
  const [data, changedate] = useState({
    //use state for the inputs
    name: "",
    phone: "",
    age: "",
    salary: "Less than 500$",
    status: "",
  });
  const [isValid, setValid] = useState(false); //usestate for the submit
  const [openmodal, changestate] = useState(false); //usestate for Modal
  const [msg, setMsg] = useState("");

  const validate = () => {
    // to check if there any feild empty
    if (
      data.name.length === 0 ||
      data.phone.length === 0 ||
      data.age.length === 0 ||
      data.status.length === 0
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  // check the validation of data and store the eroor msg in msg object

  const checkDataValidation = () => {
    if (data.age < 18 || data.age > 65) {
      setMsg("Please inter your age correctly");
    } else if (data.phone.length !== 10) {
      setMsg("Please inter your number correctly");
    } else {
      setMsg("The form has been submited Successfully");
    }
  };

  return (
    <div className="formdiv">
      {openmodal && <Modal closeModal={changestate} msg={msg} />}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <div>
          <h5>Name</h5>
          <input
            type="text"
            onChange={(event) => {
              changedate({ ...data, name: event.target.value });
              validate();
            }}
          />
        </div>
        <div>
          <h5>Phone Number</h5>
          <input
            type="text"
            onChange={(event) => {
              changedate({ ...data, phone: event.target.value });
              validate();
            }}
          />
        </div>
        <div>
          <h5>Age</h5>
          <input
            type="text"
            onChange={(event) => {
              changedate({ ...data, age: event.target.value });
              validate();
            }}
          />
        </div>
        <div>
          <h5>Are you an employee</h5>
          <input
            type="radio"
            value="Employee"
            checked={data.status === "Employee"}
            onChange={(event) => {
              changedate({ ...data, status: event.target.value });
              validate();
            }}
          />
          Yes
          <input
            type="radio"
            value="not Employee"
            checked={data.status === "not Employee"}
            onChange={(event) => {
              changedate({ ...data, status: event.target.value });
              validate();
            }}
          />{" "}
          No
        </div>
        <div>
          <h5>Salary</h5>
          <select
            value={data.salary}
            onChange={(event) => {
              changedate({ ...data, salary: event.target.value });
              validate();
            }}
          >
            <option>Less than 500$</option>
            <option>Between 500$ and 2000$</option>
            <option>More than 2000$</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          onClick={() => {
            checkDataValidation();
            changestate(!openmodal);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  let color = "green";
  if (
    props.msg === "Please inter your age correctly" ||
    props.msg === "Please inter your number correctly"
  ) {
    color = "red";
  }
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h1 style={{ color: color }}>{props.msg}</h1>
        <button
          className="btn-modal"
          onClick={() => {
            props.closeModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;

import { Button } from "bootstrap";
import React from "react";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <Spinner
        // style={{ height: "400px" }}
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="fw-bold text-info"> Kharan </span>
      <ToastContainer />
    </div>
  );
};

export default Loading;

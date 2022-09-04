import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceDetail from "../../ServiceDetail/ServiceDetail";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service ">
      <img className="w-75 mt-2" src={img} />
      <h4>Service Name : {name}</h4>
      <p>Price : {price}</p>
      <small>{description}</small> <br />
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="btn btn-primary"
      >
        Book : {name}
      </button>
      <br />
    </div>
  );
};

export default Service;

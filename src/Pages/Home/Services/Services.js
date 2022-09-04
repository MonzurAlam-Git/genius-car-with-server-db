import React, { useEffect, useState } from "react";
import mechaninc_reSized from "../../../images/mechaninc_reSized.png";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  // default or minimum value - if the data are presented in array the dafault value will be an empty array, if the value is on addition format then 0 , if in multiplication format then 1 , if is in string format then empty string

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //dependency list --  when the first parameter will be called
  return (
    <div>
      <h1 className="services-title bg-dark m-5 p-3 rounded "> Services </h1>
      <div id="services" className="services-container container">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

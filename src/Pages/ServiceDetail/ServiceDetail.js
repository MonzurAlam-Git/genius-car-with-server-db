import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  console.log(service);
  // console.log(service.name);

  return (
    <div className="container">
      <h3 className="text-center">
        Please click Checkout Button : {service.name}
      </h3>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary"> Checkout </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

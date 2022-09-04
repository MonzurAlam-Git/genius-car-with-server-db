import React from 'react';
import UseServices from '../Hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = UseServices();

    const handleDeleteService = id => {
        const confirmation = window.confirm("Delte kore diben?")

        if (confirmation) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingUsers = services.filter(service => service._id !== id);
                    setServices(remainingUsers);
                })
        }


    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage Your Services </h1>
            {services.map(service =>
                <h4 key={service._id} > {service.name} <button className='btn btn-danger fw-bold' onClick={() => handleDeleteService(service._id)}> X </button></h4>
            )}
        </div>
    );
};

export default ManageServices;
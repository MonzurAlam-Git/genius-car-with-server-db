import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/service`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>
            <form className='w-50 d-flex flex-column mx-auto' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='mb-2' placeholder="Enter Name " {...register("name")} />
                <textarea className='mb-2' placeholder="Description " {...register("description")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className='mb-2' placeholder="img link "  {...register("img")} />
                <input className='mb-2' placeholder="price"  {...register("price", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="Submit" />
            </form>

        </div>
    );
};

export default AddService;
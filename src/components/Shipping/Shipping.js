import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hoocks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);

    return (
        <div className="signUp-container">
            <div className="singUp-form">
                <h1>Please Fill Up The Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" defaultValue={user.displayName} {...register("name", { required: true })} />
                <input type = "email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input type = "text" placeholder = "Country" {...register("country", { required: true })} />
                {errors.country && <span>This field is required</span>}
                <input type = "text" placeholder = "City" {...register("city", { required: true })} />
                {errors.city && <span>This field is required</span>}
                <input type = "text" placeholder = "House" {...register("house", { required: true })} />
                {errors.house && <span>This field is required</span>}
                <input type = "number" placeholder = "Phone" {...register("phone", { required: true })} />
                {errors.phone && <span>This field is required</span>}
                <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;
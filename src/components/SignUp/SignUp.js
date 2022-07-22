import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signUp-container">
            <div className ="singUp-form">                
                <h1>Create A New Account</h1>
                <form action="">
                <TextField fullWidth id="standard-basic" type="text" label="Your Email" variant="standard" /><br />
                <TextField fullWidth id="standard-basic" type="password" label="Your Password" variant="standard" /><br />
                <TextField fullWidth id="standard-basic" type="password" label="Re-enter your Password" variant="standard" /><br /><br />
                <Button type="submit" variant="contained">SignUp</Button>
                </form>
                <div>----------or----------</div>
                <Button variant="contained">SinIn With Google</Button>
                <p>Already Have An Account? <Link to ="/signin">Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;
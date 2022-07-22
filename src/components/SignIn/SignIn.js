import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hoocks/useAuth';


const SignIn = () => {
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/shop";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate(from, { replace: true });
            console.log(result);
        })
    }
    return (
        <div className="signUp-container">
            <div className ="singUp-form">                
                <h1>Log In</h1>
                <form action="">
                <TextField fullWidth id="standard-basic" type="text" label="Your Email" variant="standard" /><br />
                <TextField fullWidth id="standard-basic" type="password" label="Your Password" variant="standard" /><br /><br />
                <Button type="submit" variant="contained">SignIn</Button>
                </form>
                <div>--------------------or--------------------</div>
                <Button onClick ={handleGoogleSignIn} variant="contained">SinIn With Google</Button>
                <p>New To Ema Jhon? <Link to='/signup'> Create An Account</Link> </p>
            </div>
        </div>
    );
};

export default SignIn;
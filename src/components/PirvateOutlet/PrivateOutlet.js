import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hoocks/useAuth';

const PrivateOutlet = () => {
    const {user} = useAuth();
    const location = useLocation();
    return user.email ? <Outlet/> : <Navigate to="/signin" state ={{from: location}}/>
};

export default PrivateOutlet;
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hoocks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                {user.email && <span style = {{color: 'white'}} >Hello {user.displayName}</span>}
                
                {
                    user.email ?
                     <button onClick = {logOut} >Sign Out</button> :
                     <NavLink to="/signin">SignIn</NavLink>
                }
                { !user.email && <NavLink to="/signup">SignUp</NavLink>}
                
            </nav>
        </div>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/metro-logo-black.png'

const Header = () => {
    return (
        <div className='Header '>
            <nav style={{display: 'flex'}}>
                <div className='logo-image'>
                    <img style={{width:'10%', marginRight: '750px'}} src={logo} alt=""/>
                </div>
                
                <div className='myLinks'>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign up</Link>
                </div>
                                
            </nav>
        </div>
    );
};

export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/metro-logo-black.png'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log('From Header.js', loggedInUser);

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
                {loggedInUser.isSignedIn ? <Link to="" onClick={()=> setLoggedInUser({})} > Sign Out </Link> : <Link to='/login'> Sign in </Link> }
                <span className='user-name-nav'> {loggedInUser.isSignedIn && loggedInUser.name}</span>
                <span style={{display: 'inline-flex'}}><div className='profile-image'> {loggedInUser.isSignedIn && <img src={loggedInUser.photo} alt=""/> } </div></span>

                
                                                                                                            
                </div>
                                
            </nav>
        </div>
    );
};

export default Header;
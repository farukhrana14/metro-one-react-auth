
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'
import { UserContext } from '../../App';
//firebase for signout 
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogIn/firebase.config';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log('From Header.js', loggedInUser);


const headerSignOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
        }
        
        setLoggedInUser(signedOutUser);
      }).catch((error) => {
            console.log('Sign Out Error:', error);
        // An error happened.
      });
      

}


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
                {loggedInUser.isSignedIn ? <Link to="" onClick={()=> headerSignOut()} > <span className='sign-button'>Sign Out</span> </Link> : <Link to='/login'> <span className='sign-button'>Sign in</span> </Link> }
                <span className='user-name-nav'> {loggedInUser.isSignedIn && loggedInUser.name ? loggedInUser.name : <span> {loggedInUser.isSignedIn && loggedInUser.email} </span>  }</span>
                <span style={{display: 'inline-flex'}}><div className='profile-image'> {loggedInUser.photo ? <img src={loggedInUser.photo} alt=""/> : <span className='no-pic'>{loggedInUser.isSignedIn && <span>No Pic</span>}</span> } </div></span>
                                                                                                                           
                </div>
                                
            </nav>
        </div>
    );
};

export default Header;
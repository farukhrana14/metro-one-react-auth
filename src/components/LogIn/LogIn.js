import React, { useContext, useState } from 'react';
import { UserContext } from "../../App";
import {useHistory, useLocation } from 'react-router-dom';
import './LogIn.css';
import google from '../../images/googleIcon.png'
import facebook from '../../images/fbIcon.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    //Context API consume
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    //State and Location for ProtectedRoute
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //Google Sign in
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
                const userResponse = { isSignedIn: true, name: displayName, email: email, photo: photoURL, success: true }

                setUser(userResponse);
                setLoggedInUser(userResponse);
                history.replace(from);
                console.log('Google Loggedin user:', userResponse);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Google Login Error:', errorCode, errorMessage);

            });

    }

    //facebook Sign in
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFbSignIn = () => {
        firebase.auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const userResponse = { isSignedIn: true, name: displayName, email: email, photo: photoURL, success: true }

                setUser(userResponse);
                setLoggedInUser(userResponse);
                history.replace(from);
                console.log('Facebook Loggedin user:', userResponse);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Facebook Login Error:', errorCode, errorMessage);
            });
    }





    return (
        <div>
            <div className='signup-form'>
                {newUser ? <h2 className='form-title'>Create an Account</h2> : <h2 className='form-title'>Log In </h2>}
                <form >
                    {newUser && <input className='my-form-control' type="text" name='name' placeholder='Your Name' />
}                    <br />
                    <input className='my-form-control' type="text" name='email' placeholder='Your Email' autoComplete="email" />
                    <br />
                    <input className='my-form-control' type="password" name='password' placeholder='Password' autoComplete="current-password" />
                    <br />
                    {newUser && <input className='my-form-control' type="password" name='confirmPassword' placeholder='Confirm Password' autoComplete="new-password" />
}                    <br />
                    <input className='my-btn-control' type="button" value="Create an Account" />
                    
                    <label htmlFor="newUser">Don't have an account? Create an account </label>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />


                </form>
            </div>
            <br />

            <div className='seperator'>
                <hr width='25%' />
                <p className='seperator-text'>Or</p>
            </div>
            <div onClick={handleGoogleSignIn} className='google-sign-in'>
                <div className='google-img'>
                    <img src={google} alt="" />
                </div>

                <div className='google-text'>
                    <p>Continue with Google</p>
                </div>
            </div>
            <br />
            <div onClick={handleFbSignIn} className='fb-sign-in'>
                <div className='fb-img'>
                    <img src={facebook} alt="" />
                </div>

                <div className='fb-text'>
                    <p>Continue with Facebook</p>
                </div>
            </div>


        </div>
    );
};

export default LogIn;
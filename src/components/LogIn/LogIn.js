import React, { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
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
        confirmPassword: ''
    })

    const [error, setError] = useState(false);

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
                setError(errorMessage);
                // console.log('Google Login Error:', errorCode, errorMessage);

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
                setError(errorMessage);
                console.log('Facebook Login Error:', errorCode, errorMessage);
            });
    }


    // Validation when SignIn / SignUp with Email Password
    const handleBlur = (e) => {

        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);

        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFieldValid = isEmailValid;
        }

        if (e.target.value === 'password') {
            // Min 6 characters, min 1 number
            const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d](?=.{6,})$/.test(e.target.value);
            isFieldValid = isPasswordValid;
            console.log('Password:', e.target.value, isPasswordValid );
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    const handleSubmit = (e) => {
        //new user        
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {

                    const { displayName, email, photoURL } = result.user;
                    const userResponse = { isSignedIn: true, name: displayName, email: email, photo: photoURL, success: true }

                    setUser(userResponse);
                    setLoggedInUser(userResponse);
                    history.replace(from);
                    updateUserName(userResponse.name)
                    console.log('New User Sign up with Email successful:', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage);
                    console.log('New User Sign up with Email Error:', errorCode, errorMessage);
                });
        }
        // Not New User = Sign In
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(result => {

                    const { displayName, email, photoURL } = result.user;
                    const userResponse = { isSignedIn: true, name: displayName, email: email, photo: photoURL, success: true }

                    setUser(userResponse);
                    setLoggedInUser(userResponse);
                    history.replace(from);
                    console.log('Existing User Email SignIn successful:', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage);
                    console.log('Existing User Email SignIn Error:', errorCode, errorMessage);
                });
        }
        e.preventDefault();
    }

    //Update Name for sign up with Email
    //send user name / info to firebase when using custom sign up 

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('User Name Updated successful');
        }).catch(function (error) {
            setError(error)
            console.log(error);
        });
    }

    //signout 
    const handleSignOut = () => {
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
            setUser(signedOutUser);
            setLoggedInUser(signedOutUser);
            setNewUser(false);
            console.log('signedout successfully');
        }).catch((error) => {
            setError(error);
            console.log('Sign Out Error:', error);
            // An error happened.
        });

    }




    return (
        <div>
            <div className='signup-form'>
                {newUser ? <h2 className='form-title'>Create Account</h2> : <h2 className='form-title'>Sign In </h2>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input className='my-form-control' type="text" onBlur={handleBlur} name='name' placeholder='Your Name' autoComplete="username" required />}
                    <br />
                    <input className='my-form-control' type="text" onBlur={handleBlur} name='email' placeholder='Your Email' autoComplete="email" required />
                    <br />
                    <input className='my-form-control' type="password" onBlur={handleBlur} name='password' placeholder='Password' autoComplete="current-password" required />
                    <br />
                    {newUser && <input className='my-form-control' type="password" onBlur={handleBlur} name='confirmPassword' placeholder='Confirm Password' autoComplete="new-password" required />}
                    {(user.confirmPassword & user.password) && (user.password !== user.confirmPassword) ? <p className='error-message'>Confirm Password Mismatch</p> : null}


                    <input className='my-btn-control' type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                    {!newUser ? <label className='text-create-account' htmlFor="newUser"> Don't have an account? Create an account </label> : <label className='text-create-account' htmlFor="newUser"> <p> Have account? Unchek to sign in</p> </label>}
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <p style={{ color: 'red' }}>{error}</p>


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
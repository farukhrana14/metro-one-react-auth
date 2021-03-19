import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import google from '../../images/googleIcon.png'
import facebook from '../../images/fbIcon.png'

const LogIn = () => {
    return (
        <div>
            <div className='signup-form'>
                <h2 className='form-title'>Log In </h2>
                <form >
                    <input className='my-form-control' type="text" name='email' placeholder='Your Email' autoComplete="email" />
                    <br />
                    <input className='my-form-control' type="password" name='password' placeholder='Password' autoComplete="current-password" />
                    <br />
                    <input className='my-btn-control' type="button" value="Create an Account" />
                    <p>Don't have an account?  <Link to="/signup">Create and account</Link>   </p>


                </form>
            </div>
            <br />

            <div className='seperator'>
                <hr width='25%' />
                <p className='seperator-text'>Or</p>
            </div>
            <div className='google-sign-in'>
                <div className='google-img'>
                    <img src={google} alt="" />
                </div>

                <div className='google-text'>
                    <p>Continue with Google</p>
                </div>
            </div>
            <br/>
            <div className='fb-sign-in'>
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
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import google from '../../images/googleIcon.png'
import facebook from '../../images/fbIcon.png'

const SignUp = () => {
    return (
        <div>
            <div className='signup-form'>
                <h2 className='form-title'>Create an Account </h2>
                <form >
                    <input className='my-form-control' type="text" name='name' placeholder='Your Name' />
                    <br />
                    <input className='my-form-control' type="text" name='email' placeholder='Your Email' autoComplete="email" />
                    <br />
                    <input className='my-form-control' type="password" name='password' placeholder='Password' autoComplete="new-password" />
                    <br />
                    <input className='my-form-control' type="password" name='confirmPassword' placeholder='Confirm Password' autoComplete="new-password" />
                    <br />
                    <input className='my-btn-control' type="button" value="Create an Account" />
                    <p>Already have an account?  <Link to="/login">Login</Link>   </p>


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

export default SignUp;
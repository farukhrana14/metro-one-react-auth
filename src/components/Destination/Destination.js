import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Maps from '../Maps/Maps';

import './Destination.css';


const Destination = () => {

    const [destination, setDestination] = useState({ from: '', to: '', date: '', time: '' })

    const handleBlur = (e) => {
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);
        console.log(newDestination);
    }

    return (
        <div>
            <hr color='#DBDBDB' />
            <div className='destination-map'>
                <div className='destination'>
                    <p>Pick up point</p>
                    <input className='my-form-control-destination' onBlur={handleBlur} name='from' type="text" />
                    <p>Destination</p>
                    <input className='my-form-control-destination' onBlur={handleBlur} name='to' type="text" />
                    <br />
                    <br />
                    <label htmlFor="journey-date">Date:</label>
                    <br />
                    <br />
                    <br />
                    <input className='my-form-control-destination' onBlur={handleBlur} type="date" id="journey-date" name="date" />
                    <br />
                    <br />
                    <br />
                    <label htmlFor="jorney-time">Select a time:</label>
                    <br />
                    <br />
                    <br />
                    <input className='my-form-control-destination' onBlur={handleBlur} type="time" id="jorney-time" name="time"></input>

                   
                    <br />

                    <Link to={{pathname: "/search", state: {destination}}} ><input className='my-btn-control-destination' type="button" value="Search" /></Link>

                    <br />
                   
                    

                </div>

                <div className='map'>
                    <Maps></Maps>
                </div>
            </div>
        </div>
    );
};

export default Destination;
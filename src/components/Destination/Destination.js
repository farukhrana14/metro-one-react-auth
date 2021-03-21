import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Maps from '../Maps/Maps';

import './Destination.css';

const Destination = () => {

    // const {destinationId} = useParams();
    // console.log('id from card ', destinationId);
    const location = useLocation();
    const id = location.state.id;

    const [destination, setDestination] = useState({ from: '', to: '', date: '', time: '', key: 1 })

    const handleBlur = (e) => {
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        newDestination['key'] = id;
        setDestination(newDestination);
    }

     
    const handleSearch = (e) => {
        if (!destination.from & !destination.to === true){
            alert ('Write pick up point and destination.')
            
            e.preventDefault();
        } 
    }


    return (
        <div>
            <hr color='#DBDBDB' />
            <div className='destination-map'>
                <div className='destination'>
                    <p>Pick up point</p>
                    <input className='my-form-control-destination' onBlur={handleBlur} name='from' type="text" required />
                    <p>Destination</p>
                    <input className='my-form-control-destination' onBlur={handleBlur} name='to' type="text" required />
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

                    {
                        <Link to={{ pathname: "/search", state: { destination } }} ><input className='my-btn-control-destination' onClick={handleSearch} type="button" value="Search" /></Link>
                    }

                </div>

                <div className='map'>
                    <Maps></Maps>
                </div>
            </div>
        </div>
    );
};

export default Destination;
import React from 'react';
import map from '../../images/map.png';
import './Destination.css';


const Destination = () => {
    
    const handleSearch = () => {
        console.log('Search clicked');
    }

    return (
        <div>
            <hr color='#DBDBDB' />
            <div className='destination-map'>
                <div className='destination'>
                    <p>Pick up point</p>
                    <input className='my-form-control-destination' type="text" />
                    <p>Destination</p>
                    <input className='my-form-control-destination' type="text" />
                    <br/>
                    <label htmlFor ="journey-date">Date:</label>
                    <br/>
                    <input className='my-form-control-destination' type="date" id="journey-date" name="date"/>
                    <br/>
                    <label htmlFor="jorney-time">Select a time:</label>
                    <br/>
                    <input className='my-form-control-destination' type="time" id="jorney-time" name="time"></input>
                    
                    <input onClick={handleSearch} className='my-btn-control-destination' type="button" value="Search" />
                    <br/>
                    
                    
                </div>

                <div className='map'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;
import { Button } from '@material-ui/core';
import React from 'react';
import './Home.css';
import taka from '../../images/taka-symbol.png'


const Home = () => {

    return (
        <div className='home-div'>
            <div className="price-card price-one-time">
                <h2>ONE TIME TICKET</h2>
                <Button buttonstyle={{ borderRadius: 25 }} style={{ borderRadius: 25 }} variant="contained" color="primary">BUY NOW</Button>
                <p className='price-text'> <img style={{width:'30px'}} src={taka} alt=""/> 100</p>
            </div>

            <div className="price-card">
                <h2>ONE DAY PASS</h2>
                <Button  buttonstyle={{ borderRadius: 25 }} style={{ borderRadius: 25 }} variant="contained" color="primary">BUY NOW</Button>
                <p className='price-text'> <img style={{width:'30px'}} src={taka} alt=""/> 500</p>
            </div>

            <div className="price-card">
                <h2>MONTHLY PASS</h2>
                <Button  buttonstyle={{ borderRadius: 25 }} style={{ borderRadius: 25 }} variant="contained" color="primary">BUY NOW</Button>
                <p className='price-text'><img style={{width:'30px'}} src={taka} alt=""/> 1500</p>
            </div>

            <div className="price-card">
                <h2>ANNUAL PASS</h2>
                <Button  buttonstyle={{ borderRadius: 25 }} style={{ borderRadius: 25 }} variant="contained" color="primary">BUY NOW</Button>
                <p className='price-text'> <img style={{width:'30px'}} src={taka} alt=""/> 9000</p>
            </div>

        </div>
    );
};

export default Home;
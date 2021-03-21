import React from 'react';
import { Link } from 'react-router-dom';
import taka from '../../images/taka-symbol.png'
import './Card.css';


const Card = (props) => {
    const data = props.pd
    const {id, type, price, cardImage, ticket} = data;


    return (

        <div className="price-card" style={{ background: `url(${cardImage}) no-repeat`}}>
            <h2 className='heading-allcaps'>{type}</h2>
            
            <p className='price-text'> <img style={{ width: '30px' }} src={taka} alt="" /> {price}</p>

            <Link to = {{pathname: "/destination", state: {id}}}> <button className='buy-button'>BUY NOW</button> </Link>

        </div>
    );
};

export default Card;
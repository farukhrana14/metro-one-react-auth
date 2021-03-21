import React from 'react';
import './SearchResult.css';
import Maps from '../Maps/Maps';
import { useLocation } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';


const SearchResult = () => {

    const location = useLocation();
    const destination = location.state.destination;

    const ticketInfo = fakeData.find(pk => pk.id === destination.key)
    



    return (
        <div>
            <hr color='#DBDBDB' />
            <div className='search-result-map'>
                <div className='search-result'>

                    <div className='route'>
                        <p className='text-cap'>Starts: {destination.from}</p>
                        <p className='text-cap'>Ends: {destination.to}</p>
                    </div>
                    <br />
                    <div className='time-date'>
                        <p> <strong>Date and Time of Travel </strong></p>
                        <p>Date: {destination.date}</p>
                        <p>Time: {destination.time}</p>
                        <p>Ticket type: <span></span> <strong>{ticketInfo.type}</strong> </p>
                    </div>

                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticketInfo.ticket} alt="" /> </div>
                        <div ><p>Ticket 1</p></div>
                        <div><p>$ {ticketInfo.price}</p></div>
                    </div>
                    <br />
                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticketInfo.ticket} alt="" /> </div>
                        <div ><p>Ticket 2</p></div>
                        <div><p>$ {ticketInfo.price}</p></div>
                    </div>
                    <br />
                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticketInfo.ticket} alt="" /> </div>
                        <div ><p>Ticket 3</p></div>
                        <div><p>$ {ticketInfo.price}</p></div>
                    </div>

                </div>

                <div className='map'>
                    <Maps></Maps>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
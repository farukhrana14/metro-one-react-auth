import React from 'react';
import './SearchResult.css';
import ticket from '../../images/ticket.png';
import Maps from '../Maps/Maps';
import { useLocation, useParams } from 'react-router';

const SearchResult = () => {

    const location = useLocation();
    const destination = location.state.destination;
    console.log(destination);


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

                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticket} alt="" /> </div>
                        <div ><p>Ticket 1</p></div>
                        <div><p>$ 67</p></div>
                    </div>
                    <br />
                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticket} alt="" /> </div>
                        <div ><p>Ticket 2</p></div>
                        <div><p>$ 70</p></div>
                    </div>
                    <br />
                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticket} alt="" /> </div>
                        <div ><p>Ticket 3</p></div>
                        <div><p>$ 57</p></div>
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
import React from 'react';
import map from '../../images/map.png';
import './SearchResult.css';
import ticket from '../../images/ticket.png';

const SearchResult = () => {



    return (
        <div>
            <hr color='#DBDBDB' />
            <div className='search-result-map'>
                <div className='search-result'>

                    <div className='route'>
                        <p>Starts: Mirpur 1</p>
                        <p>Ends: Dhanmondi</p>
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
                        <div ><p>Ticket 1</p></div>
                        <div><p>$ 67</p></div>
                    </div>
                    <br />
                    <div className='ticket-price'>
                        <div className='ticket-img'> <img src={ticket} alt="" /> </div>
                        <div ><p>Ticket 1</p></div>
                        <div><p>$ 67</p></div>
                    </div>

                </div>

                <div className='map'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
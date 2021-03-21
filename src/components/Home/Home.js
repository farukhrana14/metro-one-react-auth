
import React, {useState } from 'react';
import './Home.css';
import Card from '../Card/Card';
import fakeData from '../../fakeData/fakeData.json';

const Home = () => {
    
    const [data, setData] = useState(fakeData);
    
    
    
    return (
        <div className='bg-img'>
            <div className='home-div'>

            {
              data && data.map(pd => <Card key={pd.id} pd={pd}></Card>)
            }

            </div>
        </div>
    );
};

export default Home;
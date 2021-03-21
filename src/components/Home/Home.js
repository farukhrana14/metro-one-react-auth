
import React, { useContext } from 'react';
import './Home.css';
import { UserContext } from '../../App';
import Card from '../Card/Card';


const Home = () => {
    //Context API consume
    const [data, setData] = useContext(UserContext);
    
    
    return (
        <div className='bg-img'>
            <div className='home-div'>

            {
               data?.map(pd => <Card key={pd.id} pd={pd}></Card>)
            }

            </div>
        </div>
    );
};

export default Home;
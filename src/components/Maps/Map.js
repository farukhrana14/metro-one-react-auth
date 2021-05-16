import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const Map = (props) => {
    const { origin, destination } = props;
    const [directiponRespnse, setDirectiponRespnse] = useState(null);

    console.log('MAP object', process.env.REACT_APP_GOOGLE_MAP_API_KEY) 

    return (
        <div>

            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >

                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '600px',
                        width: '600px'
                    }}
                    // required
                    zoom={10}
                    // required
                    center={{
                        lat: 23.777176,
                        lng: 90.399452
                    }}
                >

                    <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if (res !== null) {
                                setDirectiponRespnse(res);
                            }
                        }}

                    />

                   
                    {
                        directiponRespnse && <DirectionsRenderer
                            // required
                            options={{ directions: directiponRespnse }}

                        />
                    }


                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
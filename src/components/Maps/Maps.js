import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

const Maps = () => {

  const {ref, map, google} = useGoogleMaps(
    "AIzaSyAInpQ8uyETz65p986MMu-My-YVMMDBD94", {
      center: { lat: 23.777176, lng: 90.399452 },
      zoom: 10, },
  )

  return (
    <div ref={ref} style={{ width: 600, height: 600 }}>
      
    </div>
  );
};

export default Maps;
import React from "react";
import GoogleMapReact from 'google-map-react';
import Container from "@mui/material/Container"
const Location = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 43.0,
      lng: -75.0,
    },
    zoom: 11
  };

  return (
    
    <Container maxWidth='lg' sx={{display: 'grid', justifyItems: 'center'}}>
    <div style={{ height: '30vh', width: '80%', marginTop: '3rem' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Location
          lat={59.955413}
          lng={30.337844}
          text="our agency"
        />
      </GoogleMapReact>
    </div>
    </Container>
  );
}
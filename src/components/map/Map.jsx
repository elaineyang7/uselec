import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

import './map.scss';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon 
      icon={locationIcon} 
      className="pin__icon" 
    />
    <p className="pin__text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel, text }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={text}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;
import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import secretKeys from './secrets.json';
import mapStyles from './mapStyles.json';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true
};

const Map = props => {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: secretKeys.apiKey }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={mapOptions}
      />
    </Wrapper>
  );
};

Map.defaultProps = {
  center: {
    lat: 41.39,
    lng: 2.17
  },
  zoom: 13.5
};

export default Map;

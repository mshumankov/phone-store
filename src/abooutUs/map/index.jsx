import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const Map = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 42.697708, lng: 23.321867 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const App = () => {
    return (
        <div style={{ height: '100vh' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&&key=`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}
export default App;
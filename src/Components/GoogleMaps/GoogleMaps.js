import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import Marker from '../../assets/images/marker.png';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 38.232770,
            lng: -85.718330
        },
        zoom: 15,
    };

    render() {
        return(
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCeIizxfEGn9g2cu4XZc0KVpDXhmNi7wAU' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                lat={38.232770}
                lng={-85.718330}
                text={'OYLC'}
                />
            </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap;
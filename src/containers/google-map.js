import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { initMap, addMarker } from '../services/google-map-service';
import _ from 'lodash';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

class GoogleMap extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.mapAndMarkers = initMap(document.getElementById('myMap'), this.props.user.users);
        this.mapAndMarkers.map.addListener('click', (e) => {
            let latLng = e.latLng;
            addMarker(latLng, this.mapAndMarkers.map);
        });
        //dblclick remove marker event
        _.forEach(this.mapAndMarkers.markers, (marker) => {
            marker.addListener('dblclick', (e) => {
                marker.setMap(null);
            })
        })
    }

    render() {
        return (
            <div>
                <div id="myMap"></div>
            </div>
        );
    }
}

GoogleMap.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
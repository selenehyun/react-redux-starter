import _ from 'lodash';

export const initMap = (el, locations) => {
    let markers = [];
    let map = new google.maps.Map(el, {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 2,
        zoomControl: true
    });

    _.forEach(locations, u => {
        let latlng = {
            lat: Number(u.address.geo.lat),
            lng: Number(u.address.geo.lng)
        }
        let marker = addMarker(latlng, map);
        markers.push(marker);
    })

    return {
        map, markers
    }
};

export const addMarker = (latlng, map) => {
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Hello World!'
    });

    return marker;
};
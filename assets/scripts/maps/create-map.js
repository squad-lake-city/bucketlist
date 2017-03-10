'use strict'

const store = require('../store');

const createMap = function(tempPlaceId) {

   // This function is called when the user clicks the UI button requesting
   // a reverse geocode.
   function geocodePlaceId(tempPlaceId, geocoder, map, infowindow) {
     let placeId = tempPlaceId;
     console.log('geo');
     geocoder.geocode({'placeId': placeId}, function(results, status) {
       if (status === 'OK') {
         if (results[0]) {
           map.setZoom(11);
           map.setCenter(results[0].geometry.location);
           let marker = new google.maps.Marker({
             map: map,
             position: results[0].geometry.location
           });
           infowindow.setContent(results[0].formatted_address);
           infowindow.open(map, marker);
         } else {
           window.alert('No results found');
         }
       } else {
         window.alert('Geocoder failed due to: ' + status);
       }
     });
   }
   // Initialize the map.
   function initMap() {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 40.72, lng: -73.96}
      });
      let geocoder = new google.maps.Geocoder;
      let infowindow = new google.maps.InfoWindow;
      geocodePlaceId(geocoder, map, infowindow);
    }
    initMap();
};

module.exports = {
  createMap,
};

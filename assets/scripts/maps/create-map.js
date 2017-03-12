'use strict'

const store = require('../store');

const createMap = function(tempPlaceId) {
  let placeId = tempPlaceId;

  function initMap() {
     let map = new google.maps.Map(document.getElementById('map'), {
       zoom: 8,
       center: {lat: 40.72, lng: -73.96}
     });
     let geocoder = new google.maps.Geocoder;
     let infowindow = new google.maps.InfoWindow;

       geocodePlaceId(geocoder, map, infowindow);

   }

   // This function is called when the user clicks the UI button requesting
   // a reverse geocode.
   function geocodePlaceId(geocoder, map, infowindow) {
     geocoder.geocode({'placeId': placeId}, function(results, status) {
       if (status === 'OK') {
         if (results[0]) {
           map.setZoom(12);
           map.setCenter(results[0].geometry.location);
           let marker = new google.maps.Marker({
             map: map,
             position: results[0].geometry.location
           });
           console.log(results[0].formatted_address);

           let address = results[0].formatted_address.toString();
           let activity = $(".view-activity").text();
           let label = `${activity}: ${address}`;
           label = `<div class="map-label"><div id="activity-label">${activity}</div><div id="address-label">${address}</div></div>`;
          //  label = '<div class="test-div">MyTest</div>'
           infowindow.setContent(label);
           infowindow.open(map, marker);
         } else {
           window.alert('No results found');
         }
       } else {
         window.alert('Geocoder failed due to: ' + status);
       }
     });
   }
   initMap();
};

module.exports = {
  createMap,
};

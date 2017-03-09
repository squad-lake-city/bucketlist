// 'use strict';
//
// // let GooglePlaces = require('google-places');
//
//
//
// const runMaps = function() {
//   event.preventDefault();
//   let places = new GooglePlaces('AIzaSyAaPP2gFyioh2Ly38zAPNX3OHw5gpsmoNg');
//
//   places.search({
//     keyword: 'Vermonster'
//   }, function(err, response) {
//     console.log("search: ", response.results);
//
//     places.details({
//       reference: response.results[0].reference
//     }, function(err, response) {
//       console.log("search details: ", response.result.website);
//       // search details:  http://www.vermonster.com/
//     });
//   });
//
//   places.autocomplete({input: 'Verm', types: "(cities)"}, function(err, response) {
//     console.log("autocomplete: ", response.predictions);
//
//     let success = function(err, response) {
//       console.log("did you mean: ", response.result.name);
//   did you mean:  Vermont
//   did you mean:  Vermont South
//   did you mean:  Vermilion
//   did you mean:  Vermillion
// };
//
// for(let index in response.predictions) {
//   places.details({reference: response.predictions[index].reference}, success);
// }
// });
//
//
//
//
//
//
//
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.
//
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
//
// let placeSearch, autocomplete;
// let componentForm = {
//   street_number: 'short_name',
//   route: 'long_name',
//   locality: 'long_name',
//   administrative_area_level_1: 'short_name',
//   country: 'long_name',
//   postal_code: 'short_name'
// };
//
// function initAutocomplete() {
//   // Create the autocomplete object, restricting the search to geographical
//   // location types.
//   autocomplete = new google.maps.places.Autocomplete(
//       /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
//       {types: ['geocode']});
//
//   // When the user selects an address from the dropdown, populate the address
//   // fields in the form.
//   autocomplete.addListener('place_changed', fillInAddress);
// }
//
// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   let place = autocomplete.getPlace();
//
//   for (let component in componentForm) {
//     document.getElementById(component).value = '';
//     document.getElementById(component).disabled = false;
//   }
//
//   // Get each component of the address from the place details
//   // and fill the corresponding field on the form.
//   for (let i = 0; i < place.address_components.length; i++) {
//     let addressType = place.address_components[i].types[0];
//     if (componentForm[addressType]) {
//       let val = place.address_components[i][componentForm[addressType]];
//       document.getElementById(addressType).value = val;
//     }
//   }
// }
//
// // Bias the autocomplete object to the user's geographical location,
// // as supplied by the browser's 'navigator.geolocation' object.
// function geolocate() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       let geolocation = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       let circle = new google.maps.Circle({
//         center: geolocation,
//         radius: position.coords.accuracy
//       });
//       autocomplete.setBounds(circle.getBounds());
//     });
//   }
// }
// console.log(places);
// };
//
// module.exports = {
//   runMaps,
// };

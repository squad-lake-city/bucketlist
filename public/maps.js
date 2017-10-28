webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(48);


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {// This example displays an address form, using the autocomplete feature
	// of the Google Places API to help users fill in the information.
	'use strict';

	// require('jQuery');

	var longitude = void 0;
	var latitude = void 0;

	var createMap = function createMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: {
	      lat: longitude,
	      lng: latitude
	    },
	    zoom: 13
	  });
	};

	$(document).ready(function () {

	  $("#autocomplete").on('focus', function () {
	    geolocate();
	  });

	  var placeSearch = void 0,
	      autocomplete = void 0;
	  var componentForm = {
	    street_number: 'short_name',
	    route: 'long_name',
	    locality: 'long_name',
	    administrative_area_level_1: 'short_name',
	    country: 'long_name',
	    postal_code: 'short_name'
	  };

	  function initialize() {
	    // Create the autocomplete object, restricting the search
	    // to geographical location types.
	    autocomplete = new google.maps.places.Autocomplete(
	    /** @type {HTMLInputElement} */
	    document.getElementById('autocomplete'), {
	      types: ['geocode']
	    });
	    // When the user selects an address from the dropdown,
	    // populate the address fields in the form.
	    google.maps.event.addListener(autocomplete, 'place_changed', function () {
	      fillInAddress();
	    });
	  }

	  // [START region_fillform]
	  function fillInAddress() {
	    // Get the place details from the autocomplete object.
	    var place = autocomplete.getPlace();
	    var storedPlaceId = place.place_id;
	    $(".copied-place-id").val(storedPlaceId);

	    longitude = parseFloat(place.geometry.location.lat());
	    latitude = parseFloat(place.geometry.location.lng());
	    document.getElementById("latitude").value = place.geometry.location.lat();
	    document.getElementById("longitude").value = place.geometry.location.lng();

	    for (var component in componentForm) {
	      document.getElementById(component).value = '';
	      document.getElementById(component).disabled = false;
	    }

	    // Get each component of the address from the place details
	    // and fill the corresponding field on the form.
	    for (var i = 0; i < place.address_components.length; i++) {
	      var addressType = place.address_components[i].types[0];
	      if (componentForm[addressType]) {
	        var val = place.address_components[i][componentForm[addressType]];
	        document.getElementById(addressType).value = val;
	      }
	    }
	    var copyText = $("#autocomplete").val();
	    $(".copied-autocomplete").val(copyText);
	    createMap();
	  }
	  // [END region_fillform]

	  // [START region_geolocation]
	  // Bias the autocomplete object to the user's geographical location,
	  // as supplied by the browser's 'navigator.geolocation' object.
	  function geolocate() {
	    if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function (position) {
	        var geolocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	        var latitude = position.coords.latitude;
	        var longitude = position.coords.longitude;
	        document.getElementById("latitude").value = latitude;
	        document.getElementById("longitude").value = longitude;

	        autocomplete.setBounds(new google.maps.LatLngBounds(geolocation, geolocation));
	      });
	    }
	  }
	  initialize();
	});

	// [END region_geolocation]
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

});
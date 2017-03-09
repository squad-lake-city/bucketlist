'use strict';

// const config = require('./../config.js');
// const store = require('./../store');

// Bucketlist API
let input = $("#pac-input");

const getMapResults = function() {
  $(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=AIzaSyAaPP2gFyioh2Ly38zAPNX3OHw5gpsmoNg`,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (json) {
            console.dir(json.sites);
        },
        error: function (e) {
            console.log(e.message);

        }
    });
  });
};


module.exports = {
  getMapResults,
};

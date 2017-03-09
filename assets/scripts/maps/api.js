'use strict';

const config = require('./../config.js');
const store = require('./../store');

// Bucketlist API

const getMapResults = function() {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};


module.exports = {
  getMapResults,
};

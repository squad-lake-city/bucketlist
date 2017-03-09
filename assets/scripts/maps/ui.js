'use strict';

// const store = require('../store');

// Bucketlist UI
const getMapResultsSuccess = (data) => {
  console.log('get bucketlist success');
  console.log(data);
};

const getMapResultsFailure = (data) => {
  console.log('get bucketlist failure');
  console.log(data);
};

module.exports = {
  getMapResultsSuccess,
  getMapResultsFailure,
};

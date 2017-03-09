'use strict';

const store = require('../store');

// handlebars
const displayBucketlistTemplate = require('../templates/bucketlist.handlebars');

const getBucketlistSuccess = function (data) {
  let displayBucketlistsHtml = displayBucketlistTemplate({ bucketlists: data.bucketlists });
    console.log('get bucketlist success');
  if (data.bucketlists.length >= 0){
    $('.log').text("You have " + data.bucketlists.length + " items on your bucketlist");
    // console.log(data);
    $('.log').show();
    $('.log-two').empty().append(displayBucketlistsHtml);
} else {
    $('.log-two').empty().append(displayBucketlistsHtml);
    $('.log').val('');
  }
};

const hideBucketlist = () => {
    $('.log-two').empty();
    $('.log').hide();
  };



// Bucketlist UI

// const getBucketlistSuccess = (data) => {
//   console.log('get bucketlist success');
//   console.log(data);
// };

const getBucketlistFailure = (data) => {
  console.log('get bucketlist failure');
  console.log(data);
};

const showBucketlistSuccess = (data) => {
  console.log('show bucketlist success');
  console.log(data);
};

const showBucketlistFailure = (data) => {
  console.log('show bucketlist failure');
  console.log(data);
};

const createBucketlistSuccess = (data) => {
  console.log('create bucketlist success');
  console.log(data);
};

const createBucketlistFailure = (data) => {
  console.log('create bucketlist failure');
  console.log(data);
};

const deleteBucketlistSuccess = (data) => {
  console.log('delete bucketlist success');
  console.log(data);
};

const deleteBucketlistFailure = (data) => {
  console.log('delete bucketlist failure');
  console.log(data);
};

const updateBucketlistSuccess = (data) => {
  console.log('update bucketlist success');
  console.log(data);
};

const updateBucketlistFailure = (data) => {
  console.log('update bucketlist failure');
  console.log(data);
};

module.exports = {
  createBucketlistSuccess,
  createBucketlistFailure,
  getBucketlistSuccess,
  getBucketlistFailure,
  hideBucketlist,
  showBucketlistSuccess,
  showBucketlistFailure,
  updateBucketlistSuccess,
  updateBucketlistFailure,
  deleteBucketlistSuccess,
  deleteBucketlistFailure,
};

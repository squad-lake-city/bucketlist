'use strict';

const store = require('../store');
const createMaps = require('../maps/create-map');

// handlebars
const displayBucketlistTemplate = require('../templates/bucketlist.handlebars');
const showBucketlistTemplate = require('../templates/show-bucketlist.handlebars');

const getBucketlistSuccess = function (data) {
  let displayBucketlistsHtml = displayBucketlistTemplate({ bucketlists: data.bucketlists });
    // console.log('get bucketlist success');
  if (data.bucketlists.length >= 0){
    $('.log').text("You have " + data.bucketlists.length + " items on your bucketlist");
    // console.log(data);
    $('.log').show();
    $('.content').empty().append(displayBucketlistsHtml);
} else {
    $('.content').empty().append(displayBucketlistsHtml);
    $('.log').val('');
  }
};

const hideBucketlist = () => {
    $('.content').empty();
    $('.log').hide();
  };



// Bucketlist UI

// const getBucketlistSuccess = (data) => {
//   console.log('get bucketlist success');
//   console.log(data);
// };

// const getBucketlistFailure = (data) => {
//   console.log('get bucketlist failure');
//   console.log(data);
// };

const showBucketlistSuccess = (data) => {
  console.log('show bucketlist success');
  console.log(data);
  let showBucketlistHtml = showBucketlistTemplate({ bucketlist: data.bucketlist });
  $('.content').empty().append(showBucketlistHtml);
  $('.log').text('');
  createMaps.createMap(store.mapPlaceId);
};

const showBucketlistFailure = (data) => {
  console.log('show bucketlist failure');
  console.log(data);
};

const createBucketlistSuccess = (data) => {
  console.log('create bucketlist success');
  console.log(data);
  $('.success').text('Item created!')
};

const createBucketlistFailure = (data) => {
  console.log('create bucketlist failure');
  console.log(data);
  $('.create-failure').text('Item not created. Make sure all forms are filled out')
};

const deleteBucketlistSuccess = () => {
  console.log('delete bucketlist success');
  // console.log(data);

};

const deleteBucketlistFailure = () => {
  console.log('delete bucketlist failure');
};

const updateBucketlistSuccess = (data) => {
  console.log('update bucketlist success');
  console.log(data);
};

const updateBucketlistFailure = () => {
  console.log('update bucketlist failure');
  // console.log(error);
};

module.exports = {
  createBucketlistSuccess,
  createBucketlistFailure,
  getBucketlistSuccess,
  // getBucketlistFailure,
  hideBucketlist,
  showBucketlistSuccess,
  showBucketlistFailure,
  updateBucketlistSuccess,
  updateBucketlistFailure,
  deleteBucketlistSuccess,
  deleteBucketlistFailure,
};

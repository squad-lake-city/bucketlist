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
    $('.number').text("You have " + data.bucketlists.length + " items on your bucketlist");
    // console.log(data);
    $('.number').show();
    $('.content').empty().append(displayBucketlistsHtml);
    $('#map').hide();
} else {
    $('.content').empty().append(displayBucketlistsHtml);
    $('.number').val('');
  }
};

const hideBucketlist = () => {
    $('.content').empty();
    $('.number').hide();
    $('#map').hide();
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
  $('.number').text('');
  $('#map').show();
  createMaps.createMap(store.mapPlaceId);
};

const showBucketlistFailure = (data) => {
  console.log('show bucketlist failure');
  console.log(data);
};

const createBucketlistSuccess = (data) => {
  console.log('create bucketlist success');
  console.log(data);
  $('.create-success').text('Item created!').delay(1000).hide(2000);
  $('.create-success').show();
  // $('.form-clear').val('');
};

const createBucketlistFailure = (data) => {
  console.log('create bucketlist failure');
  console.log(data);
  $('.create-failure').text('Item not created. Make sure all forms are filled out').delay(1000).hide(2000);
  $('.create-failure').show();
};

const deleteBucketlistSuccess = () => {
  console.log('delete bucketlist success');
  // console.log(data);
  $('.log').text('Delete success!').delay(1000).hide(2000);
  $('.log').show();
  $('#map').hide();

};

const deleteBucketlistFailure = () => {
  console.log('delete bucketlist failure');
  $('.log-fail').text('Item not deleted').delay(1000).hide(2000);
  $('.log-fail').show();
};

const updateBucketlistSuccess = (data) => {
  console.log('update bucketlist success');
  console.log(data);
  $('.log').text('Update success!').delay(1000).hide(2000);
  $('.log').show();
};

const updateBucketlistFailure = () => {
  console.log('update bucketlist failure');
  // console.log(error);
  $('.log-fail').text('Update failed, please make sure all the fields are filled out').delay(1000).hide(2000);
  $('.log-fail').show();
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

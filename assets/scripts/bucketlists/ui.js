'use strict';

const store = require('../store');
const createMaps = require('../maps/create-map');

// handlebars
const displayBucketlistTemplate = require('../templates/bucketlist.handlebars');
const showBucketlistTemplate = require('../templates/show-bucketlist.handlebars');

const getBucketlistSuccess = function(data) {
  let displayBucketlistsHtml = displayBucketlistTemplate({
    bucketlists: data.bucketlists
  });
  $('#create-bl-item').show();
  if (data.bucketlists.length >= 0) {
    $('.number').text("You have " + data.bucketlists.length + " items on your bucketlist");
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

const showBucketlistSuccess = (data) => {
  let showBucketlistHtml = showBucketlistTemplate({
    bucketlist: data.bucketlist
  });
  $('.content').empty().append(showBucketlistHtml);
  $('.number').text('');
  $('#map').show();
  createMaps.createMap(store.mapPlaceId);
  $('#create-bl-item').hide();
};

const createBucketlistSuccess = () => {
  $('.create-success').text('Item created!').delay(1000).hide(3000);
  $('.create-success').show();
  $('#map').hide();
  $('.form-clear').val('');
};

const createBucketlistFailure = () => {
  $('.create-failure').text('Item not created. Make sure all forms are filled out').delay(1000).hide(3000);
  $('.create-failure').show();
};

const deleteBucketlistSuccess = () => {
  $('.log').text('Delete success!').delay(1000).hide(3000);
  $('.log').show();
  $('#map').hide();
};

const deleteBucketlistFailure = () => {
  $('.log-fail').text('Item not deleted').delay(1000).hide(3000);
  $('.log-fail').show();
};

const updateBucketlistSuccess = () => {
  $('.log').text('Update success!').delay(1000).hide(3000);
  $('.log').show();
};

const updateBucketlistFailure = () => {
  $('.log-fail').text('Update failed, please make sure all the fields are filled out').delay(1000).hide(3000);
  $('.log-fail').show();
};

const updateBucketlistItemSuccess = () => {
  $('.log').text('Update success!').delay(1000).hide(3000);
  $('.log').show();
};

const updateBucketlistItemFailure = () => {
  $('.log-fail').text('Update failed, please make sure all the fields are filled out').delay(1000).hide(3000);
  $('.log-fail').show();
};

module.exports = {
  createBucketlistSuccess,
  createBucketlistFailure,
  getBucketlistSuccess,
  // getBucketlistFailure,
  hideBucketlist,
  showBucketlistSuccess,
  // showBucketlistFailure,
  updateBucketlistSuccess,
  updateBucketlistFailure,
  deleteBucketlistSuccess,
  deleteBucketlistFailure,
  updateBucketlistItemSuccess,
  updateBucketlistItemFailure,
};

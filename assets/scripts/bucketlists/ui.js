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
  createMaps.createMap(store.mapPlaceId, store.activityDesc);
  // $('#create-bl-item').hide();
};

const showBucketlistCreateForm = () => {
  let createFormHtml = '<input name="bucketlist[completed]" type="hidden" value="false"><input class="checkbox-field" name="bucketlist[completed]" placeholder="Completed?" type="checkbox" value="true">';
  $("#insert-checkbox-create").append(createFormHtml);
  $(".complete-bucketlist-table").remove();
  $("#create-bl-item").show();

};


const createBucketlistSuccess = () => {
  $('.create-success').text('Item created!').show(0).delay(5000).slideUp(500);
  $('.create-success').show();
  $('#map').hide();
  $('.form-clear').val('');
  $("#create-bl-item").hide();
  $("#insert-checkbox-create").children().remove();
  $("#index-bl-item button").click();
};

const createBucketlistFailure = () => {
  $('.create-failure').text('Item not created. Make sure all required fields are completed & you have selected an auto-complete address from the dropdown').show(0).delay(5000).slideUp(500);
  $('.create-failure').show();
};

const deleteBucketlistSuccess = () => {
  $('.log').text('Delete success!').show(0).delay(5000).slideUp(500);
  $('.log').show();
  $('#map').hide();
};

const deleteBucketlistFailure = () => {
  $('.log-fail').text('Item not deleted').show(0).delay(5000).slideUp(500);
  $('.log-fail').show();
};

const updateBucketlistSuccess = () => {
  $('.log').text('Update success!').show(0).delay(5000).slideUp(500);
  $('.log').show();
};

const updateBucketlistFailure = () => {
  $('.log-fail').text('Update failed, please make sure all the fields are filled out').show(0).delay(5000).slideUp(500);
  $('.log-fail').show();
};

const updateBucketlistItemSuccess = () => {
  $('.log').text('Update success!').show(0).delay(5000).slideUp(500);
  $('.log').show();
  $("#show-bucketlist-btn").click();
};

const updateBucketlistItemFailure = () => {
  $('.log-fail').text('Update failed, please make sure all the fields are filled out').show(0).delay(5000).slideUp(500);
  $('.log-fail').show();
};

module.exports = {
  createBucketlistSuccess,
  createBucketlistFailure,
  getBucketlistSuccess,
  hideBucketlist,
  showBucketlistSuccess,
  updateBucketlistSuccess,
  updateBucketlistFailure,
  deleteBucketlistSuccess,
  deleteBucketlistFailure,
  updateBucketlistItemSuccess,
  updateBucketlistItemFailure,
  showBucketlistCreateForm,
};

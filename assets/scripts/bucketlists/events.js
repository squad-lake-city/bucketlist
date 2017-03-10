'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

// Bucketlist EVENTS

const onGetBucketlist = function(event) {
  event.preventDefault();
  api.getBucketlist()
    .done(ui.getBucketlistSuccess)
    .fail(ui.getBucketlistFailure);
};

const onHideBucketlist= (event) => {
  event.preventDefault();
  ui.hideBucketlist();
};

const onShowBucketlist = function(event) {
  let id = event.target.dataset.id;
  event.preventDefault();
  api.showBucketlist(id)
    .done(ui.showBucketlistSuccess)
    .fail(ui.showBucketlistFailure);
};

const onCreateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBucketlist(data)
    .then((response) => {
      console.log(response);
      console.log(response.bucketlist._id);
    })
    .done(ui.createBucketlistSuccess)
    // .then(onGetBucketlist)
    .fail(ui.createBucketlistFailure);
    // onGetBucketlist();
};

const onDeleteBucketlist = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  // let data = getFormFields(event.target);
  api.deleteBucketlist(id)
    .done(ui.deleteBucketlistSuccess)
    // .then(onGetBucketlist)
    .fail(ui.deleteBucketlistFailure);
    // onGetBucketlist();
};

const onUpdateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.dataset.id;
  api.updateBucketlist(data, id)
    .done(ui.updateBucketlistSuccess)
    // .then(onGetBucketlist)
    .fail(ui.updateBucketlistFailure);
    // onGetBucketlist();
};

const addHandlers = () => {
  $('#index-bl-item').on('click', onGetBucketlist);
  $('#hide-index-bl-item').on('click', onHideBucketlist);
  $('.content').on('click', '.show-bucketlist', onShowBucketlist);
  $('#create-bl-item').on('submit', onCreateBucketlist);
  $('.content').on('click','.remove-bucketlist-item', function() {
    onDeleteBucketlist(event);
    $(this).parent().parent().parent().parent().hide();
  });
};

module.exports = {
  addHandlers,
};

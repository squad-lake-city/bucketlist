'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

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
  event.preventDefault();
  api.showBucketlist()
    .done(ui.showBucketlistSuccess)
    .fail(ui.showBucketlistFailure);
};

const onCreateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBucketlist(data)
    .then((response) => {
      console.log(response);
      store.currentBucketlistId = response.bucketlist.id;
      return store.currentBucketlistId;
    })
    .done(ui.createBucketlistSuccess)
    .fail(ui.createBucketlistFailure);
};

const onDeleteBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteBucketlist(data)
    .done(ui.deleteBucketlistSuccess)
    .fail(ui.deleteBucketlistFailure);
};

const onUpdateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateBucketlist(data)
    .done(ui.updateBucketlistSuccess)
    .fail(ui.updateBucketlistFailure);
};

const addHandlers = () => {
  $('#index-bl-item').on('click', onGetBucketlist);
  $('#hide-index-bl-item').on('click', onHideBucketlist);
  $('#show-bl-item').on('submit', onShowBucketlist);
  $('#create-bl-item').on('submit', onCreateBucketlist);
  $('#delete-bl-item').on('submit', onDeleteBucketlist);
  $('#update-bl-item').on('submit', onUpdateBucketlist);
};

module.exports = {
  addHandlers,
};

'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

// Bucketlist EVENTS

const onGetBucketlist = function(event) {
  event.preventDefault();
  api.getBucketlist()
    .then(ui.getBucketlistSuccess)
    .catch(ui.getBucketlistFailure);
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
    // .then((response) => {
    //   console.log(response);
    //   console.log(response.bucketlist._id);
    // })
    .then(ui.createBucketlistSuccess)
    .then(onGetBucketlist);
    // .catch(ui.createBucketlistFailure);
    onGetBucketlist(event);
};

const onDeleteBucketlist = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  // let data = getFormFields(event.target);
  api.deleteBucketlist(id)
    .then(()=>{
      $('.content').empty();
      api.getBucketlist()
        .then(ui.getBucketlistSuccess)
        .catch(ui.getBucketlistFailure);
    }).then(ui.deleteBucketlistSuccess)
      .catch(ui.deleteBucketlistFailure);
    // .catch(ui.deleteBucketlistFailure);


};

const onUpdateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.dataset.id;
  api.updateBucketlist(data, id)
    .then(()=> {
      $('.content').empty();
      api.getBucketlist()
      .then(ui.getBucketlistSuccess)
      .catch(ui.getBucketlistFailure);
    }).then(ui.updateBucketlistSuccess)
      .catch(ui.updateBucketlistFailure);


};

const addHandlers = () => {
  $('#index-bl-item').on('click', onGetBucketlist);
  $('#hide-index-bl-item').on('click', onHideBucketlist);
  $('.content').on('click', '.show-bucketlist', onShowBucketlist);
  $('#create-bl-item').on('submit', onCreateBucketlist);
  $('.content').on('click','.remove-bucketlist-item',onDeleteBucketlist);
  $('.content').on('submit', '.edit-bucketlist', onUpdateBucketlist);
};

module.exports = {
  addHandlers,
};

'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');
const config = require('../config');
// Bucketlist EVENTS

const onGetBucketlist = function(event) {
  event.preventDefault();
  api.getBucketlist()
    .then(ui.getBucketlistSuccess)
    .catch(ui.getBucketlistFailure);
};

const onHideBucketlist = (event) => {
  event.preventDefault();
  ui.hideBucketlist();
};

const onShowBucketlist = function(event) {
  let id = event.target.dataset.id;
  store.mapPlaceId = $(this).attr("data-placeid");
  event.preventDefault();
  api.showBucketlist(id)
    .done(ui.showBucketlistSuccess)
    .fail(ui.showBucketlistFailure);
};

const onCreateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBucketlist(data)
    .then(ui.createBucketlistSuccess)
    .catch(ui.createBucketlistFailure)
    .then(onGetBucketlist);
  onGetBucketlist(event);
};

const onDeleteBucketlist = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  api.deleteBucketlist(id)
    .then(() => {
      $('.content').empty();
      api.getBucketlist()
        .then(ui.getBucketlistSuccess)
        .catch(ui.getBucketlistFailure);
    }).then(ui.deleteBucketlistSuccess)
    .catch(ui.deleteBucketlistFailure);


};

const onUpdateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.dataset.id;
  api.updateBucketlist(data, id)
    .then(() => {
      $('.content').empty();
      api.getBucketlist()
        .then(ui.getBucketlistSuccess)
        .catch(ui.getBucketlistFailure);
    }).then(ui.updateBucketlistSuccess)
    .catch(ui.updateBucketlistFailure);


};

const onEditItem = function() {
  let buttonParent = $(this).parent();
  let id = $(this).attr("data-id");
  let activity = $(this).attr("data-activity");
  let location = $(this).attr("data-location");
  let completed = $(this).attr("data-completed");
  let placeId = $(this).attr("data-placeid");
  let currentActivityDiv = $(this).parent().parent().children(".bl-activity");
  let currentCompletedDiv = $(this).parent().parent().children(".bl-completed");

 $(currentActivityDiv).text("");
 $(currentCompletedDiv).text("");

  currentActivityDiv.text("");
  currentCompletedDiv.text("");

  let hiddenCheckHtml = $('<input name="bucketlist[completed]" type="hidden" value="false">');
  let shownCheckHtml = $('<input class="checkbox-field" name="bucketlist[completed]" placeholder="Completed?" type="checkbox" value="true">');
  let activityHtml = $('<input class="create-form-clear form-clear update-activity-table" type="text" name="bucketlist[activity]" placeholder="activity">');
  let submitBtn = $('<button type="button" class="btn btn-default update-submission">Create Bucketlist Item</button>');

  $(currentActivityDiv).append(activityHtml);
  $(currentCompletedDiv).append(hiddenCheckHtml);
  $(currentCompletedDiv).append(shownCheckHtml);

  $(".update-activity-table").val(activity);
  let buttonHTML = $(this).parent().html();
  console.log(buttonHTML);
  $(this).text("Submit Edit");
  $(this).removeClass("glyphicon-edit");
  $(this).addClass("submit-item-edit");
};

const editBucketListItem = function(id, location, activity, placeId, completed) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: `{
      "location": ${location},
      "activity": ${activity},
      "placeId": ${placeId},
      "completed": ${completed}
    }`
  });
};

const onUpdatedSubmit = function(event) {
  event.preventDefault();
  let id = $(this).attr("data-id");
  let location = $(this).attr("location");
  let activity = $(this).parent().parent().children(".bl-activity").val();
  let completed = $(this).parent().parent().children(".bl-completed").val();
  let placeid = $(this).attr("placeid");
  editBucketListItem(id, location, activity, placeid, completed);
};

const addHandlers = () => {
  $('#index-bl-item').on('click', onGetBucketlist);
  $('#hide-index-bl-item').on('click', onHideBucketlist);
  $('.content').on('click', '.show-bucketlist', onShowBucketlist);
  $('#create-bl-item').on('submit', onCreateBucketlist);
  $('.content').on('click', '.remove-bucketlist-item', onDeleteBucketlist);
  // $('.content').on('submit', '.edit-bucketlist', onUpdateBucketlist);
  $('.content').on('click', '.edit-bucketlist-item', onEditItem);
  $('.content').on('click', '.submit-item-edit', onUpdatedSubmit);

};

module.exports = {
  addHandlers,
};

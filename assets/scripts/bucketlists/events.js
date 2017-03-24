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
  event.preventDefault();
  let id = event.target.dataset.id;
  store.mapPlaceId = $(this).attr("data-placeid");
  store.activityDesc = $(this).attr("data-activity");
  api.showBucketlist(id)
    .done(ui.showBucketlistSuccess)
    .fail(ui.showBucketlistFailure);
};

const onCreateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createBucketlist(data)
    .then(ui.createBucketlistSuccess)
    .catch(ui.createBucketlistFailure);
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
  // let buttonParent = $(this).parent();
  $(".edit-bucketlist-item").hide();
  $(".cancel-bucketlist-edit").hide();
  $(".cancel-edit-td").show();
  $(".cancel-edit-th").show();


  // To prevent multiple edits
  let dataId = $(this).attr("data-id");
  let currentbuttonDataId = $(this).parent().children(".edit-bucketlist-item").attr("data-id");
  let currentCancelButton = $(this).parent().parent().children(".cancel-edit-td").children(".cancel-bucketlist-edit");

  $(this).parent().show();
  $(".cancel-edit-td").show();
  $(currentCancelButton).show();
  $(".cancel-edit-th").show();

  let activity = $(this).attr("data-activity");
  // let location = $(this).attr("data-location");
  let completed = $(this).attr("data-completed");
  // let placeId = $(this).attr("data-placeid");
  let currentActivityDiv = $(this).parent().parent().children(".bl-activity");
  let currentCompletedDiv = $(this).parent().parent().children(".bl-completed");
  // let saveCompletedDivVal = $(this).parent().parent().children(".bl-completed").text();

  let saveCurrentCompleted = $(this).parent().parent().children(".bl-completed").text().trim();

  $(currentActivityDiv).text("");
  $(currentCompletedDiv).text("");

  currentActivityDiv.text("");
  currentCompletedDiv.text("");

  // let hiddenCheckHtml = $('<input name="bucketlist[completed]" type="hidden" value="false">');
  let shownCheckHtml = $('<input class="checkbox-field" name="bucketlist[completed]" placeholder="Completed?" type="checkbox">');
  let activityHtml = $('<input class="create-form-clear form-clear update-activity-table" type="text" name="bucketlist[activity]" placeholder="activity">');
  // let submitBtn = $('<button type="button" class="btn btn-default update-submission">Create Bucketlist Item</button>');

  $(currentActivityDiv).append(activityHtml);
  // $(currentCompletedDiv).append(hiddenCheckHtml);
  $(currentCompletedDiv).append(shownCheckHtml);

  $(".update-activity-table").val(activity);

  if (saveCurrentCompleted === "Yes") {
    $(this).parent().parent().children(".bl-completed").children('.checkbox-field').prop( "checked", true );
  } else {
    $(this).parent().parent().children(".bl-completed").children('.checkbox-field').prop( "checked", false );
  }

  let dummyButton = $('<button class="dummy-update-btn">Submit</button>');

  $(this).hide();
  $(this).parent().append(dummyButton);
};

const editBucketListItem = function(id, location, activity, placeId, completed) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      "bucketlist": {
        "activity": activity,
        "completed": completed,
        "location": location,
        "placeId": placeId
      }
    }
  });
};

const onUpdatedSubmit = function(event) {
  event.preventDefault();

  let submitButton = $(this).parent().children(".edit-bucketlist-item");

  let activityVal = $(this).parent().parent().children(".bl-activity").children(".update-activity-table").val();

  const isChecked = function() {
    if ($('.checkbox-field').is(':checked') === true) {
      return true;
    } else {
      return false;
    }
  };

  let completed = isChecked();
  let id = $(submitButton).attr("data-id");
  let location = $(submitButton).attr("data-location");
  let placeid = $(submitButton).attr("data-placeid");
  // $(submitButton).attr("data-activity", activityVal);
  // $(submitButton).attr("data-completed", completedVal);

  editBucketListItem(id, location, activityVal, placeid, completed)
    .then(() => {
        $('.content').empty();
        api.getBucketlist()
          .then(ui.getBucketlistSuccess)
          .catch(ui.getBucketlistFailure);
    })
    .done(ui.updateBucketlistItemSuccess)
    .fail(ui.updateBucketlistItemFailure);
};

const addHandlers = () => {
  $('#index-bl-item').on('submit', onGetBucketlist);
  $('#hide-index-bl-item').on('submit', onHideBucketlist);
  $('.content').on('click', '.show-bucketlist', onShowBucketlist);
  $('#create-bl-item').on('submit', onCreateBucketlist);
  $('.content').on('click', '.remove-bucketlist-item', onDeleteBucketlist);
  $('.content').on('click', '.edit-bucketlist-item', onEditItem);
  $('.content').on('click', '.dummy-update-btn', onUpdatedSubmit);
  $('.content').on('click', '.cancel-bucketlist-edit', onGetBucketlist);

};

module.exports = {
  addHandlers,
};

'use strict';

const api = require('./api');
const ui = require('./ui');
// const getFormFields = require('../../../lib/get-form-fields');
// const store = require('../store');

// Bucketlist EVENTS

const onGetMapResults = function(event) {
  event.preventDefault();
  api.getMapResults()
    .done(ui.getMapResultsSuccess)
    .fail(ui.getMapResultsFailure);
};

const addHandlers = () => {
  $('#index-bl-item').on('submit', onGetMapResults);
};

module.exports = {
  addHandlers,
};

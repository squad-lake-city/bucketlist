'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// Bucketlist EVENTS

const onGetBucketlist = function(event) {
  event.preventDefault();
  api.getStudents()
    .done(ui.getStudentSuccess)
    .fail(ui.getStudentFailure);
};

const onShowBucketlist = function(event) {
  event.preventDefault();
  api.showStudent()
    .done(ui.showStudentSuccess)
    .fail(ui.showStudentFailure);
};

const onCreateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createStudent(data)
    .then((response) => {
      store.currentStudentId = response.student.id;
      return store.currentStudentId;
    })
    .done(ui.createStudentSuccess)
    .fail(ui.createStudentFailure);
};

const onDeleteBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteStudent(data)
    .done(ui.deleteStudentSuccess)
    .fail(ui.deleteStudentFailure);
};

const onUpdateBucketlist = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateStudent(data)
    .done(ui.updateStudentSuccess)
    .fail(ui.updateStudentFailure);
};

const addHandlers = () => {

};

module.exports = {
  addHandlers,
};

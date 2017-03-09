'use strict';

const config = require('./../config.js');
const store = require('./../store');

// Bucketlist API

const getBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("show-student-stud-id").value,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createBucketlist = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("delete-student-stud-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateBucketlist = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/students/' + document.getElementById("update-student-student-id").value,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

module.exports = {
  getBucketlist,
  showBucketlist,
  createBucketlist,
  deleteBucketlist,
  updateBucketlist,
};

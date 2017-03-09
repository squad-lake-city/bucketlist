'use strict';

const config = require('./../config.js');
const store = require('./../store');

// Bucketlist API

const getBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/' + document.getElementById("show-bl-item-id").value,
    // url: config.apiOrigin + '/bucklists/' + store.
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createBucketlist = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/' + document.getElementById("delete-bl-item-id").value,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateBucketlist = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/bucklists/' + document.getElementById("update-bl-item-id").value,
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

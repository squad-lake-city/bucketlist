'use strict';

const config = require('./../config.js');
const store = require('./../store');

// Bucketlist API

const getBucketlist = function() {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const showBucketlist = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const createBucketlist = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};

const deleteBucketlist = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const updateBucketlist = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
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

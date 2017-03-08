'use strict';

const config = require('./../config.js');
const store = require('./../store');



const indexBucketlist = function () {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const showBucketlist = function () {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const editBucketlist = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

const deleteBucketlist = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const createBucketlist = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/bucketlists',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

module.exports = {
  indexBucketlist,
  showBucketlist,
  editBucketlist,
  createBucketlist,
  deleteBucketlist
};

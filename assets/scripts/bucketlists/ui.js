'use strict';

const store = require('../store');

// Bucketlist UI
const getBucketlistSuccess = (data) => {
  console.log('get bucketlist success');
  console.log(data);
};

const getBucketlistFailure = (data) => {
  console.log('get bucketlist failure');
  console.log(data);
};

const showBucketlistSuccess = (data) => {
  console.log('show bucketlist success');
  console.log(data);
};

const showBucketlistFailure = (data) => {
  console.log('show bucketlist failure');
  console.log(data);
};

const createBucketlistSuccess = (data) => {
  console.log('create bucketlist success');
  console.log(data);
  $("#new-bucketlist-form").hide();
  $("#new-setting-form").show();
  $("#create-setting-stud-id").attr("value", store.currentBucketlistId);
};

const createBucketlistFailure = (data) => {
  console.log('create bucketlist failure');
  console.log(data);
};

const deleteBucketlistSuccess = (data) => {
  console.log('delete bucketlist success');
  console.log(data);
};

const deleteBucketlistFailure = (data) => {
  console.log('delete bucketlist failure');
  console.log(data);
};

const updateBucketlistSuccess = (data) => {
  console.log('update bucketlist success');
  console.log(data);
};

const updateBucketlistFailure = (data) => {
  console.log('update bucketlist failure');
  console.log(data);
};

module.exports = {
  createBucketlistSuccess,
  createBucketlistFailure,
  getBucketlistSuccess,
  getBucketlistFailure,
  showBucketlistSuccess,
  showBucketlistFailure,
  updateBucketlistSuccess,
  updateBucketlistFailure,
  deleteBucketlistSuccess,
  deleteBucketlistFailure,
};

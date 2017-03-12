'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const auth = require('./auth/events');
const bucklist = require('./bucketlists/events');
const maps = require('./maps/events');

$(() => {
  auth.addHandlers();
  bucklist.addHandlers();
  maps.addHandlers();
});

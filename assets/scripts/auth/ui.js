'use strict';

const signInSuccess = function() {
  console.log("sign-in success");
  $('.signin-success').text('Signed in!');
};

const signInFailure = function() {
  console.log("sign-in failure");
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match');
};

const signUpSuccess = function() {
  console.log("sign-up success");
  $('.signup-success').text('Signed up!');
};

const signUpFailure = function() {
  console.log("sign-up failure");
  $('.signup-failure').text('Failed sign-up. The user email you used may be taken and/or your passwords match');
};

const changePasswordSuccess = function() {
  console.log("change-password success");
  $('.changepw-success').text('Successfully changed your password');
};

const changePasswordFailure = function() {
  console.log("change-password failure");
  $('.changepw-failure').text('Change password attempt failed. Make sure you correctly entered your original password.');
};

const signOutSuccess = function() {
  console.log("sign-out success");
  $('.signout-success').text('signed out!');
};

const signOutFailure = function() {
  console.log("sign-out failure");
  $('.signout-failure').text('failed sign-out');
};


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
};

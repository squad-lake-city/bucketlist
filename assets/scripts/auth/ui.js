'use strict';

const signInSuccess = function() {
  console.log("sign-in success");
  $('.signin-failure').text('Signed in!');
};

const signInFailure = function() {
  console.log("sign-in failure");
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match');
};

const signUpSuccess = function() {
  console.log("sign-up success");
  $('.signup-failure').text('Signed up!');
};

const signUpFailure = function() {
  console.log("sign-up failure");
  $('.signup-failure').text('Failed sign-up. The user email you used may be taken and/or your passwords match');
};

const changePasswordSuccess = function() {
  console.log("change-password success");
};

const changePasswordFailure = function() {
  console.log("change-password failure");
};

const signOutSuccess = function() {
  console.log("sign-out success");
};

const signOutFailure = function() {
  console.log("sign-out failure");
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

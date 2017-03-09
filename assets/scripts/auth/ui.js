'use strict';

const signInSuccess = function() {
  console.log("sign-in success");
};

const signInFailure = function() {
  console.log("sign-in failure");
};

const signUpSuccess = function() {
  console.log("sign-up success");
};

const signUpFailure = function() {
  console.log("sign-up failure");
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

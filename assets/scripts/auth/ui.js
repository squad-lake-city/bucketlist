'use strict';

const signInSuccess = function() {
  console.log("sign-in success");
  $('.signin-success').text('Signed in!').delay(1000).hide(2000);
  $('.signin-success').show();
  $('#sign-out').show();
  $('.form-clear').val('');
  $('.content').show();
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#create-bl-item').show();
  $('#index-bl-item').show();
  $('#hide-index-bl-item').show();
};


const signInFailure = function() {
  console.log("sign-in failure");
  $("#sign-in").addClass("open");
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match').delay(1000).hide(2000);
  $('.signin-failure').show();
};

const signUpSuccess = function() {
  console.log("sign-up success");
  let transferEmail = $("#sign-up .signup-email").val();
  console.log(transferEmail);
  $("#sign-in").addClass("open");
  $('.signup-success').text('Signed up!').delay(1000).hide(2000);
  $('.signup-success').show();
  $('#sign-up').hide();
  $('.form-clear').val('');
  $("#sign-in .signin-email").val(transferEmail);
};

const signUpFailure = function() {
  console.log("sign-up failure");
  $("#sign-up").addClass("open");
  $('.signup-failure').text('Failed sign-up. The user email you used may be taken and/or your passwords match').delay(1000).hide(2000);
  $('.signup-failure').show();
};

const changePasswordSuccess = function() {
  console.log("change-password success");
  $('.changepw-success').text('Successfully changed your password').delay(1000).hide(2000);
  $('.changepw-success').show();
  $('.form-clear').val('');
};

const changePasswordFailure = function() {
  console.log("change-password failure");
  $('.changepw-failure').text('Change password attempt failed. Make sure you correctly entered your original password.').delay(1000).hide(2000);
  $('.changepw-failure').show();
};

const signOutSuccess = function() {
  console.log("sign-out success");
  $('.signout-success').text('signed out!').delay(1000).hide(2000);
  $('.signout-success').show();
  $('#sign-up').show();
  $('#sign-in').show();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('.content').hide();
  $('#create-bl-item').hide();
  $('#index-bl-item').hide();
  $('#hide-index-bl-item').hide();
  $('#map').hide();
  $('.form-clear').val('');
};

const signOutFailure = function() {
  console.log("sign-out failure");
  $('.signout-failure').text('failed sign-out').delay(1000).hide(2000);
  $('.signout-failure').show();
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

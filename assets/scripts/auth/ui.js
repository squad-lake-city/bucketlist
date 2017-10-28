'use strict';

const signInSuccess = function() {
  $("#homepage").hide();
  $('.signin-success').text('Signed in!').show(0).delay(5000).slideUp(500);
  $('.signin-success').show();
  $('#sign-out').show();
  $('.form-clear').val('');
  $('.content').show();
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#index-bl-item').show();
  $("#create-form-toggle-btn").show();
  $("#create-bl-item").hide();
  $("#insert-checkbox-create").children().remove();
  $("#hide-index-bl-item button").click();
  $("#hide-index-bl-item").hide();

};


const signInFailure = function() {
  $("#sign-in").addClass("open");
  $('.signin-failure').text('Failed sign-in attempt. User email may not exist and/or passwords may not match').show(0).delay(5000).slideUp(500);
  $('.signin-failure').show();
};

const signUpSuccess = function() {
  let transferEmail = $("#sign-up .signup-email").val();
  $("#sign-in").addClass("open");
  $('.signup-success').text('Signed up!').show(0).delay(5000).slideUp(500);
  $('.signup-success').show();
  $('#sign-up').hide();
  $('.form-clear').val('');
  $("#sign-in .signin-email").val(transferEmail);
};

const signUpFailure = function() {
  $("#sign-up").addClass("open");
  $('.signup-failure').text('Failed sign-up. The user email you used may be taken and/or your passwords match').show(0).delay(5000).slideUp(500);
  $('.signup-failure').show();
};

const changePasswordSuccess = function() {
  $("#homepage").hide();
  $('.changepw-success').text('Successfully changed your password').show(0).delay(5000).slideUp(500);
  $('.changepw-success').show();
  $('.form-clear').val('');
};

const changePasswordFailure = function() {
  $("#homepage").hide();
  $('.changepw-failure').text('Change password attempt failed. Make sure you correctly entered your original password.').show(0).delay(5000).slideUp(500);
  $('.changepw-failure').show();
};

const signOutSuccess = function() {
  $("#homepage").show();
  $('.signout-success').text('signed out!').show(0).delay(5000).slideUp(500);
  $('.signout-success').show();
  $('#sign-up').show();
  $('#sign-in').show();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('.content').hide();
  $(".number").hide();
  // $('#create-bl-item').hide();
  $("#create-form-toggle-btn").hide();
  $('#index-bl-item').hide();
  $('#hide-index-bl-item').hide();
  $('#map').hide();
  $('.form-clear').val('');
  $('.checkbox-field').prop('checked', false);
  $("#create-bl-item").hide();
  $("#insert-checkbox-create").children().remove();
  $("#create-form-toggle-btn").hide();
  $("#create-bl-item").hide();


};

const signOutFailure = function() {
  $('.signout-failure').text('failed sign-out').show(0).delay(5000).slideUp(500);
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

'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);


const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure);
  } else {
    ui.signUpFailure();
  }
};

const onSignIn = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      store.user = response.user;
      return store;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if ( $(".new-password").val() === "" ) {
    $('.changepw-failure').text('Change password attempt failed. Make sure you correctly entered your original password.').show(0).delay(5000).slideUp(500);
  } else {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure);
  }
};

const onSignOut = function(event) {
  event.preventDefault();
  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure);
};

const addHandlers = () => {
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  $('#create-bl-item').hide();
  $('#hide-index-bl-item').hide();
  $('#index-bl-item').hide();
  $('#map').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};

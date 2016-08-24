import './register.html';

import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Session } from 'meteor/session';

Template.page_register.onRendered(() => {
  $(".form-field input[type='text'], .form-field input[type='email']").change(function() {
    if($(this).val()) {
      $(this).next().addClass('labelActive');
    } else {
      $(this).next().removeClass('labelActive');
    }
  });
});

Template.page_register.events({
  'click .form-submit' () {
    $(".register-form").submit();
  },
  'submit .register-form' (event) {
    event.preventDefault();

    let email     = event.target.email.value;
    let firstname = event.target.firstname.value;
    let lastname  = event.target.lastname.value;
    let phoneno   = event.target.phoneno.value;

    Meteor.call('register', {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phoneno: phoneno
    }, (err, res) => {
      if (err) {
        console.error(err);
        alert(err.reason);
      } else {
        Session.set('token', res);
        Router.go('/success');
      }
    });
  }
});

import './register.html';

import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Session } from 'meteor/session';

Template.page_register.events({
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

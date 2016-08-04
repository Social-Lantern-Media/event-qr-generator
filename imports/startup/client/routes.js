// Clientside Package Imports

import { Router } from 'meteor/iron:router';

// Template and UI component Imports

import '../../ui/layouts/body.js';
import '../../ui/pages/home.js';

// Iron Router basic configuration

var appname = Meteor.absoluteUrl().split('/')[3];

Router.configure({
  layoutTemplate: 'app_body'
});

// Iron Router Main Routes

Router.route(appname + '/', function() {
  this.render('page_home');
});
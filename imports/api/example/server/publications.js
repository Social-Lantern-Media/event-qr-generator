import { Meteor } from 'meteor/meteor';

import { Example } from '../example.js';

Meteor.publish("example", function() {
  return Example.find({_id:'example'});
});
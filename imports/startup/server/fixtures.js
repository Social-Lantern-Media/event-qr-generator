import { Meteor } from 'meteor/meteor';
import { Example } from '../../api/example/example.js';

Meteor.startup(() => {
  if(Example.find().count() === 0) {
    // If the collection is empty/doesn't exist, define the basic structure.
    
    Example.insert({
      _id: 'example',
      data: []
    });
  }
});
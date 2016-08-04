// Definition of collection and data restrictions...

import { Mongo } from 'meteor/mongo';

export const Registrations = new Mongo.Collection('registrations');

Registrations.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

// Definition of collection and data restrictions...

import { Mongo } from 'meteor/mongo';

export const Example = new Mongo.Collection('example');

Example.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});
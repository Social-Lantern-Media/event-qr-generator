import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { Registrations } from './registrations.js';

// Main Registrations module logic

  /*
   * Description:
   *
   * Registrations module for collecting registrations
   * and generating / managing QR tokens.
   */

if(Meteor.isServer) {
  Meteor.startup(() => {
      // Generate Master Override Token
    if (!Registrations.find({"email": "MASTER_OVERRIDE"}).count()) {
      Registrations.insert({
        "email": "MASTER_OVERRIDE",
        "firstname": "",
        "lastname": "",
        "phoneno": "",
        "token": Random.id(32)
      })
    }
  });

  Meteor.methods({
    "register" ({ email, firstname, lastname, phoneno }) {
      if (!email || !firstname || !lastname || !phoneno) {
        throw new Meteor.Error(400, "Missing required argument!");
      }

      if (Registrations.find({"email": email}).count()) {
        throw new Meteor.Error(400, "User already registered!");
      } else {
        var token = Random.id(32);

        Registrations.insert({
          "email": email,
          "firstname": firstname,
          "lastname": lastname,
          "phoneno": phoneno,
          "token": token
        });

        return token;
      }
    }
  });
}

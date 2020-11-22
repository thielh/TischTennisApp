import '../imports/startup/accounts-config.js';

import './extImports.js'
import './routes.js'
import './main.html'
import '../imports/ui/01index.js'
import { Template } from 'meteor/templating';

// access e-mail of the currently logged in user
Template.body.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    },

    userRole: function() {
        if (Roles.userIsInRole(Meteor.user(), 'admin')) {
            return "Admin";
          }
        else {
            return "Tischtennisspieler/in"
        }
    }
});

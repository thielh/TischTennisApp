import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';
import '../imports/api/platten.js';

Meteor.startup(() => {
  // code to run on server at startup
});



//// PUBLISH ALL PLATTEN AND EVENTS ////
Meteor.publish('plattenDB', function() {
  return Platten.find();
});
Meteor.publish('eventsDB', function() {
  return Events.find();
});

//// PUBLISH ALL USER ROLES ////
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
})


//// AUTHORISATION STUFF ////

var postSignUp = function(userId, info) {
  console.log(userId);
  console.log(info);
  Roles.addUsersToRoles(userId, info.profile.roleH);
};

AccountsTemplates.configure({
  postSignUpHook : postSignUp,
});


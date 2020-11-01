import { Meteor } from 'meteor/meteor';
import '../imports/api/events.js';
import '../imports/api/platten.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('plattenDB', function() {
  return Platten.find();
});

Meteor.publish('eventsDB', function() {
  return Events.find();
});
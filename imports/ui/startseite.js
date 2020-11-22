//// STARTSEITE

Meteor.subscribe('plattenDB');
Meteor.subscribe('eventsDB');

// Get all Events & Platten from MongoDB

Template.startseite.helpers({
    plattenHelper: function(){
        return Platten.find();
    },

    eventsHelper: function(){
        return Events.find();
    },
    
    getPlatteById: function(id) {
        return Platten.find(id)
    },

    // CHECK IF USER IS AN ADMIN
    admin : function() {
        return Roles.userIsInRole(Meteor.userId(), 'admin')
    }
});


Template.startseite.events({

    'click .oneEvent': function(event) {
        var newValue = this._id;
        Session.set("selectedEvent", newValue);
        console.log(newValue);
    },

    'click #deleteEvent': function(event) {
        Events.remove(this._id);
    },

    'click #deletePlatte': function(event) {
        Platten.remove(this._id);
    }
});
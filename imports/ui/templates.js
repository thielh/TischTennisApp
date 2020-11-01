import './templates.html'

import { Template } from 'meteor/templating';
import '../api/platten.js';
import '../api/events.js';

//// STARTSEITE


    Meteor.subscribe('plattenDB');
    Meteor.subscribe('eventsDB');

    // Get all Events & Platten from MongoDB

    Template.startseite.helpers({
        plattenHelper: function(){
            return Platten.find();
        }
    })

    Template.startseite.helpers({
        eventsHelper: function(){
            return Events.find();
        }
    })

//// NEUE PLATTE


    Template.neuePlatte.events({
        'submit .neuePlatteForm': function(event) {
            var namePl = event.target.inputPlName.value;
            var streetPl = event.target.inputPlStreet.value;
            var hNrPl = event.target.inputPlHNr.value;
            var plzPl = event.target.inputPlPLZ.value;
            var accessPl = event.target.check1.value;
            if (accessPl = true) {
                accessPl = "öffentlich";
            } else {
                accessPl = "nicht öffentlich";
            }
            var conditionPl = event.target.inputPlZustand.value;

            console.log(namePl, streetPl, hNrPl, plzPl, accessPl, conditionPl);

            Platten.insert({
                name : namePl,
                street : streetPl,
                hNr : hNrPl,
                plz : plzPl,
                access : accessPl,
                condition : conditionPl,
                createdAt : new Date()
            });

            // event.target.namePl ="";
            // event.target.streetPl ="";
            // event.target.hNrPl ="";
            // event.target.plzPl ="";
            // event.target.checkBox = false;

            return false;

        }
    });

//// NEUES EVENT

Template.neuesEvent.helpers({
    plattenHelper2: function(){
        return Platten.find();
    }
})


Template.neuesEvent.helpers({
    getPlatteData: function(){
        return Platte.find(Session.get("selectedPlatte"))
    }
})

// wenn ich die Platte auswähle zieht er mir die ID zu dieser Platte
Template.neuesEvent.events({
    
    'change #inputEvPlatte': function(event) {
        var newValue = $(event.target).val();
        Session.set("selectedPlatte", newValue);
        console.log(newValue);
    },

    'submit .neuesEventForm': function(event) {
        var nameEv = event.target.inputEvName.value;
        var descriptionEv = event.target.inputEvDescription.value;
        var platteEv = event.target.inputEvPlatte.value;
        var dateEv = event.target.inputEvDate.value;
        var timeEv = event.target.inputEvTime.value;

        console.log(nameEv, descriptionEv, platteEv, dateEv, timeEv);
        
        // fetchAddressPlatte = Platten.find({ name : platteEv }).fetch();
        // console.log(fetchAddressPlatte);

        Events.insert({
            name : nameEv,
            description : descriptionEv,
            platte : platteEv,
            date : dateEv,
            time : timeEv,
            createdAt : new Date()
        });

        return false;
    }



});
import './templates.html'

import { Template } from 'meteor/templating';
import '../api/platten.js';
import '../api/events.js';

//// STARTSEITE


    Meteor.subscribe('plattenDB');

    // Get all Events & Platten from MongoDB
    
    Template.startseite.helpers({
        plattenHelper: function(){
            return Platten.find();
        }
    })

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

            event.target.namePl ="";
            event.target.streetPl ="";
            // event.target.hNrPl ="";
            // event.target.plzPl ="";
            // event.target.checkBox = false;

            return false;

        }
    });


//// NEUE PLATTE

//// NEUES EVENT
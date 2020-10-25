import './templates.html'

import { Template } from 'meteor/templating';
import { Platten } from '../api/platten.js';
import { Events } from '../api/events.js';

//// STARTSEITE

    // Get all Events & Platten from MongoDB
    Template.startseite.helpers({
        eventsHelper: function(){
            return Events.Collection.find();
        }
    })


//// NEUE PLATTE

//// NEUES EVENT
import { Template } from 'meteor/templating';
 
import { Platten } from '../api/platten.js';
import { Events } from '../api/events.js';

// dieser Code führt zur Fehlermeldung:
Template.neuePlatte.events({
    'click': function(){
        console.log("You clicked something");
    }
});
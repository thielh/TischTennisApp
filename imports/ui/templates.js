import { Template } from 'meteor/templating';
 
import { Platten } from '../api/platten.js';
import { Events } from '../api/events.js';

Template.neuePlatte.events({
    'click': function(){
        console.log("You clicked something");
    }
})
/// NEUE PLATTE

// CHECK IF USER IS AN ADMIN
Template.neuePlatte.helpers({
    admin : function() {
        return Roles.userIsInRole(Meteor.userId(), 'admin')
    }
})

Template.neuePlatte.events({
    'submit .neuePlatteForm': function(event) {
        var namePl = event.target.inputPlName.value;
        var streetPl = event.target.inputPlStreet.value;
        var hNrPl = event.target.inputPlHNr.value;
        var plzPl = event.target.inputPlPLZ.value;
        var countPl = event.target.inputPlCount.value;
        var conditionPl = event.target.inputPlZustand.value;

        console.log(namePl, streetPl, hNrPl, plzPl, conditionPl);

        Platten.insert({
            name : namePl,
            street : streetPl,
            hNr : hNrPl,
            plz : plzPl,
            count : countPl,
            condition : conditionPl,
            createdAt : new Date(),
            owner : Meteor.userId(),
            username : Meteor.user().username,
            email : Meteor.user().emails[0].address,
        });

        // event.target.namePl ="";
        // event.target.streetPl ="";
        // event.target.hNrPl ="";
        // event.target.plzPl ="";
        // event.target.checkBox = false;

        return false;

    }
});
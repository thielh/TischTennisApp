//// NEUES EVENT

Template.neuesEvent.helpers({
    plattenHelper2: function(){
        return Platten.find();
    },

    getPlatteData: function(){
        return Platten.find(Session.get("selectedPlatte"))
    },
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
            platteID : platteEv,
            date : dateEv,
            time : timeEv,
            createdAt : new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            email: Meteor.user().emails[0].address,
        });

        return false;
    }
});
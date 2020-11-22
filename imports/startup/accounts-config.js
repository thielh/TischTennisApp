import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});



/// REGISTER ///

AccountsTemplates.addFields([
    {
        _id : 'name',
        type : 'text',
        displayName : 'Vollständiger Name',
        required : true, 
    }, 
  
    {
        _id : 'handynummer',
        type : 'text',
        displayName : 'Handynummer',
        required : true, 
    }, 
  
    {
        _id : 'roleH',
        type : 'select',
        displayName : 'User-Typ',
        required : true, 
        select : [
            {
                text : 'Tischtennisspieler/in',
                value : 'tischtennisspieler',
            },
            {
                text : 'Admin',
                value : 'admin',
            },
        ], 
  
    }, 
  ]);
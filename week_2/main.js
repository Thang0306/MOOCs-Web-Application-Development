Messages = new Mongo.Collection("messages");
if (Meteor.isClient){

    // this will configure the sign up field so it
    // they only need a username
    Accounts.ui.config({
      passwordSignupFields: 'USERNAME_ONLY',
    });



    Template.messageForm.events({
        'click .js-save-message': function (event) {
            var messageText = $('#message-text-input').val();
            var messageNickname = "Anon";
    
            if (Meteor.user()) {
                messageNickname = Meteor.user().username;
            }
    
            var message = {
                messageText: messageText,
                nickname: messageNickname,
                createdOn: new Date()
            };
    
            // Call the meteor method on the server
            Meteor.call('insertMessage', message, function (err, res) {
                if (!res) {
                    alert('You need to log in!');
                }
            });
        }
    });
    

    Template.header.helpers({
        // HERE is another one for you - can you
        // complete the template helper for the 'header' template
        // called 'nickname' that
        // returns the nickname from the Session variable?, if they have set it
        nickname:function(){
            if (Meteor.user()){
                return Meteor.user().username;
            }
        },
    });


    Template.messageList.helpers({
        // this helper provides the list of messages for the
        // messgaeList template
        messages:function(){
            return Messages.find({}, {sort: {createdOn: -1}})
        }
    });

}

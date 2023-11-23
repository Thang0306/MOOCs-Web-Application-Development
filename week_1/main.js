Messages = new Mongo.Collection("messages");
if (Meteor.isClient){


    Template.nicknameForm.events({
        'click .js-set-nickname': function () {
            var nickname = $('#nickname-input').val();
            Session.set('nickname', nickname); // Save the nickname onto the session
        }
    });

    Template.messageForm.events({
        // this event listener is triggered when they click on
        // the post! button on the message form template

        'click .js-save-message':function(event){
            var messageText = $('#message-text-input').val();
            var messageNickname = Session.get('nickname');
            var message = {messageText:messageText,
                            nickname:messageNickname,
                            createdOn:new Date()};
            Messages.insert(message);

        }
    });

    Template.header.helpers({
        nickname: function () {
            return Session.get('nickname'); // Return the nickname from the Session variable
        },
    });

    Template.messageList.helpers({
        // this helper provides the list of messages for the
        // messgaeList template
        messages:function(){
            return Messages.find({});
        }
    });

}

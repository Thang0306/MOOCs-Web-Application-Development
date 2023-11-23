Meteor.publish('messages.filtered', function (chatroomId) {
    if (this.userId) {
        // Find and return all messages that have chatroomId equal to the passed chatroomId
        return Messages.find({ chatroomId: chatroomId });
    }
});

Meteor.publish("chatrooms", function(){
    if (this.userId){
        return Chatrooms.find({});
    }
});


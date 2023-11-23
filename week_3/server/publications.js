Meteor.publish("messages", function () {
    // Check if the user is logged in using 'this.userId'
    if (this.userId) {
        // If logged in, return a MongoDB cursor from Messages.find({})
        return Messages.find({});
    }
    // If not logged in, return nothing (no messages)
    return null;
});


const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Types;
//REACTIONS ON POSTS BY USERS
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: time => dateFormat(time)
    }
});

const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;
//Import schema and model from mongoose
const { Schema, model, Types } = require('mongoose');
// import the moment.js plugin
const moment = require("moment");

//Create the reactions Schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
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
        get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a') // use moment to adjust the timestamp
    }
});

//Create the thoughts Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minlength: 1, 
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] hh:mm a') // use moment to adjust the timestamp
        },
        username: {
            type: String, 
            required: true
        },
        reactions: [reactionSchema] //include the reaction schema into this section of the thoughts schema
    },
    {
        toJSON: {
            virtuals: true, // allow virtuals
            versionKey: false // remove unwanted keys 
        },
        id: false
    });
    //make the virtual that shows the total reactions 
    thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });
    
    //set and export the Thought model
    const Thought = model('Thought', thoughtSchema);
    module.exports = Thought;

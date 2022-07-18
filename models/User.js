//Import schema and model from mongoose
const { Schema, model } = require('mongoose');

//Create the user Schema
const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']   //Match only valid emails          
        },
        thoughts: [ {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        toJSON: {
            virtuals: true, // allow virtuals to work 
        },
        id: false,
    });
    //set the virtual to show total thoughts 
    userSchema.virtual('thoughtcount').get(function () {
        return this.thoughts.length
    });
    //set the virtual to show total friends
    userSchema.virtual('friendCount').get(function () {
        return this.friends.length
    });
    
    //set and export the User model
    const User = model('User', userSchema);
    module.exports = User;
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // matching validation against an email regex
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// virtual that counts friends
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

// user model using the userSchema
const User = model('User', userSchema);

// export the user model
module.exports = user;
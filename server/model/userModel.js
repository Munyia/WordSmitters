const mongoose = require('mongoose')

const userschema =mongoose. Schema(
    {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: false,
        default: "hgfjgh"
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
    timestamps: true
})
const User = mongoose.model("Readers'", userschema);
module.exports = User;



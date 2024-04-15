import mongoose from 'mongoose'

const userschema =mongoose. Schema(
    {
    // username: {
    //     type: String,
    //     required: true
    // },
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
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    bio: {
        type: String,
        required: false,
        default: "hgfjgh"
    },
    image: {
        type: String,
        required: false
    },
},
    {
    timestamps: true
})
const User = mongoose.model("Readers'", userschema);
export default User;



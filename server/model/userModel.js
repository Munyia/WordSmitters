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
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    DOB: {
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



import mongoose from 'mongoose'
import bcrypt from "bcrypt"

const userSchema =mongoose.Schema(
    {
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
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
        required: false,
    },
},
    {
    timestamps: true
})
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre("save", async function(next){
    if (!this.isModified('password')) {
        next();
      }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
const User = mongoose.model("Readers'", userSchema);
export default User;



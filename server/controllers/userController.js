import User from "../model/userModel.js";

const registerUser =async (req,res) => {
    const{name, phoneNumber, email, password} = req.body
    const newUser = new User({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    })
    const user = await newUser.save();
     res.send(user);
}

export {registerUser}
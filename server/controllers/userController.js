import User from "../model/userModel.js";

const registerUser =  async (req, res) => {
    const {fullname, email, username, gender, DOB, password} = req.body
    try{
    const newUser = new User({
        fullname: fullname,
        email: email,
        password: password,
        username: username,
        gender: gender,
        DOB: DOB,
    })
    const user = await newUser.save();
     res.send(user);
}
catch (err) {res.send("i failed");}
}

export {registerUser}
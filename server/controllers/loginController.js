import User from "../model/userModel.js";

const registerUserLogins =  async (req, res) => {
    const { username, password} = req.body
    try{
    const newUser = new User({
        password: password,
        username: username,
    })
    const user = await newUser.save();
     res.send(user);
}
catch (err) {res.send("i failed");}
}

export {registerUserLogins}
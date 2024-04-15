import User from "../model/userModel.js";

const registerUser =  async (req, res) => {
    const {name, email, password} = req.body
    try{
    const newUser = new User({
        name: name,
        email: email,
        password: password
    })
    const user = await newUser.save();
     res.send(user);
}
catch (err) {console.log(err);}
}

export {registerUser}
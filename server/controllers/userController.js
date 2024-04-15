import User from "../model/userModel.js";

const registerUser =  async (req, res) => {
    try{
    console.log("i got here");
    // const {name, email, password} = req.body
    const newUser = new User({
        name: "name",
        email: "email",
        password: "password"
    })
    console.log("i got here");
    const user = await newUser.save();
    console.log("i got here");
     res.send(user);
}
catch (err) {console.log(err);}
}

export {registerUser}
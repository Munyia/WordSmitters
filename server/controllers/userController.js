import User from "../model/userModel.js";

const registerUser =  async (req, res) => {
    const {firstname, lastname, email, username, gender, DOB, password} = req.body
    console.log("i got here")
    try{
        const newUser = new User({
            firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        username: username,
        gender: gender,
        DOB: DOB,
    })
    console.log("i got here")
    const user = await newUser.save();
    console.log("i got here")
     res.send(user);
}
catch (err) {res.send("i failed" + err);}
}

const authUser =  async (req, res) => {
    const { username, password} = req.body
    try{
        const user = await User.findOne({username: username});
        if(user){
            if(user.password === password){
                res.send(user);
            }else{
                res.send("wrong password");
            }
        }else{
            res.send("user not found");
        }
    }catch (err) {res.send("i failed", err);}
}


export {registerUser, authUser}
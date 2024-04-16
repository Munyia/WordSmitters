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
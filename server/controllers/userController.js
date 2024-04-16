import User from "../model/userModel.js";

const registerUser =  async (req, res) => {
    const {firstname, lastname, email, username, gender, DOB, password} = req.body
    if (!firstname || !lastname || !email || !username || !gender || !DOB || !password) {
        res.status(400).json({message: "Please fill all fields"})
    }
    try{
    
        let user = await User.findOne({username})
    
    if(user){
        res.status(400).json({message: "User already exists"})
    }
    user = await User.findOne({email})
    if(user){
        res.status(400).json({message: "User already exists"})
    }
    
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
    user = await newUser.save();
    console.log("i got here")
     res.status(200).send('user created successfully');
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
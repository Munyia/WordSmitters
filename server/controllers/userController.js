import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

const registerUser =  async (req, res) => {
    const {firstname, lastname, email, username, gender, DOB, password} = req.body
    console.log( firstname, lastname, email, username, DOB, password);
    if (!firstname || !lastname || !email || !username || !password || !DOB) {
        return res.status(400).json({message: "Please fill all fields"})
    }
    try{
    
        let user = await User.findOne({username})
    
    if(user){
        return res.status(401).send("User already exists")
    }
    user = await User.findOne({email})
    if(user){
        return res.status(401).send("User already exists")
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


const authUser = async (req, res) => {
    const {credentials, password} =   req.body
    if (!credentials || !password){
        return res.status(400).json({message: "Please fill all fields"})
        // !IMPORTANT(json is use for arrays when u have multiple stuff and send is use for one message)
    }
    let user = await User.findOne({email:credentials});
    if (!user){
        user = await User.findOne({username:credentials});
        if (!user){
            return res.status(401).send({message: "User not found"})
        }
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return res.status(401).send({message: "Password is incorrect"})
    }
    return res.status(200).send({message: "user authenticated successfully", token: generateToken({"id":user._id, "email":user.email, "firstname":user.firstname, "lastname":user.lastname, "created":user.createdAt, "updated":user.updatedAt})});


}
export {registerUser, authUser}
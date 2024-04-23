import User from "../model/userModel.js";
import Books from "../model/bookModel.js";

const addBook =  async (req, res) => {
    const {title, description, genre, publisher, year, coverImage, author, chapters} = req.body
    console.log( title, description, genre, publisher, year, coverImage, author, chapters);
    if (!title || !description || !genre|| !publisher|| !year || !coverImage || !author || !chapters) {
        res.status(400).json({message: "Please fill all fields"})
    }
    try{
    
        const newBook = new Books({
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
        res.status(400).json({message: "Please fill all fields"})
        // !IMPORTANT(json is use for arrays when u have multiple stuff and send is use for one message)
    }
    let user = await User.findOne({email:credentials});
    if (!user){
        user = await User.findOne({username:credentials});
        if (!user){
            res.status(401).send({message: "User not found"})
        }
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        res.status(401).send({message: "Password is incorrect"})
    }
    res.status(200).send({message: "user authenticated successfully", token: generateToken({id:user._id, email:user.email, firstname:user.firstname, lastname:user.lastname, created:user.createdAt, updated:user.updatedAt})});


}
export {registerUser, authUser}
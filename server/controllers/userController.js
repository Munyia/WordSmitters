import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, email, username, gender, DOB, password} = req.body
    console.log( firstname, lastname, email, username, DOB, password);
    if (!firstname || !lastname || !email || !username || !password || !DOB) {
        throw new Error("Please fill all fields");
    }
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        username: username,
        gender: gender,
        DOB: DOB,
})
  
    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
      _id: user._id,
      name: user.firstname + " " + user.lastname,
        username: user.username,
        email: user.email,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });



    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });


  const authUser = asyncHandler(async (req, res) => {
    const {credentials, password} =   req.body
    if (!credentials || !password){
        res.status(401);
      throw new Error('Please fill all fields');
        // !IMPORTANT(json is use for arrays when u have multiple stuff and send is use for one message)
    }

    let user = await User.findOne({email:credentials});
    if (!user){
        user = await User.findOne({username:credentials});
        if (!user){
            res.status(401);
            throw new Error('Invalid email or password');
        }
    }

  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.firstname + " " + user.lastname,
          username: user.username,
          email: user.email,
          image: user.image,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  });



// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.firstname = req.body.firstname || user.firstname;
      user.email = req.body.email || user.email;
      user.lastname = req.body.lastname || user.lastname;
      user.username = req.body.username || user.username;
     
      if (req.body.password) {
        user.password = req.body.password;
      }
  
        await user.save();
  
      res.send("profile updated successfully");
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });


// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict'
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname:  user.lastname,
        username: user.username,
        email: user.email,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });

export {registerUser, authUser, updateUserProfile, logoutUser, getUserProfile}
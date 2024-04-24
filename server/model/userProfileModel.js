import mongoose from 'mongoose'

const userProfileSchema = new mongoose.Schema(
    {
  firstname: { 
    type: String, 
    required: true 
},
  lastname: 
  { type: String, 
    required: true
 },
  username: 
  { type: String,
     required: true,
      unique: true 
    },
  email: {
     type: String, 
     required: true,
      unique: true 
    },
  profileImage: {
     type: String 
    }, // You can store the URL of the profile image
  joinDate: { 
    type: Date, 
    default: Date.now
 },
  // Add more fields as needed
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;

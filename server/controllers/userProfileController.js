import UserProfile from '../models/userProfile.js';

export const UserProfile = async (req, res) => {
  try {
    const userProfile = await UserProfile.findOne({ userId: req.params.id });
    res.json(userProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updatedUserProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUserProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

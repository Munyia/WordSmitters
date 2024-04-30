import express from "express"
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"


const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/logout').post(logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// router.post ('/login', authUser) cannot be updated with anything like the patch or get but the first one can keep having thoes changes beside it
// router.post('/login',)

export default router;
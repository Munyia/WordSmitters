import express from "express"
import { authUser, registerUser, updateUserProfile } from "../controllers/userController.js"


const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/update').post(updateUserProfile)
// router.post ('/login', authUser) cannot be updated with anything like the patch or get but the first one can keep having thoes changes beside it
// router.post('/login',)

export default router;
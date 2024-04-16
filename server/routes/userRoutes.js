import express from "express"
import { authUser, registerUser } from "../controllers/userController.js"


const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
// router.post('/login',)

export default router;
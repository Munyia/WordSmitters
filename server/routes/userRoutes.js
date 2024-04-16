import express from "express"
import { registerUser } from "../controllers/userController.js"
import { registerUserLogins } from "../controllers/loginController.js"


const router = express.Router()

router.route('/').post(registerUser)
router.route('/').post(registerUserLogins)
// router.post('/login',)

export default router;
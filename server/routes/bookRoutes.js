import express from "express"


const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)


export default router;
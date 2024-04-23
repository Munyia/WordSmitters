import express from "express"
import { addBook } from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router()

router.route('/').post(protect, addBook)
// router.route('/login').post(authUser)


export default router;
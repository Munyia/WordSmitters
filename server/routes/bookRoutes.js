import express from "express"
import { addBook, getAllBooks, getBookDetail } from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router()

router.route('/')
.post(protect, addBook)
.get(getAllBooks)
router.route('/:id')
.get(protect, getBookDetail)


export default router;
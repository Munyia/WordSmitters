import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userProfileController.js';

const router = express.Router();

router.route('/:id' ).get (getUserProfile);
router.route('/:id').put (updateUserProfile);

export default router;

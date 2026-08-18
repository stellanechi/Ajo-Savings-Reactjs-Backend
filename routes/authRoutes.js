import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import { protect, isTrustee } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', protect, isTrustee, registerUser); // Trustee-only registration

export default router;

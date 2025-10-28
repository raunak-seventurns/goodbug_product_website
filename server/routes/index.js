import express from 'express';
import userRoutes from './users.js';
import authRoutes from './auth.js';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// Auth routes
router.use('/auth', authRoutes);

// User routes
router.use('/users', userRoutes);

export default router;


import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getUsers).post(createUser);
router.route('/:id').get(protect, getUser).put(protect, updateUser).delete(protect, deleteUser);

export default router;


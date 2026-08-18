import express from 'express';
import { getGroups, syncGroups } from '../controllers/groupController.js';

const router = express.Router();

router.route('/').get(getGroups);
router.route('/sync').post(syncGroups);

export default router;

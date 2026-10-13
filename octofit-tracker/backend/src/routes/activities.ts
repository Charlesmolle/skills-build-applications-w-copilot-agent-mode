import { Router } from 'express';
import { activity } from '../models/activity.js';
import { createResourceRouter } from './resource.js';

const router = Router();
router.use('/', createResourceRouter(activity));
export default router;

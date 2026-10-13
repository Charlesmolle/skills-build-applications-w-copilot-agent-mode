import { Router } from 'express';
import { workout } from '../models/workout.js';
import { createResourceRouter } from './resource.js';

const router = Router();
router.use('/', createResourceRouter(workout));
export default router;

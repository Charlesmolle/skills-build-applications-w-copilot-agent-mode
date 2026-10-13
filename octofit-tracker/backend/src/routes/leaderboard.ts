import { Router } from 'express';
import { leaderboard } from '../models/leaderboard.js';
import { createResourceRouter } from './resource.js';

const router = Router();
router.use('/', createResourceRouter(leaderboard));
export default router;

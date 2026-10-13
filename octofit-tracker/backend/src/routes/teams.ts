import { Router } from 'express';
import { team } from '../models/team.js';
import { createResourceRouter } from './resource.js';

const router = Router();
router.use('/', createResourceRouter(team));
export default router;

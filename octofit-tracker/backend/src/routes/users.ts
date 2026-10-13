import { Router } from 'express';
import { user } from '../models/user.js';
import { createResourceRouter } from './resource.js';

const router = Router();
router.use('/', createResourceRouter(user));
export default router;

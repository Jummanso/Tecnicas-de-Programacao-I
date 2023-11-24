import { Router } from 'express';
import pilhaRouter from './pilha';

const router = Router();

router.use('/pilha', pilhaRouter);

export default router;
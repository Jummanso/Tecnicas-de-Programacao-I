import express from 'express';
import pilhaRouter from './pilha';
import filaRouter from './fila';

const router = express.Router();

router.use('/pilha', pilhaRouter);
router.use('/fila', filaRouter);

export default router;
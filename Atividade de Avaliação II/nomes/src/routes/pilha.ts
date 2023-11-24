import { Router } from 'express';
import { Pilha } from '../controllers/Pilha';

const router = Router();

router.get('/push/:nome', Pilha.push);
router.get('/pop', Pilha.pop);

export default router;
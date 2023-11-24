import express from 'express';
import { Pilha } from '../controllers/Pilha';

const router = express.Router();

router.post('/push/:nome/:doador', Pilha.push);
router.get('/pop', Pilha.pop);

export default router;
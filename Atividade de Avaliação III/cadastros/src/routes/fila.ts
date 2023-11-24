import express from 'express';
import { Fila } from '../controllers/Fila';

const router = express.Router();

router.post('/append/:nome/:doador', Fila.append);
router.get('/remove', Fila.remove);

export default router;
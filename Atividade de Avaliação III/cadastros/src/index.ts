import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import filaRoutes from './routes/fila';
import pilhaRoutes from './routes/pilha';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use('/fila', filaRoutes);
app.use('/pilha', pilhaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
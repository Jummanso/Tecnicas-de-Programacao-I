import express from 'express';
import route from './routes';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(route)

app.use("*", (req, res) => { res.status(404).json({ message: "Requisição desconhecida" }) })

app.listen(PORT, () => { console.log(`Server running at PORT:${PORT}`) })
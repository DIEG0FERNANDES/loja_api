import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { connectToMongoDB } from './database';
import { produtosRouter } from './routes/Produtos';

connectToMongoDB();

export const app = express();

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Rotas
app.use('/produtos', produtosRouter);

app.get('/', (req, res) => res.send('Loja API'));

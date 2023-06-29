import { Router } from 'express';
import { ProdutoController } from './../controllers/ProdutoController';

export const produtosRouter = Router();
const produtoController = new ProdutoController();

produtosRouter.post('/produtos', (req, res) => produtoController.cadastroItem(req, res));
produtosRouter.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));
// produtosRouter.post('/itens', (req, res) => produtoController.findByCep(req, res));
// produtosRouter.get('/itens/produto/:produtoId', (req, res) => produtoController.findByLogradouro(req, res));
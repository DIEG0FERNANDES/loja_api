import { Router } from 'express';
import ProdutoController from './../controllers/ProdutoController';
import ItemController from './../controllers/ItemController';


export const produtosRouter = Router();
const produtoController = new ProdutoController();
const itemController = new ItemController();

produtosRouter.post('/', (req, res) => produtoController.save(req, res));
produtosRouter.delete('/:id', (req, res) => produtoController.deleteById(req, res));
produtosRouter.post('/itens', (req, res) => itemController.save(req, res));
produtosRouter.get('/itens/produto/:produtoid', (req, res) => itemController.getItemsByProduct(req, res));
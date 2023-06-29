import { Request, Response } from 'express';
import ItemDAO from '../dao/ItemDAO';
import {ProdutoDAO} from './../dao/ProdutoDAO';

class ItemController {
  private _itemDAO: ItemDAO;
  private _produtoDAO: ProdutoDAO;

  constructor() {
    this._itemDAO = new ItemDAO();
    this._produtoDAO = new ProdutoDAO();
  }

  async save(req: Request, res: Response) {
    const id = await this._itemDAO.save(req.body);
    res.status(201).json({ id });
  }

  async getItemsByProduct(req: Request, res: Response) {
    const { produtoid } = req.params;
    if (!produtoid) return res.status(404).json({ mensagensDeErro: ['ID pendente'] });
    if (typeof produtoid !== 'number') return res.status(400).json({ mensagensDeErro: ['ID mal formatado'] });
    const product = await this._produtoDAO.findById(produtoid);
    if (product === null) return res.status(404).json({ mensagensDeErro: ['Produto não encontrado'] });
    const items = await this._itemDAO.getItemsByProduct(product);
    res.json({ items });
  }
}

export default ItemController;
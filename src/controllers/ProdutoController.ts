import { Request, Response } from 'express';
import { ProdutoDAO } from './../dao/ProdutoDAO';
import { ProdutoModel } from '../domains/ProdutoModel';

export class ProdutoController {
  private _produtoDAO: ProdutoDAO;

  constructor() {
    this._produtoDAO = new ProdutoDAO();
  }

  async cadastroItem(req: Request, res: Response) {
    const { descricao, perecivel } = req.body;
    const produto = new ProdutoModel({ descricao, perecivel });
    await this._produtoDAO.cadastroItem(produto);
    res.status(201).send('Produto Cadastrado com sucesso')
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._produtoDAO.delete(id);
    res.status(204).send('Produto Removido com sucesso')
  }
}
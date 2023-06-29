import { Request, Response } from 'express';
import { ProdutoDAO } from './../dao/ProdutoDAO';

export class ProdutoController {
  private _produtoDAO: ProdutoDAO;

  constructor() {
    this._produtoDAO = new ProdutoDAO();
  }

  async save(req: Request, res: Response) {
    res.json('produto');
  }

  async delete(req: Request,res:Response){
    await this._produtoDAO.delete();
    res.status(204).send('Produto Removido com sucesso')
  }
}
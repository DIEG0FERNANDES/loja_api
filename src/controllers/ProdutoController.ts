import { Request, Response } from 'express';
import ProdutoDAO from '../dao/ProdutoDAO';

class ProdutoController {
  private _produtoDAO: ProdutoDAO;

  constructor() {
    this._produtoDAO = new ProdutoDAO();
  }

  async save(req: Request, res: Response) {
    const id = await this._produtoDAO.save(req.body);
    res.status(201).json({ id });
  }

  async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(404).json({ mensagensDeErro: ['ID pendente'] });
    if (typeof id !== 'number') return res.status(400).json({ mensagensDeErro: ['ID mal formatado'] });
    const deleted = await this._produtoDAO.delete(id);
    if (!deleted) {
      res.status(404).json({ mensagensDeErro: ['Produto não encontrado'] });
    } else {
      res.status(201).json({ mensagem: 'Produto deletado com sucesso' });
    }
  }
}

export default ProdutoController;
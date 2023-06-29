import { Request, Response } from 'express';
import { ProdutoDAO } from './../dao/ProdutoDAO';
import { produtoModel } from './../domains/produtoModel';
import { produtoRegExp } from './../utils/regex_utils';

export class ProdutoController {
  private _produtoDAO: ProdutoDAO;

  constructor() {
    this._produtoDAO = new ProdutoDAO();
  }

  async save(req: Request, res: Response) {
    const { produto: produtoString, perecivel } = req.body;

    if (!produtoString || typeof produtoString !== 'string' || !produtoRegExp.test(produtoString)) {
      return res.status(400).json({ mensagensDeErro: ['Número de produto inválido'] });
    }
    
    if (!perecivel || typeof perecivel !== 'string') {
      return res.status(400).json({ mensagensDeErro: ['perecivel inválido'] });
    }
    
    const produtoExistingObject = await this._produtoDAO.findByProduto(produtoString);
    
    if (produtoExistingObject) {
      return res.status(409).json({ mensagensDeErro: ['produto já cadastrado'] });
    }

    const produtoObject = new produtoModel({
      produto: produtoString,
      perecivel
    });

    await this._produtoDAO.save(produtoObject);
    res.status(201).json({ mensagem: 'produto cadastrado com sucesso' });
  }
  
  async findByproduto(req: Request, res: Response) {
    const { produto: produtoString } = req.params;

    if (!produtoString || typeof produtoString !== 'string' || !produtoRegExp.test(produtoString))  {
      return res.status(400).json({ mensagem: 'produto inválido' });
    }

    const produtoExistingObject = await this._produtoDAO.findByproduto(produtoString);

    if (!produtoExistingObject) {
      return res.status(404).json({ mensagem: 'perecivel não encontrado' });
    }

    res.json({ endereco: produtoExistingObject });
  }

  async delete(req: Request,res:Response){
    await this._produtoDAO.delete();
    res.status(204).send('dados deletados')
    
  }
  async findByperecivel(req: Request, res: Response) {
    return ('teste');
  }
}
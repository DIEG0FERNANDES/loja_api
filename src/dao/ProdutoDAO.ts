import { Produto, ProdutoModel } from './../domains/ProdutoModel';

export class ProdutoDAO {
  async cadastroItem(Produto: Produto) {
    const savedProduto = await ProdutoModel.save(Produto);
    return savedProduto;
  }

  async delete(){
    await ProdutoModel.deleteMany({})
  }
}
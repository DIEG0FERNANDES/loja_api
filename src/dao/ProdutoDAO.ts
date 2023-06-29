import { Produto, ProdutoModel } from './../domains/ProdutoModel';

export class ProdutoDAO {
  async save(Produto: Produto) {
    const savedProduto = await ProdutoModel.create(Produto);
    return savedProduto;
  }

  async findByProduto(ProdutoString: string) {
    const ProdutoObject = await ProdutoModel.find<Produto>({ Produto: ProdutoString });
    return ProdutoObject.at(0);
  }
  
  async findByLogradouro(logradouro: string) {
    const ProdutoObject = await ProdutoModel.find<Produto>({
      logradouro: {
        $regex: logradouro,
        $options: 'i'
      }
    });
    
    return ProdutoObject.at(0);
  }
  async delete(){
    await ProdutoModel.deleteMany({})
  }
}
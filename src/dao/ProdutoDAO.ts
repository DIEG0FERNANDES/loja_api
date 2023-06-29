import { Produto, ProdutoModel } from './../domains/ProdutoModel';

export class ProdutoDAO {
  constructor() {
    this.produtoDAO = new ProdutoDAO()
  }
  async save(Produto: Produto) {
    const savedProduto = await ProdutoModel.create(req.body);

    if(savedProduto.lenght == 0) {
      const { id, descricao, perecivel} = req.body
    }

    const contact = new ProdutoModel({
      id,
      descricao,
      perecivel
    })
    const savedProduto = await this.produtoDAO.save(Produto)
    return savedProduto;
  }

  async findByProduto(ProdutoString: string) {
    const ProdutoObject = await ProdutoModel.find<Produto>({ Produto: ProdutoString });
    return ProdutoObject.at(0);
  }
  async delete(){
    await ProdutoModel.deleteMany({})
  }
}
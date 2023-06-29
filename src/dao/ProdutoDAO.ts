import { Produto, ProdutoModel } from './../domains/ProdutoModel';

export class ProdutoDAO {
  async save(produto: Produto): Promise<number> {
    const response = await ProdutoModel.create(produto);
    const { id } = response;
    return id;
  }

  async findById(id: number): Promise<any | null> {
    const product = await ProdutoModel.find({ id });
    if (!product) return null;
    else return product;
  }

  async delete(id: number): Promise<boolean> {
    const response = await ProdutoModel.deleteOne({ id });
    return response.deletedCount > 0;
  }
}
import { Produto } from '../domains/ProdutoModel';
import { ItemModel, Item } from '../domains/ItemModel';

class ItemDAO {
  async save(item: Item): Promise<number> {
    const response = await ItemModel.create(item);
    const { id } = response;
    return id;
  }

  async getItemsByProduct(produto: Produto): Promise<any[]> {
    const docs = ItemModel.find({ produto: produto._id });
    const products: any[] = [];

    for await (const doc of docs) {
      products.push(doc);
    }

    return products;
  }

  async delete(id: number): Promise<boolean> {
    const response = await ItemModel.deleteOne({ id });
    return response.deletedCount > 0;
  }
}

export default ItemDAO;
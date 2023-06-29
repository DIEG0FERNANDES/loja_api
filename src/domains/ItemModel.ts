import mongoose, { Schema, Document } from 'mongoose';
import { Produto } from './ProdutoModel';

export interface ItemModel extends Document {
  quantidade: number;
  dataChegadaNoEstoque: Date;
  produto: ProdutoModel['_id'];
}

const ItemSchema: Schema = new Schema({
  quantidade: { type: Number, required: true },
  dataChegadaNoEstoque: { type: Date, required: true },
  produto: { type: Schema.Types.ObjectId, ref: 'Produto', required: true },
});

export default mongoose.model<ItemModel>('Item', ItemSchema);

import { Schema, Document, model } from 'mongoose';
import { Produto } from './ProdutoModel';

export interface Item extends Document {
  id: number;
  quantidade: number;
  dataChegadaNoEstoque: Date;
  produto: Produto;
}

const schema = new Schema<Item>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  quantidade: {
    type: Number,
  },
  dataChegadaNoEstoque: {
    type: Date,
  },
  produto: {
    type: Schema.Types.ObjectId,
    ref: 'Produto',
  },
});

export const ItemModel = model<Item>('Item', schema);
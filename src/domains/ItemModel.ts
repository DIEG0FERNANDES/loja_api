import { Schema, Document, model } from 'mongoose';
import { Produto } from './ProdutoModel';

export interface Item extends Document {
  quantidade: number;
  dataChegadaNoEstoque: Date;
  produto: Produto['_id'];
}

const schema = new Schema<Item>({
  quantidade: { 
    type: Number, 
    required: true 
},
  dataChegadaNoEstoque: { 
    type: Date, 
    required: true 
},
  produto: { 
    type: Schema.Types.ObjectId, 
    ref: 'Produto', 
    required: true },
});

export const ItemModel = model<Item>('Item', schema);
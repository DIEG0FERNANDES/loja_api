import { Document, Schema, model } from 'mongoose';

export interface Produto extends Document {
  produto: string;
  item: string;
}

const schema = new Schema<Produto>({
  produto: {
    type: String,
    required: true,
    unique: true
  },
  item: {
    type: String,
    required: true,
    unique: true
  }
});

export const ProdutoModel = model<Produto>('Produto', schema);
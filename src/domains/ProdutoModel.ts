import { Document, Schema, model } from 'mongoose';

export interface Produto extends Document {
  descricao: string;
  perecivel: boolean;
}

const schema = new Schema<Produto>({
  descricao: {
    type: String,
    required: true,
    unique: true
  },
  perecivel: {
    type: Boolean,
    required: true,
    unique: true
  }
});

export const ProdutoModel = model<Produto>('Produto', schema);
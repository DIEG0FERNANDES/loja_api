import { Document, Schema, model } from 'mongoose';

export interface Produto extends Document {
  id:number;
  descricao: string;
  perecivel: boolean;
}

const schema = new Schema<Produto>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  descricao: {
    type: String,
  },
  perecivel: {
    type: Boolean
  }
});

export const ProdutoModel = model<Produto>('Produto', schema);
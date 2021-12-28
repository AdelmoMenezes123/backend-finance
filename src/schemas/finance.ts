import { Schema, model, Document } from "mongoose";

export interface FinancaInterface extends Document {
  produto: string;
  valor: number;
  data: Date;
  quantidade: number;
  status: boolean;
  user:string;
  total(): string;
}

const FinancaSchema = new Schema(
  {
    produto: String,
    valor: Number,
    data: Date,
    quantidade: Number,
    status: Boolean,
    user: String
  }
);


FinancaSchema.methods.total = function (): string {
  let valor = this.quantidade * this.valor
  return String(valor);
};

export default model<FinancaInterface>("Financa", FinancaSchema);
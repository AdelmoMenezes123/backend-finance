import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';

export interface UserInterface extends Document {
  nome: string;
  sobrenome: string;
  login: string;
  senha: string;
  foto: string;
  fullName(): string;
}

const UserSchema = new Schema(
  {
    nome: String,
    sobrenome: String,
    login: String,
    senha: String,
    foto: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.fullName = function (): string {
  return this.nome + " " + this.sobrenome;
};

UserSchema.pre<UserInterface>('save', async function criptografaSenha() {
  var salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});

UserSchema.pre<UserInterface>('save', async function gerarAvatar() {
  this.foto = await `https://ui-avatars.com/api/?rounded=true&name=${this.nome}`;
});

export default model<UserInterface>("Usuario", UserSchema);

import { Schema, Model, model } from "mongoose";

const UserSchema = new Schema(
  {
    nome: String,
  },
  {
    timestamps: true,
  }
);

export default model("Usuario", UserSchema);

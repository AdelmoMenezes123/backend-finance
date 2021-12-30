"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.Schema({
    nome: String,
    sobrenome: String,
    login: String,
    senha: String,
    foto: String,
}, {
    timestamps: true,
});
UserSchema.methods.fullName = function () {
    return this.nome + " " + this.sobrenome;
};
UserSchema.pre('save', async function criptografaSenha() {
    var salt = await bcrypt_1.default.genSalt(10);
    this.senha = await bcrypt_1.default.hash(this.senha, salt);
});
UserSchema.pre('save', async function gerarAvatar() {
    this.foto = await `https://ui-avatars.com/api/?rounded=true&name=${this.nome}`;
});
exports.default = (0, mongoose_1.model)("Usuario", UserSchema);
//# sourceMappingURL=User.js.map
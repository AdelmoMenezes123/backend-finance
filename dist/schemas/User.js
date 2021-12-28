"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose');
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);










const UserSchema = new (0, _mongoose.Schema)(
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

UserSchema.methods.fullName = function () {
  return this.nome + " " + this.sobrenome;
};

UserSchema.pre('save', async function criptografaSenha() {
  var salt = await _bcrypt2.default.genSalt(10);
  this.senha = await _bcrypt2.default.hash(this.senha, salt);
});

UserSchema.pre('save', async function gerarAvatar() {
  this.foto = await `https://ui-avatars.com/api/?rounded=true&name=${this.nome}`;
});

exports. default = _mongoose.model("Usuario", UserSchema);

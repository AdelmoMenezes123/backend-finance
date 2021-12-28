"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async v(req, res) {
    const user = await _User2.default.find();

    return res.json(user)
  }

   async cadastrar(req, res) {
    const user = req.body;
    
    const userModel = new (0, _User2.default)(user);
    
    let resposta = {message: 'Usuario cadastrado com sucesso!'};
    let status = 200;

    const success = await userModel.save()

    if (!success) {
      resposta = {
        message: 'Usuario nao cadastrado!',
      };
      status = 400;
    } 

    return res.status(status).json({ resposta });

  }

  //AUTENTICACAO DE USUARIO LOGIN
   async autenticar(req, res) {
    const { login, senha } = req.body;

    const user = await _User2.default.findOne({ login });

    if (!user) {
      return res.status(400).send({ message: ' Usuario não encontrado' });
    };

    const passwordInvalido = await _bcrypt2.default.compare(senha, user.senha);
    // usuario.compareSenha(password);
    if (!passwordInvalido) {
      return res.status(400).send({ message: ' Senha incorreta!' });
    }

    const decodedToken = {
      _id: String(user._id),
      nome: user.fullName(),
    };

    const token = _jsonwebtoken2.default.sign(decodedToken, 'SECRET', {
      subject: user.id,
      expiresIn: '1d',
    })

    return res.status(200).json({
      user,
      token
    });
  }
}

exports. default = new UserController();

"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import { Schema } from 'mongoose';
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);


// import Usuario from '../controller/usuario/usuario.interface';


class AuthMiddlewares {
   async autorizarUsuarioByToken(req, res, next) {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ error: 'token nao autorizado' })
    }

    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
      return res.status(401).send({ error: 'token error' })
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) {
      return res.status(401).send({ error: 'token malformado' })
    }

    _jsonwebtoken2.default.verify(token, "SECRET", (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Error token invalido' })

      req.user = decoded._id;
      return next();
    })
  }
}

exports. default = new AuthMiddlewares();
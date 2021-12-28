// import * as express from 'express';
// import * as Rota from '../../decorators/rota';
// import Controller from '../interfaces/controller.interface';
// import UsuarioModel from '../usuario/usuario.model';
// import DefaultController from '../default/defaultController';

// class AuthController extends DefaultController implements Controller {
//     public path = '/authenticate';
//     public router = express.Router();
//     private usuario = UsuarioModel;

//     @Rota.Post('/authenticate')
//     private authenticateUser(request, response) {
//         const { login, senha } = request.body;
//         this.usuario.findOne({ "login": login }).select('+senha').then((usuario) => {
//             if (!usuario)
//                 return response.status(400).send('Usuário não encontrado');

//             if (!usuario.ativo)
//                 return response.status(400).send('Seu usuário está inativo!');

//             const bcrypt = require('bcryptjs');
//             bcrypt.compare(senha, usuario.senha, (erro, result) => {
//                 if (!result) {
//                     return response.status(400).send('Senha inválida');
//                 }

//                 const authConfig = require('./auth.config.json');
//                 const jwt = require('jsonwebtoken');
//                 const token = jwt.sign(
//                     {
//                         id: usuario._id,
//                     },
//                     authConfig.secret,
//                     {
//                         expiresIn: 86400,
//                     }
//                 );

//                 request.session.authToken = "Bearer " + token;
//                 request.session.loggedUsername = usuario.nome;
//                 request.session.usuarioLogadoId = usuario._id;
//                 request.session.usuarioLogadoId = usuario._id;
//                 request.session.usuarioLogadoFoto = usuario.foto;
//                 request.session.usuarioLogadoPermissoes = usuario.permissoes.length > 0 ? usuario.permissoes : '[{}]';

//                 return response.status(200).send({ token, usuario });
//             });
//         });
//     }

//     @Rota.Get('/logout')
//     private logout(request, response) {
//         var me = this;
//         request.session.destroy(function (err) {
//             response.redirect("/login");
//         });
//     }

// }

// export default AuthController;
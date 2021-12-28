// class AuthMiddleware {
//     public Authenticate(req, res, next) {
//         if ((req.path != '/authenticate') && (req.path != '/login')) {
//             const jwt = require('jsonwebtoken');
//             const authConfig = require('./auth.config.json');
//             const authHeader = req.headers.authorization
//                 ? req.headers.authorization
//                 : req.session.authToken;

//             if (!authHeader) { // Token não informado
//                 req.session.destroy();
//                 return res.redirect("/login");
//             }

//             const parts = authHeader.split(' ');
//             if (parts.length !== 2) { // Erro na formatação do token
//                 req.session.destroy();
//                 return res.redirect("/login");
//             }

//             const [scheme, token] = parts
//             if (!/^Bearer$/i.test(scheme)) { // Erro na formatação do token
//                 req.session.destroy();
//                 return res.redirect("/login");
//             }

//             jwt.verify(token, authConfig.secret, (err, decode) => {
//                 if (err) { // Token invalido
//                     req.session.destroy();
//                     return res.redirect("/login");
//                 }

//                 req.userId = decode.id;
//                 req.role = decode.role;

//                 return next();
//             });
//         } else if (req.path == '/login' && req.session.authToken) {
//             return res.redirect("/");
//         } else {
//             return next();
//         }
//     }
// }

// export default AuthMiddleware;
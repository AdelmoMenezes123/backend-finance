"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddlewares {
    async autorizarUsuarioByToken(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ error: 'token nao autorizado' });
        }
        const parts = authHeader.split(' ');
        if (parts.length !== 2) {
            return res.status(401).send({ error: 'token error' });
        }
        const [schema, token] = parts;
        if (!/^Bearer$/i.test(schema)) {
            return res.status(401).send({ error: 'token malformado' });
        }
        jsonwebtoken_1.default.verify(token, "SECRET", (err, decoded) => {
            if (err)
                return res.status(401).send({ error: 'Error token invalido' });
            return next();
        });
    }
}
exports.default = new AuthMiddlewares();
//# sourceMappingURL=auth.middlewares.js.map
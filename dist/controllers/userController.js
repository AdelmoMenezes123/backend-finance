"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../schemas/User"));
class UserController {
    async v(req, res) {
        const user = await User_1.default.find();
        return res.json(user);
    }
    async cadastrar(req, res) {
        const user = req.body;
        const userModel = new User_1.default(user);
        let resposta = { message: 'Usuario cadastrado com sucesso!' };
        let status = 200;
        const success = await userModel.save();
        if (!success) {
            resposta = {
                message: 'Usuario nao cadastrado!',
            };
            status = 400;
        }
        return res.status(status).json({ resposta });
    }
    async autenticar(req, res) {
        const { login, senha } = req.body;
        const user = await User_1.default.findOne({ login });
        if (!user) {
            return res.status(400).send({ message: ' Usuario não encontrado' });
        }
        ;
        const passwordInvalido = await bcrypt_1.default.compare(senha, user.senha);
        if (!passwordInvalido) {
            return res.status(400).send({ message: ' Senha incorreta!' });
        }
        const decodedToken = {
            _id: String(user._id),
            nome: user.fullName(),
        };
        const token = jsonwebtoken_1.default.sign(decodedToken, 'SECRET', {
            subject: user.id,
            expiresIn: '1d',
        });
        return res.status(200).json({
            user,
            token
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
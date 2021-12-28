import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import usuario, { UserInterface } from "../schemas/User";

class UserController {
  public async v(req: Request, res: Response): Promise<Response> {
    const user = await usuario.find();

    return res.json(user)
  }

  public async cadastrar(req: Request, res: Response): Promise<Response> {
    const user: UserInterface = req.body;
    
    const userModel = new usuario(user);
    
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
  public async autenticar(req: Request, res: Response): Promise<Response> {
    const { login, senha } = req.body;

    const user = await usuario.findOne({ login });

    if (!user) {
      return res.status(400).send({ message: ' Usuario não encontrado' });
    };

    const passwordInvalido = await bcrypt.compare(senha, user.senha);
    // usuario.compareSenha(password);
    if (!passwordInvalido) {
      return res.status(400).send({ message: ' Senha incorreta!' });
    }

    const decodedToken = {
      _id: String(user._id),
      nome: user.fullName(),
    };

    const token = jwt.sign(decodedToken, 'SECRET', {
      subject: user.id,
      expiresIn: '1d',
    })

    return res.status(200).json({
      user,
      token
    });
  }
}

export default new UserController();

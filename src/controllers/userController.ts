import { Request, Response } from "express"

import usuario from '../schemas/User'

class UserController {
  public async index(req:Request, res:Response):Promise<Response>{
    const users = await usuario.find()

    return res.json(users)
  }
}

export default new UserController()

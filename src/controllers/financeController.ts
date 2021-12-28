import { Request, Response } from "express";
import usuario, { UserInterface } from "../schemas/User";
import financa, { FinancaInterface } from "../schemas/finance";
class FinanceController {

  public async listagem(req: Request, res: Response, id): Promise<Response>{
    var financas = await financa.findById({"user":id})
    let status = 200;

    return res.status(status).json( financas );
  }


}
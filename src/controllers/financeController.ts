import { Request, Response } from "express";
import financa, { FinancaInterface } from "../schemas/finance";
class FinanceController {
  private Financa = financa;

  public async listagem(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    var financas = await this.Financa.findById({ "user": id })

    return res.status(200).json(financas);
  }

  public async criar(req: Request, res: Response): Promise<Response> {
    req.body.user = req.userLogadoId;
    const finance: FinancaInterface = req.body;
    const financaModel = new this.Financa(finance);

    const success = await financaModel.save()

    let status = 200;
    let resposta = { message: 'Titulo cadastrado com sucesso!' };


    if (!success) {
      resposta = {
        message: 'Usuario nao cadastrado!',
      };
      status = 400;
    }

    return res.status(status).json({ resposta, success });
  }

  public async excluir(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.Financa.findByIdAndDelete(id);
    } catch (err) {
      console.log(`Error: ${err}`)
    }

    res.status(200);
  }

}

export default new FinanceController();
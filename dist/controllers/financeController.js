"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finance_1 = require("../schemas/finance");
class FinanceController {
    constructor() {
        this.Financa = finance_1.default;
    }
    async listagem(req, res) {
        const { id } = req.params;
        var financas = await this.Financa.findById({ "user": id });
        return res.status(200).json(financas);
    }
    async criar(req, res) {
        req.body.user = req.params.idUser;
        const finance = req.body;
        const financaModel = new this.Financa(finance);
        const success = await financaModel.save();
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
    async excluir(req, res) {
        const { id } = req.params;
        try {
            await this.Financa.findByIdAndDelete(id);
        }
        catch (err) {
            console.log(`Error: ${err}`);
        }
        res.status(200);
    }
}
exports.default = new FinanceController();
//# sourceMappingURL=financeController.js.map
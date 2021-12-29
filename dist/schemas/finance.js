"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FinancaSchema = new mongoose_1.Schema({
    produto: String,
    valor: Number,
    data: Date,
    quantidade: Number,
    status: Boolean,
    user: String
});
FinancaSchema.methods.total = function () {
    let valor = this.quantidade * this.valor;
    return String(valor);
};
exports.default = (0, mongoose_1.model)("Financa", FinancaSchema);
//# sourceMappingURL=finance.js.map
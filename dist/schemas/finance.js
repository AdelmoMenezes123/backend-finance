"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');











const FinancaSchema = new (0, _mongoose.Schema)(
  {
    produto: String,
    valor: Number,
    data: Date,
    quantidade: Number,
    status: Boolean,
    user: String
  }
);


FinancaSchema.methods.total = function () {
  let valor = this.quantidade * this.valor
  return String(valor);
};

exports. default = _mongoose.model("Financa", FinancaSchema);
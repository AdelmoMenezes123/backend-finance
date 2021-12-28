"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const UserSchema = new (0, _mongoose.Schema)(
  {
    nome: String,
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose.model.call(void 0, "Usuario", UserSchema);

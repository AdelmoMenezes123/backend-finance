"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./controllers/userController");
const financeController_1 = require("./controllers/financeController");
const auth_middlewares_1 = require("./middlewares/auth.middlewares");
const routes = (0, express_1.Router)();
routes.post("/cadastrar/user", userController_1.default.cadastrar);
routes.post('/login', userController_1.default.autenticar);
routes.get('/user', auth_middlewares_1.default.autorizarUsuarioByToken, userController_1.default.v);
routes.post("/cadastar/financa/:idUser", auth_middlewares_1.default.autorizarUsuarioByToken, financeController_1.default.criar);
routes.post("/financa/:id", auth_middlewares_1.default.autorizarUsuarioByToken, financeController_1.default.excluir);
routes.get("financa", auth_middlewares_1.default.autorizarUsuarioByToken, financeController_1.default.listagem);
exports.default = routes;
//# sourceMappingURL=routes.js.map
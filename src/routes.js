import { Router } from "express";

// IMPORTS DE CONTROLLERS
import userController from "./controllers/userController";
import financeController from "./controllers/financeController";

//IMPORT MIDDLEWARE
import authMiddlewares from "./middlewares/auth.middlewares"

const routes = Router();

routes.post("/cadastrar/user", userController.cadastrar);
routes.post('/login', userController.autenticar);
routes.get('/user', authMiddlewares.autorizarUsuarioByToken,userController.v);


routes.post("/cadastar/financa/:idUser", authMiddlewares.autorizarUsuarioByToken, financeController.criar);
routes.post("/financa/:id", authMiddlewares.autorizarUsuarioByToken, financeController.excluir);
routes.get("financa",  authMiddlewares.autorizarUsuarioByToken, financeController.listagem);
export default routes;

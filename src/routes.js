import { Router } from "express";

// IMPORTS DE CONTROLLERS
import userController from "./controllers/userController";

//IMPORT MIDDLEWARE
// import authMiddlewares from "./middlewares/auth.middlewares.ts"

const routes = Router();

routes.post("/cadastrar/users", userController.cadastrar);
routes.post('/login', userController.autenticar);

// authMiddlewares.autorizarUsuarioByToken

export default routes;

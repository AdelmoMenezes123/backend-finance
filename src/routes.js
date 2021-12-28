import { Router } from "express";

// IMPORTS DE CONTROLLERS
import userController from "./controllers/userController";

const routes = Router();

routes.get("/users", userController.index);

export default routes;

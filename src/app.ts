import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
// import * as bodyParser from 'body-parser';

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    // this.express.use(bodyParser.json());
    // this.express.use(bodyParser.urlencoded({ extended: false}));
    this.middlewares();
    this.database();
    this.routes();
    this.globals()
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    // MONGODB
    const {
      DATABASE_HOST,
      DATABASE_NAME,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
    } = process.env;

    // const connec =
    //   "mongodb+srv://" + DATABASE_NAME + ":" + DATABASE_PASSWORD + "@" + DATABASE_HOST + "/" + DATABASE_USERNAME

    console.log('banco ', DATABASE_HOST)
    const connec =
      "mongodb+srv://finance-portfolio:finance123@cluster0.8ad0t.mongodb.net/finance-portfolio";
    mongoose.connect(connec, { useNewUrlParser: true });
  }

  private routes(): void {
    this.express.use(routes);
  }

  private globals() {

    this.express.use((req: Request, res: Response, next) => {
      res.locals.userLogadoId = req.session['userLogadoId'] || null;
      res.locals.userLogadoNome = req.session['userLogadoNome'] || null;

      console.log("user-> ", res.locals.user)
      next();
    })
  }
}

export default new App().express;

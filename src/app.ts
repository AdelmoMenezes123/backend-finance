import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import validateEnv from './utils/validatEnv';
import 'dotenv/config';
import routes from "./routes";
import * as bodyParser from 'body-parser';

validateEnv();

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();

    this.middlewares();
    this.database();
    this.routes();
  }
  
  private middlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: false}));
    this.app.use(cors());
  }

  private database(): void {
    // MONGODB
    const {
      DATABASE_HOST,
      DATABASE_NAME,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
    } = process.env;

    const connec =
      "mongodb+srv://" + DATABASE_NAME + ":" + DATABASE_PASSWORD + "@" + DATABASE_HOST + "/" + DATABASE_USERNAME

    mongoose.connect(connec);
  }

  private routes(): void {
    this.app.use(routes);
  }

}

export default new App().app;

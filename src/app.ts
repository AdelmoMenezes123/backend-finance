import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import validateEnv from './utils/validatEnv';
import 'dotenv/config';
validateEnv();
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

    const connec =
      "mongodb+srv://" + DATABASE_NAME + ":" + DATABASE_PASSWORD + "@" + DATABASE_HOST + "/" + DATABASE_USERNAME

    mongoose.connect(connec);
  }

  private routes(): void {
    this.express.use(routes);
  }

}

export default new App().express;

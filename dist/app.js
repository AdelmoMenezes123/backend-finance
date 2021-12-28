"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
// import * as bodyParser from 'body-parser';

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  

   constructor() {
    this.express = _express2.default.call(void 0, );

    // this.express.use(bodyParser.json());
    // this.express.use(bodyParser.urlencoded({ extended: false}));
    this.middlewares();
    this.database();
    this.routes();
    this.globals()
  }

   middlewares() {
    this.express.use(_express2.default.json());
    this.express.use(_cors2.default.call(void 0, ));
  }

   database() {
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
    _mongoose2.default.connect(connec, { useNewUrlParser: true });
  }

   routes() {
    this.express.use(_routes2.default);
  }

   globals() {

    this.express.use((req, res, next) => {
      res.locals.userLogadoId = req.session['userLogadoId'] || null;
      res.locals.userLogadoNome = req.session['userLogadoNome'] || null;

      console.log("user-> ", res.locals.user)
      next();
    })
  }
}

exports. default = new App().express;

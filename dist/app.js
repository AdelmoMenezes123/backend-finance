"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const mongoose_1 = require("mongoose");
const validatEnv_1 = require("./utils/validatEnv");
require("dotenv/config");
(0, validatEnv_1.default)();
const routes_1 = require("./routes");
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use((0, cors_1.default)());
    }
    database() {
        const { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME, } = process.env;
        const connec = "mongodb+srv://" + DATABASE_NAME + ":" + DATABASE_PASSWORD + "@" + DATABASE_HOST + "/" + DATABASE_USERNAME;
        mongoose_1.default.connect(connec);
    }
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map
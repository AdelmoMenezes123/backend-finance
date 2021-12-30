"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const validatEnv_1 = __importDefault(require("./utils/validatEnv"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes"));
const bodyParser = __importStar(require("body-parser"));
(0, validatEnv_1.default)();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.app.use(bodyParser.json());
        this.app.use(express_1.default.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    database() {
        const { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME, } = process.env;
        const connec = "mongodb+srv://" + DATABASE_NAME + ":" + DATABASE_PASSWORD + "@" + DATABASE_HOST + "/" + DATABASE_USERNAME;
        mongoose_1.default.connect(connec);
    }
    routes() {
        this.app.use(routes_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map
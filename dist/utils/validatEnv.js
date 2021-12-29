"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.default.cleanEnv(process.env, {
        DATABASE_PASSWORD: envalid_1.default.str(),
        DATABASE_HOST: envalid_1.default.str(),
        DATABASE_NAME: envalid_1.default.str(),
        DATABASE_USERNAME: envalid_1.default.str(),
        PORT: envalid_1.default.port(),
    });
}
exports.default = validateEnv;
//# sourceMappingURL=validatEnv.js.map
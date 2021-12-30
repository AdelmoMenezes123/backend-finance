"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid = require('envalid');
function validateEnv() {
    envalid.cleanEnv(process.env, {
        DATABASE_PASSWORD: envalid.str(),
        DATABASE_HOST: envalid.str(),
        DATABASE_NAME: envalid.str(),
        DATABASE_USERNAME: envalid.str(),
        PORT: envalid.port(),
    });
}
exports.default = validateEnv;
//# sourceMappingURL=validatEnv.js.map
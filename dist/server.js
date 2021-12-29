"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3001;
app_1.default.listen(port, () => { console.log('🚀 🚀 Servidor Rodando na porta: ' + port); });
//# sourceMappingURL=server.js.map
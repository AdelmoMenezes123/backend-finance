"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
const port = process.env.PORT || 3001 
console.log(process.env.DATABASE_USERNAME)
_app2.default.listen(port,()=>{console.log('🚀 🚀 Servidor Rodando na porta: ' + port)})
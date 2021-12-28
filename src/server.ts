import App from './app'
const port = process.env.PORT || 3001 
console.log(process.env.DATABASE_USERNAME)
App.listen(port,()=>{console.log('🚀 🚀 Servidor Rodando na porta: ' + port)})
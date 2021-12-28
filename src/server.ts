import App from './app'
const port = process.env.PORT || 3001 
App.listen(port,()=>{console.log('🚀 🚀 Servidor Rodando na porta: ' + port)})
require('dotenv').config()
const app = require('./app')//configurar express
const connectDb = require('./db/mongodb')//Conexión con MongoDB
const { appConfig, dbConfig }  = require('./config')//llama variables generales



async function initApp(appConfig, dbConfig){//se inicia servidor
    try{
        await connectDb(dbConfig)//Conexión con MongoDB
        app.listen(appConfig.port, () => console.log('Servidor conectado en: ' + appConfig.port))//mostrar puesto de servidor
    }catch(e){//Mostrar error de conexión
        console.error(e)
        process.exit(0)
    }
} 

initApp(appConfig,dbConfig)


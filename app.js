const express = require('express')
const cors = require('cors')
const clienteRoutes = require('./routes/cliente')
const sistemaRoutes = require('./routes/sistema')
const incidenteRoutes = require('./routes/incidente')
const areaRoutes = require('./routes/area')
const ticketRoutes = require('./routes/ticket')
const usuarioRoutes = require('./routes/usuario')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', require('./routes/cliente'));
app.use('/', require('./routes/sistema'));
app.use('/', require('./routes/incidente'));
app.use('/', require('./routes/area'));
app.use('/', require('./routes/ticket'));
app.use('/', require('./routes/usuario'));

app.use('/v1', clienteRoutes)
app.use('/v1', sistemaRoutes)
app.use('/v1', incidenteRoutes)
app.use('/v1', areaRoutes)
app.use('/v1', ticketRoutes)
app.use('/v1', usuarioRoutes)

module.exports = app
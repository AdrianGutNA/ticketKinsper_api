const express = require('express');
const { addIncidente, getIncidente,getUnicoIncidente, updIncidente, delIncidente } = require('../controllers/incidenteController');


const api = express.Router()

api.post('/incidente', addIncidente);
api.get('/incidente', getIncidente );
api.get('/incidente/:id', getUnicoIncidente);
api.put('/incidente/:id', updIncidente);
api.delete('/incidente/:id', delIncidente);

module.exports = api
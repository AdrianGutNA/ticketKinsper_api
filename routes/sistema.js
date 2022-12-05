const express = require('express');
const { addSistema, updSistema, delSistema, getSistemas } = require('../controllers/sistemaController');

const api = express.Router()

api.post('/sistema', addSistema);
api.get('/sistema', getSistemas );
api.put('/sistema/:id', updSistema);
api.delete('/sistema/:id', delSistema);

module.exports = api
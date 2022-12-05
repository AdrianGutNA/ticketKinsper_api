const express = require('express');
const { addUsuario, getUsuarios, updUsuario, delUsuario } = require('../controllers/usuarioController');


const api = express.Router()

api.post('/usuario', addUsuario);
api.get('/usuario', getUsuarios );
api.put('/usuario/:id', updUsuario);
api.delete('/usuario/:id', delUsuario);

module.exports = api
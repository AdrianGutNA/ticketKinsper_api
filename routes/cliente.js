const express = require('express');
const { addCliente, getClientes,getUnicoCliente, updCliente, delCliente } = require('../controllers/clienteController');


const api = express.Router()

api.post('/cliente', addCliente);
api.get('/cliente', getClientes );
api.get('/cliente/:id', getUnicoCliente);
api.put('/cliente/:id', updCliente);
api.delete('/cliente/:id', delCliente);

module.exports = api
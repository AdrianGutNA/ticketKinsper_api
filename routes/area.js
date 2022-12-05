const express = require('express');
const { addArea, getArea,getUnicoArea, updArea, delArea } = require('../controllers/areaController');


const api = express.Router()

api.post('/area', addArea);
api.get('/area', getArea );
api.get('/area/:id', getUnicoArea);
api.put('/area/:id', updArea);
api.delete('/area/:id', delArea);

module.exports = api
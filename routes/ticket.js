const express = require('express');
const { addTicket, getTickets, updTicket, delTicket } = require('../controllers/ticketController');


const api = express.Router()

api.post('/ticket', addTicket);
api.get('/ticket', getTickets );
api.put('/ticket/:id', updTicket);
api.delete('/ticket/:id', delTicket);

module.exports = api
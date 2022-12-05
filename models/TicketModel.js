const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    incidencia: {type: String, required: true},
    sistema: {type: String, required: true},
    descripcion: {type: String, required: true},
    status: {type: String, required: true},
    area: {type: String, required: true}
},{
    timestamps: true
});
module.exports = mongoose.model('Ticket', TicketSchema);
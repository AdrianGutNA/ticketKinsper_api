const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidenteSchema = new Schema({
    nombre: {type: String, required: true},
    area: {type: String, required: true},
},{
    timestamps: true
});
module.exports = mongoose.model('Incidente', IncidenteSchema);
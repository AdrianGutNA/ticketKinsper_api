const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SistemaSchema = new Schema({
    nombre: {type: String, required: true},
    cliente: {type: String, required: true},
    descripcion: {type: String, required: true}
},{
    timestamps: true
});
module.exports = mongoose.model('Sistema', SistemaSchema);
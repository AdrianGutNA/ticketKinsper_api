const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre: {type: String, required: true},
    representante: {type: String, required: true},
    correo: {type: String, required: true},
    telefono: {type: Number, required: true}
},{
    timestamps: true
});
module.exports = mongoose.model('Cliente', ClienteSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    user: {type: String, required: true},
    password: {type: String, required: true},
    area: {type: String, required: true},
    categoria: {type: String, required: true}

},{
    timestamps: true
});
module.exports = mongoose.model('Usuario', UsuarioSchema);
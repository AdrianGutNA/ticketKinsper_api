const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    nombre: {type: String, required: true},
},{
    timestamps: true
});
module.exports = mongoose.model('Area', AreaSchema);
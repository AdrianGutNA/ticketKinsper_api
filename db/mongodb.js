const mongoose = require('mongoose');

//mongoose.connection.on('open', () => console.log('db conectadoooooo'))

async function connectDb ({host, port, dbName}){
    await mongoose.connect('mongodb://' + host +':' + port +'/' + dbName, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('db conectada'))
    .catch(err => console.log(err));
    
}

module.exports = connectDb
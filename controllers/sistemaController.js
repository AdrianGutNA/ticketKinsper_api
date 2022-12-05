const Sistema = require('../models/SistemaModel')

async function addSistema(req, res) {
    try {
        const {
            nombre,
            cliente,
            descripcion
        } = req.body

        const sistema = Sistema({
            nombre,
            cliente,
            descripcion
        })

        const sistemaStored = await sistema.save()

        res.status(201).send({ sistemaStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getSistemas(req, res) {
    const sistemas = await Sistema.find().lean().exec();
    res.status(200).send({ sistemas });
}

async function updSistema(req, res) {
    try {
        const {
            nombre,
            cliente,
            descripcion
        } = req.body;

        const newSistema = {
            nombre,
            cliente,
            descripcion
        };

        await Sistema.findByIdAndUpdate(req.params.id, newSistema);
        res.json({ status: 'actualizado' });

    } catch (e) {
        res.status(500).send({ message: e.message })
    }

}

async function delSistema(req, res) {
    try {
        await Sistema.findByIdAndDelete(req.params.id);
        res.json({ status: 'actualizado' });
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addSistema,
    getSistemas,
    updSistema,
    delSistema
};
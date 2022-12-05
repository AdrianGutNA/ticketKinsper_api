const Cliente = require('../models/ClienteModel')

async function addCliente(req, res) {
    try {
        const {
            nombre,
            representante,
            correo,
            telefono
        } = req.body

        const cliente = Cliente({
            nombre,
            representante,
            correo,
            telefono
        })

        const clienteStored = await cliente.save()

        res.status(201).send({ clienteStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }

}
async function getClientes(req, res) {
    const clientes = await Cliente.find().lean().exec();
    res.status(200).send({ clientes });
}

async function getUnicoCliente(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).send({ cliente });
}

async function updCliente(req, res) {
    try {
        const {
            nombre,
            representante,
            correo,
            telefono
        } = req.body;

        const newCliente = {
            nombre,
            representante,
            correo,
            telefono
        };

        await Cliente.findByIdAndUpdate(req.params.id, newCliente);
        res.json({ status: 'actualizado' });

    } catch (e) {
        res.status(500).send({ message: e.message })
    }

}

async function delCliente(req, res) {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.json({ status: 'actualizado' });
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addCliente,
    getClientes,
    getUnicoCliente,
    updCliente,
    delCliente
};
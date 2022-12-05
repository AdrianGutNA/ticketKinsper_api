const Usuario = require('../models/UsuarioModel')

async function addUsuario(req, res) {
    try {
        const {
            nombre,
            user,
            password,
            area,
            categoria
        } = req.body

        const usuario = Usuario({
            nombre,
            user,
            password,
            area,
            categoria
        })

        const usuarioStored = await usuario.save()

        res.status(201).send({ usuarioStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getUsuarios(req, res) {
    const usuarios = await Usuario.find().lean().exec();
    res.status(200).send({ usuarios });
}

async function updUsuario(req, res) {
    try {
        const {
            nombre,
            user,
            password,
            area,
            categoria
        } = req.body;

        const newUsuario = {
            nombre,
            user,
            password,
            area,
            categoria
        };
        await Usuario.findByIdAndUpdate(req.params.id, newUsuario);
        res.json({ status: 'actualizado' });

    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function delUsuario(req, res) {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ status: 'actualizado' });
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addUsuario,
    getUsuarios,
    updUsuario,
    delUsuario,
};
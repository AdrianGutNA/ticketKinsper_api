const Ticket= require('../models/TicketModel')

async function addTicket(req, res) {
    try {
        const {
            incidencia,
            sistema,
            descripcion,
            status,
            area
        } = req.body

        const ticket = Ticket({
            incidencia,
            sistema,
            descripcion,
            status,
            area
        })

        const ticketStored = await ticket.save()

        res.status(201).send({ ticketStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

async function getTickets(req, res) {
    const tickets = await Ticket.find().lean().exec();
    res.status(200).send({ tickets });
}


async function updTicket(req, res) {
    try {
        const {
            incidencia,
            sistema,
            descripcion,
            status,
            area
        } = req.body;

        const newTicket = {
            incidencia,
            sistema,
            descripcion,
            status,
            area
        };

        await Ticket.findByIdAndUpdate(req.params.id, newTicket);
        res.json({ status: 'actualizado' });

    } catch (e) {
        res.status(500).send({ message: e.message })
    }

}

async function delTicket(req, res) {
    try {
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({ status: 'actualizado' });
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addTicket,
    getTickets,
    updTicket,
    delTicket
};
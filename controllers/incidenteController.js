const Incidente = require('../models/IncidenteModel')

async function addIncidente (req, res){
    try{
        const{
            nombre,
            area 
        } = req.body
        
        const incidente = Incidente({
            nombre,
            area
        })

        const incidenteStored = await incidente.save()
        
        res.status(201).send({incidenteStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
    
}
async function getIncidente(req,res){
    const incidentes = await Incidente.find().lean().exec();
    res.status(200).send({incidentes});
}

async function getUnicoIncidente(req, res){
    const incidente = await Incidente.findById(req.params.id);
    res.status(200).send({incidente});
}

async function updIncidente (req, res)  {
    try{
        const {
            nombre,
            area
        } = req.body;

    const newIncidente = {
        nombre,
        area
    };
    await Incidente.findByIdAndUpdate(req.params.id, newIncidente);
    res.json({status: 'actualizado'});

    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function delIncidente(req, res){
    try{
        await Incidente.findByIdAndDelete(req.params.id);
        res.json({status: 'actualizado'});
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addIncidente,
    getIncidente,
    getUnicoIncidente,
    updIncidente,
    delIncidente,
};
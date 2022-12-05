const Area = require('../models/AreaModel')

async function addArea (req, res){
    try{
        const{
            nombre 
        } = req.body
        
        const area = Area({
            nombre 
        })

        const AreaStored = await area.save()
        
        res.status(201).send({AreaStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
    
}
async function getArea(req,res){
    const areas = await Area.find().lean().exec();
    res.status(200).send({areas});
}

async function getUnicoArea(req, res){
    const area = await Area.findById(req.params.id);
    res.status(200).send({area});
}

async function updArea (req, res)  {
    try{
        const {
            nombre
        } = req.body;

    const newArea = {
        nombre
    };

    await Area.findByIdAndUpdate(req.params.id, newArea);
    res.json({status: 'actualizado'});

    }catch(e){
        res.status(500).send({message: e.message})
    }
    
}

async function delArea(req, res){
    try{
        await Area.findByIdAndDelete(req.params.id);
        res.json({status: 'actualizado'});
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addArea,
    getArea,
    getUnicoArea,
    updArea,
    delArea,
};
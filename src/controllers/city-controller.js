const { cityService} = require('../services/index.js');

const cityservice = new cityService();

const create = async (req,res)=>{
    try {
       const city = await cityservice.createCity(req.body);
       res.status(200).json({
        data:city,
        success:true,
        message:'city created',
        err: {}
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'not able to create city',
            err: error
        })
    }
}

const destroy = async (req,res)=>{
    try {
        const city = await cityservice.deleteCity(req.params.id);
        res.status(200).json({
            data:city,
            success:true,
            message:'city deleted',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'not able to destroy city',
            err: error
        })
    }
}

const update = async (req,res)=>{
    try {
        
        const city = await cityservice.updateCity(req.params.id,req.body);
        res.status(200).json({
            data:city,
            success:true,
            message:'city updated',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'not able to update city',
            err: error
        })
    }
}

const get = async (req,res)=>{
    try {
        const city = await cityservice.getCity(req.params.id);
        res.status(200).json({
            data:city,
            success:true,
            message:'city fetched',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'not able to get city',
            err: error
        })
    }
}

const getall = async (req,res)=>{
    try {
        const city = await cityservice.getAllCities();
        res.status(200).json({
            data:city,
            success:true,
            message:'city fetched',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch cities',
            err: error
        })
    }
}

module.exports = {
    create,
    get,
    getall,
    update,
    destroy
}
const { post } = require("../routes");
const catalogoProducts = require ("../schemas/esquemas");
const req =require ("../schemas/categoriasSchema")
module.exports={
    allElements: async function(req,res,next){
        try{
            const everyElement = await catalogoProducts.find().populate("category")
            res.json(everyElement);
        }catch(err){
            console.log(err);
        }
    },
    elementById: async function(req,res,next){
        try{
            const elements = await catalogoProducts.findById({_id:req.params.id},req.body)
            res.json(elements);
        }catch(err){
            console.log(err);
        }
    },
    elementByName: async function(req,res,next){
        try{
            const elementsName = await catalogoProducts.findByName().where("name").equals("name");
            res.json(elementsName);
        }catch(err){
            console.log(err);
        }
    },
    createElement: async function(req,res,next){
        try{
            const newElement = new catalogoProducts({
                name:req.body.name,
                sku:req.body.sku,
                type:req.body.type,
                brand:req.body.brand,
                price:req.body.price,
                category:req.body.category
            })
            const new4catalogo = await newElement.save()
            res.json(new4catalogo)
        }catch(err){
            console.log(err);
        }
    },
    elementUp: async function(req,res,next){
        try{
        const up = await catalogoProducts.updateOne({_id:req.params.id},req.body)
        res.json(up)
        }catch(err){
            console.log(err);
        }
    },
    allElementUp: async function(req,res,next){
        try{
        const upAll = await catalogoProducts.updateAll({name:req.params.name},req.body)
        res.json(upAll)
        }catch(err){
            console.log(err);
        }
    },
    elementDelete: async function(req,res,next){
        try{
            const deleteOne = await catalogoProducts.deleteOne({_id:req.params.id})
            res.json(deleteOne)
        }catch(err){
            console.log(err);
        }
    },
    allElementsDelete: async function(req,res,next){
        try{
            const deleteMany = await catalogoProducts.deleteMany()
            res.json(deleteMany)
        }catch(err){
            console.log(err);
        }
    }
};
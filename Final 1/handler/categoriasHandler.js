const { post } = require("../routes");
const CategorySchema = require ("../schemas/categoriasSchema");
module.exports={
    categories: async function(req,res,next){
    try{
        const userByid = await CategorySchema.findById({_id:req.params.id},req.body)
        res.json(userByid);
    }catch(err){
        console.log(err);
    }
    },
    createCategory: async function(req,res,next){
        try{
            const newCategory = new CategorySchema({
                name:req.body.name
            })
            const newCat = await newCategory.save()
            res.json(newCat)
        }catch(err){
            console.log(err);
        }
    },    
    deleteCategory: async function(req,res,next){
        try{
            const deleteCat = await CategorySchema.deleteOne({_id:req.params.id})
            res.json(deleteCat)
        }catch(err){
            console.log(err);
        }
    }
}
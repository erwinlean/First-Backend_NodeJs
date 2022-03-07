const mongoose = require ("../config/mongodb"); 
const categorias = mongoose.Schema({
    name:String,
    category:{
        type:mongoose.Schema.ObjectId,
        unique:true,
        ref:"categorias"
    },
    deleted:Boolean
});
module.exports = mongoose.model("categorias",categorias); 
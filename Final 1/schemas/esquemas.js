const mongoose = require ("../config/mongodb"); 
const productCatalogo = mongoose.Schema({
    name:String,
    sku:String,
    type:String,
    brand:String,
    price:Number,
    description:String,
    category:String,
    deleted:Boolean
});
module.exports = mongoose.model("catalogo",productCatalogo); 
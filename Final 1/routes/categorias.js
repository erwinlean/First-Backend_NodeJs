var express = require('express');
var router = express.Router(); 
const categoriesHand = require("../handler/categoriasHandler");
router.get("/",categoriesHand.categories); 
router.post("/",(req,res,next)=>{req.app.jsonWebT()},categoriesHand.createCategory);
router.delete("/:id",(req,res,next)=>{req.app.jsonWebT()},categoriesHand.deleteCategory);
module.exports = router; 
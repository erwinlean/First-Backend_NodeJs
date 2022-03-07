var express = require('express');
var router = express.Router();
const handlers = require("../handler/handlers"); 
router.get("/",handlers.allElements);
router.get("/:id",handlers.elementById); 
router.get("/:name",handlers.elementByName); 
router.post("/",/*(req,res,next)=>{req.app.jsonWebT()},*/handlers.createElement);
router.put("/:id",(req,res,next)=>{req.app.jsonWebT()},handlers.elementUp);
router.put("/:name",(req,res,next)=>{req.app.jsonWebT()},handlers.allElementUp);
router.delete("/:id",(req,res,next)=>{req.app.jsonWebT()},handlers.elementDelete);
router.delete("/",(req,res,next)=>{req.app.jsonWebT()},handlers.allElementsDelete); 
module.exports = router; 
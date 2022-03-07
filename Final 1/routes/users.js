var express = require('express');
var router = express.Router(); 
const userHandler = require("../handler/userHandler");
router.get("/",(req,res,next)=>{req.app.jsonWebT()},userHandler.allUsers);
router.get("/:id",userHandler.usersId);
router.post("/",(req,res,next)=>{req.app.jsonWebT()},userHandler.createUser);
router.post("/login",userHandler.userLogin);
module.exports = router; 
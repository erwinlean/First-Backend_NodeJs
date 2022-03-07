const { post } = require("../routes");
const users = require ("../schemas/userEsquema"); 
const bcrypt = require ("bcrypt"); 
const jwt = require("jsonwebtoken");
module.exports={
    allUsers: async function(req,res,next){
        try{
            const allUser = await users.find()
            res.json(allUser);
        }catch(err){
            console.log(err);
        }
    },
    usersId: async function(req,res,next){
        try{
            const userByid = await users.findById({_id:req.params.id},req.body)
            res.json(userByid);
        }catch(err){
            console.log(err);
        }
    },
    userLogin: async function(req,res,next){
        try{
            const usersComp = await users.findOne({email:req.body.email})
            if(!usersComp){
                console.log("error, no se encontro coincidencia de mail")
            }
            if(bcrypt.compareSync(req.body.password,usersComp.password)){
                const jwtToken= jwt.sign({
                    userName:usersComp.name
                },"tokenKey",{
                    expiresIn:"2h"
                })
                console.log(`funcionando token${jwtToken}`);
                console.log(`funcionando contraseña y mail ${usersComp}`);
            }else{
                console.log("error, contraseña incorrecta")
            }
        }catch(err){
            console.log(err);
            next()
        }
    },
    createUser: async function(req,res,next){
        try{
            const userSch = new users({
                name:req.body.name,
                sku:req.body.sku,
                email:req.body.email,
                password:req.body.password
            })
            if(this.password!=Number&&String){
                console.log("El password debe tener numeros y letras.");
            }else{
                console.log("password funcionando");
            }
            const newUser = await userSch.save()
            res.json(newUser)
        }catch(err){
            console.log(err);
        }
    },    
}
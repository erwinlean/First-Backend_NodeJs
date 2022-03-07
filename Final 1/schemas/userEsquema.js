const mongoose = require ("../config/mongodb");
const encrypt = require ("bcrypt");
const users = mongoose.Schema({
    name:String,
    sku:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});
users.pre("save",function(next){
    this.password=encrypt.hashSync(this.password,12)
    next()
})
module.exports = mongoose.model("users",users);
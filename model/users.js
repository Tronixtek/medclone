const mongoose = require("mongoose");


const userSchema = new  mongoose.Schema({
    last_name:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password1:{
        type:String,
        require:true
    },
    password2:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model("users",userSchema);
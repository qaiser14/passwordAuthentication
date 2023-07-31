const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,
        unique:true
    },

    email:String,
    password:String,

});

const User = mongoose.model("passSignup" , userSchema);

module.exports = User;


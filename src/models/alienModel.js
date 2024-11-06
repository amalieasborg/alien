// models/alienModel.js
const mongoose = require('mongoose');

const alienSchema=new mongoose.Schema({
    name: {type:String, required:true},
    race: String,
    planet: String,
    abilities: String
});

module.exports=mongoose.model('Alien', alienSchema);

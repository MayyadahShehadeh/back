'use strict';

const mongoose = require('mongoose');

const objSchema= new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String,


})
const objModel = mongoose.model('drinkmodel',objSchema);

module.exports=objModel;
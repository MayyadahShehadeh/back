'use strict';

const drinksModel=require('../models/drinksmodels');

const addFavData = (req,res)=>{
const {strDrink,strDrinkThumb,idDrink}=req.body;
const newModel =new drinksModel({
    strDrink:strDrink,
    strDrinkThumb:strDrinkThumb,
    idDrink:idDrink,
})
newModel.save();
res.send(newModel);
console.log('item added');

}
// ------- get fav

const getFavData = (req,res)=>{
drinksModel.find({},(err,data)=>{
    res.send(data);
})
    
}

// ---- delete fav const getFavData = (req,res)=>{
const deleteFavData = (req,res)=>{
const id=req.params.id
drinksModel.findByIdAndDelete({_id:id},(err,data)=>{
if (err){
    res.send(err)
}else{
    drinksModel.find({},(err,data)=>{
res.send(data);
console.log('item deleted');

    })
}
})
    }
// --------------------- update fav 
const updateFavData = (req,res)=>{
    const {strDrink,strDrinkThumb,idDrink}=req.body;
    const id=req.params.id;
    drinksModel.find({_id:id},(err,data)=>{
if (err){
    res.send(err)
}else{
    data[0].strDrink=strDrink;
    data[0].strDrinkThumb=strDrinkThumb;
    data[0].idDrink=idDrink;
    data[0].save();
    res.send(data);
    console.log('item updated');
}

    })
}
module.exports={
    addFavData,
    getFavData,
    deleteFavData,
    updateFavData,
}
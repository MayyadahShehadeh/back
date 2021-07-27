'use strict';

const superagent=require('superagent');

const getApiData = (req,res) =>{
let url ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
superagent.get(url).then((response)=>{
const apiData= response.body.drinks.map((item,idx)=>{
return new apiObj(item);


})
res.send(apiData);

})
}

class apiObj{
    constructor (data){
 this.strDrink=data.strDrink;
this.strDrinkThumb= data.strDrinkThumb;
this.idDrink= this.idDrink;
    }


}



module.exports=getApiData;
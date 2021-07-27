const cors=require('cors');
const express=require('express');
var app = express()
const superagent=require('superagent');
require('dotenv').config();
const port =process.env.PORT;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test4', {useNewUrlParser: true, useUnifiedTopology: true});
// middlewares
app.use(cors());
app.use(express.json());

// proof endpoint
app.get('/', (req,res)=>{
    res.send('everything is okay');
})
const getApiData = require('./collectors/getApiData');
const crud = require('./collectors/CRUD');

app.get('/getApiData',getApiData)
app.post('/addFavData',crud.addFavData);
app.get('/getFavData',crud.getFavData);
app.delete('/deleteFavData/:id',crud.deleteFavData);
app.put('/updateFavData/:id',crud.updateFavData);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
//TODO: implement the zip server in Node.js!
"use strict";

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const zips = require('./zips.json')
let zipCityIndex = {}
zips.map((zip)=>{
    let city = zip.city.toLowerCase()
    if(!zipCityIndex[city]){
        zipCityIndex[city] = []
    }
    zipCityIndex[city].push(zip)
})
console.log(zips.length)

const app = express();

const port = process.env.PORT || 80
const host = process.env.HOST || ''
app.use(morgan('dev'));
app.use(cors());

app.get('/zips/city/:cityName', (req, res)=> {
    let zipsForCity = zipCityIndex[req.params.cityName]
    if(!zipsForCity){
        res.status(404).send('invalid city name')
    }else {
        res.json(zipsForCity);
    }
});

app.listen(port, host, ()=> {
    console.log(`server is listening at http://${host}:${port}`); 
});



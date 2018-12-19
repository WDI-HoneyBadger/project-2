var express = require('express');
var router = express.Router();

var citiesController = require('./city_controllers');

var country = require('../modules/countries');
var city = require('../modules/city');

router.get('/', country.getAll, renderIndex);
router.get('/:id', country.find, city.findByCountry , renderShow);
// router.post(':id/cities', city.create, redirectShow);


function renderIndex(req, res){

    // console.log(res.locals.cities)
    var mustacheVariables = {
      countries: res.locals.countries
    }
    res.render('./countries/index', mustacheVariables);
}


function renderShow(req,res){
    // var mustacheVariables = {
    //     country:  res.locals.countries, 
    //     // cities2: res.locals.cities
    // }
    
    // console.log(res.locals.cities)
    // console.log('*******', mustacheVariables)

    res.locals.cities = res.locals.cities.map(function (city){
        city.imagesArr = city.image.split(","); 
        console.log(city); 
        return city ; 
    })
    // console.log("image \n" , res.locals.cities[1].imagesArr );
    
    res.render('./countries/show');
  }

 
module.exports = router;
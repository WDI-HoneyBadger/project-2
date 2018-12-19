var express = require('express');
var router = express.Router();
var city = require('../modules/city');
var country = require('../modules/countries');


router.get('/new', country.getAll, renderNew);
router.get('/:id/edit', city.find, country.getAll, renderEdit);
router.post('/', city.create, redirectShow)
router.delete('/:id', city.delete, redirectIndex);

router.put('/:id', city.update, redirectShow);

function renderNew(req, res) {
    var mustacheVariables = {
         countries: res.locals.countries
        }
    res.render('./cities/new');
  }

// router.get('/', city.getAll, renderIndex);
// router.get('/:id', city.find, renderShow);

// function renderIndex(req, res){
//     var mustacheVariables = {
//       cities: res.locals.cities
//     }
//     res.render('./cities/index', mustacheVariables);
// }


// function renderShow(req,res){
//     var mustacheVariables = res.locals.cities;
//     res.render('./cities/show', mustacheVariables);
// }
  
function redirectShow(req, res) {
    res.redirect(`/countries/${res.locals.countryId}`);
  }

  function redirectIndex(req,res){
    res.redirect('/countries');
  }

  function renderEdit(req, res) {
    var mustacheVariables = {
      cities: res.locals.cities,
      countries: res.locals.countries
    }
    res.render('./cities/edit', mustacheVariables);
  }

  function redirectShow(req, res) {
    res.redirect(`/countries/${res.locals.countrytId}`);
  }
module.exports = router;
  

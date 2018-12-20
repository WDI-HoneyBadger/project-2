var express = require('express');
var router = express.Router();
var image = require('../models/image');
var auth = require('../middleware/auth');
// router.get('/', image.getAll, renderIndex);
// router.get('/:id', image.find, renderShow);

router.get('/new',  renderNew); // render user profile image form 

router.get('/:image_id/edit', image.find, renderEdit);
// router.post('/', image.create, redirectShow);
router.put('/:image_id', auth.onlyUsers, image.update, redirectShow);
router.delete('/:image_id', auth.onlyUsers,  image.delete, redirectIndex);


// create new Image using user id  
router.post('/new', auth.onlyUsers,image.create, redirectShow);



function renderIndex(req, res){
  var mustacheVariables = {
    image : res.locals.image
  }
  
  res.render('./images/index', mustacheVariables);
}

function renderShow(req, res) {
  var mustacheVariables = {
    image : res.locals.image
  }
  res.render('./images/show', mustacheVariables);
}

function renderNew(req, res) {

  console.log( "test 33 " ,  req.userId)
  var mustacheVariables = {
    // image : res.locals.image,
    // text : res.locals.text
    id:  req.userId
  }

  res.render('./images/new', mustacheVariables);
}

function renderEdit(req, res) {
  console.log(res.locals.image);
  var mustacheVariables = res.locals.image;
  res.render('./images/edit', mustacheVariables);
}

function redirectIndex(req,res){
  res.redirect(`/users/${res.locals.id_user}`);
  // console.log("res.locals.id")
}


function redirectShow(req, res) {
  res.redirect(`/users/${res.locals.id_user}`);
}


module.exports = router;
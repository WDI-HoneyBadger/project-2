var express = require('express');
var router = express.Router();
var user = require('../models/user');
var auth = require('../middleware/auth');
var image = require('../models/image');
var imagesController = require('../controllers/imagesController');
var Gallery = require('express-photo-gallery');



var options = {
  title: 'My Awesome Photo Gallery'
};

router.use('/:id/images', Gallery('./public/images', options));

// router.use('/:id/images',imagesController);

// test 

router.use('/:id/images', assignUserId, imagesController );


router.get('/',user.getAll,renderIndex);

router.get('/new', renderNew); // create new user 

router.get('/:id/edit', user.find , renderEdit); // edit  profile 

router.get('/:id', user.find, image.findByUser, renderShow);

router.post('/', user.create, redirectShow);
router.delete('/:id', assignUserId, auth.onlyUsers, user.delete, redirectIndex);
router.put('/:id',  assignUserId, auth.onlyUsers, user.update,redirectShow);

function assignUserId(req, res, next) {
    req.userId = req.params.id;
    next()
}

function renderIndex(req,res){
    var mustacheVaribles = {
        user : res.locals.user,
        image : res.locals.image
    }
    res.render('./users/index',mustacheVaribles);
}

function renderShow(req,res){
    var mustacheVaribles = {
        user : res.locals.user,
        image : res.locals.image
    }
    res.render('./users/show',mustacheVaribles);
}


function renderEdit(req, res) {
    var mustacheVariables = res.locals.user;
    console.log('&&&&&&&&');
    console.log(mustacheVariables);
    
    res.render('./users/edit', mustacheVariables);
}

function renderNew(req, res){
    res.render('./users/new');
  }
  
function redirectShow(req, res) {

res.redirect(`/users/${res.locals.id}`);
}

function redirectIndex(req,res){
    res.redirect('/users');
  }
  
  
module.exports = router;
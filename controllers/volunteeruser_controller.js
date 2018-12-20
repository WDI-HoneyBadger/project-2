var express = require('express');

var router = express.Router();

var user = require('../models/volunteeruser');
var auth = require('../middleware/auth');


router.get('/new', renderNew);
router.get('/:id', auth.onlyUsers, user.find, renderShow);
router.post('/', user.create, redirectShow);

function renderNew(req, res){
  mustacheVariables={
    user:res.locals.user
  }
  res.render('./users/new');
}
function renderShow(req, res) {
  console.log(req.session.user)
  var mustacheVariables = {
    user: res.locals.user
  }
  res.render('./events', mustacheVariables)
}

function redirectShow(req, res) {
  res.redirect(`/users/${res.locals.userId}`);
}
function renderShow(req,res){
  mustacheVariables = res.locals.users;
  res.render('./events', mustacheVariables);
}
function renderShow(req,res){
  mustacheVariables = res.locals.users;
  res.render('./events', mustacheVariables);
}

module.exports = router;
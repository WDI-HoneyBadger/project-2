var express = require('express');
var router = express.Router();

var trainer = require('../models/trainer');


router.get('/', trainer.getAll, renderIndex);
router.get('/new', renderNew);
router.post('/', trainer.create, redirectIndex);
router.put('/edit/:id', trainer.update, redirectShow);
router.get('/:id/edit', trainer.find, renderEdit);
//router.delete('/:id', trainer.delete, redirectIndex)
router.delete('/:id', trainer.delete, redirectIndex)
// router.get('/:id',trainer.find, renderShow);
// router.get('/index/:id' , trainer.find , renderSingleTr)
router.get('/index/:id' , trainer.find , renderSingleTr);


function renderIndex(req, res){
  var mustacheVariables = {
    trainer: res.locals.trainer
  }
  res.render('./trainers/show', mustacheVariables);
}

function renderEdit(req, res) {
    var mustacheVariables = res.locals.trainers
  console.log(res.locals.exercises);
    res.render('./trainers/edit', mustacheVariables);
  }

// function renderShow(req,res){
//   var mustacheVariables = {
//     trainers: res.locals.trainer,
   
//   }
//   res.render('./trainers/show', mustacheVariables);
// }

function renderNew(req,res){

    res.render('./trainers/new');

}

function renderSingleTr (req,res){

    res.render('./trainers/singleTrainer');

}

function redirectShow(req, res) {
    console.log(req.body);
    
    res.redirect(`/trainers/${res.locals.trainer_id}`);
  }
  
  function redirectIndex(req, res){

    res.redirect('./trainers');
}

function redirectIndex(req,res){

    res.redirect('/trainers');

}

module.exports = router;
var express = require('express');
var router = express.Router();

var exercise = require('../models/exercise');


router.get('/', exercise.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', exercise.find, renderEdit);
router.put('/:id', exercise.update, redirectShow);
router.post('/', exercise.create, redirectShow);
router.get('index/:id', exercise.find, renderShow);
router.delete('/:id', exercise.delete, redirectIndex);

router.get('/index/:id' , exercise.find , renderSingleEx);
function renderIndex(req, res){
    console.log("here", res.locals.exercise)
  var mustacheVariables = {
    exercises: res.locals.exercise
  }
  res.render('./exercises/show', mustacheVariables);
}

function renderSingleEx(req,res){
    console.log(res.locals.exercises); 
    res.render('./exercises/singleExercise');
}

function renderEdit(req, res) {
    var mustacheVariables = res.locals.exercises
  console.log(res.locals.exercises);
    res.render('./exercises/edit', mustacheVariables);
  }

function renderNew(req, res){
    res.render('./exercises/new');
  }

  function redirectShow(req, res) {
    console.log(req.body);
    console.log(res.locals.exercise_id);
    res.redirect(`/exercise/${res.locals.exercise_id}`);
  }
  

function renderShow(req,res){
    
  var mustacheVariables = {
    exercise: res.locals.exercise,
    //students: res.locals.students
  }
  res.render('./singleExercise', mustacheVariables);
}

function redirectIndex(req, res){

    res.redirect('/exercise')
}
module.exports = router;
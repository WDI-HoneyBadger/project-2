var express = require('express');
var router = express.Router();

var events =require('../models/events');
var user =require('../models/volunteeruser');
var auth = require('../middleware/auth');

router.get('/', events.getAll, renderIndex);
router.get('/new', events.getAll,renderNew);

 router.get('/:id/edit', events.find, renderEdit);
router.post('/new', events.create, redirectShow);
 router.get('/:id/delete', events.delete, renderDelete);
// router.put('/:id', events.update, renderShow);
// router.get('/join', renderJoin);

router.post('/:id/join', events.event_volenteers, events.getVolenteersCount, redirectShow);

router.get('/:id', events.find, events.getVolenteersCount , renderShow);    
function renderIndex(req, res){
    mustacheVariables = {
      events: res.locals.events
    }
    console.log(mustacheVariables)
    res.render('./events/index', mustacheVariables);
  }
  
  function renderShow(req,res){
    var mustacheVariables = res.locals.events;
    // console.log(mustacheVariables)
    res.render('./events/show', mustacheVariables);
  }

  //function renderNew(req, res){
  //  res.render('./events/new/');
  //}
  function renderNew(req, res){
    mustacheVariables={
      events:res.locals.events
    }
    res.render('./events/new');
  }

  function redirectShow(req, res) {
    res.redirect(`/events/${res.locals.events_id || req.params.id}`);
  }

  function renderJoin(req, res){
    mustacheVariables={
      events:res.locals.events
    }
    res.render('./events/join');
  }
  
   function renderEdit(req, res){
     mustacheVariables = {
   events: res.locals.events
   }
   console.log(mustacheVariables)
   res.render('./events/edit', mustacheVariables);
   }
  
  
   function renderDelete(req, res){
    mustacheVariables = {
  events: res.locals.events
  }
  console.log(mustacheVariables)
  res.render('./events/delete', mustacheVariables);
  }

module.exports = router; 
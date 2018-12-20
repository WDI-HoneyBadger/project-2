var express = require('express');
var router = express.Router();

var coffee = require('../models/coffee');
var orders = require('../models/orders');


router.get('/', coffee.getAll, renderIndex);


router.get('/menu', coffee.getAll, redirectShow);


router.post('/order', coffee.creatOrder , redirectShowOrder);
router.get('/order/:id', coffee.findOrder , coffee.find ,  renderShowOrder);
router.get('/:id/edit', orders.find, coffee.find ,  renderEdit);
router.delete('/order/:id' , orders.delete , redirectShowmenu);
router.put('/order/:id',coffee.editOrder,redirectShowOrder);


function renderIndex(req,res){
    var mustacheVeriables = {
        coffees : res.locals.coffees
    }

    res.render('./coffee/index' , mustacheVeriables);
}

function redirectShow(req,res){
    var mustacheVeriables = {
        coffees : res.locals.coffees
    }
    res.render('./coffee/show' , mustacheVeriables);

    // res.render('./coffee/index' , mustacheVeriables);
}

function renderShowOrder( req, res){

console.log(res.locals.order , res.locals.coffee , )
// res.send(res.locals.order)
    res.render('./coffee/order');
}

function redirectShowmenu(req,res){
    res.redirect('/coffee/menu')
}


function redirectShowOrder(req, res){

    res.redirect(`/coffee/order/${res.locals.orderId}`);
   
}

function redirectEdit(req,res){

    var mustacheVeriables = {
        coffees : res.locals.coffees
    }
    res.render('./coffee/order' , mustacheVeriables);
}
    function renderEdit(req,res){
        var mustacheVariables = res.locals.order;
        res.render('./coffee/edit', mustacheVariables);
}



module.exports = router;
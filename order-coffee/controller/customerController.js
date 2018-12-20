var express = require('express');
var router = express.Router();

var customer = require('../models/customer');


router.get('/', customer.getAll, renderIndex);
router.get('/signin', customer.getAll, renderSingin);
function renderIndex(req,res){
    var mustacheVeriables = {
        customer : res.locals.coffees
    }

    res.render('./customer/index' , mustacheVeriables);

    
}

function renderSingin(req,res){
    res.render('./customer/signin');
}



module.exports = router;
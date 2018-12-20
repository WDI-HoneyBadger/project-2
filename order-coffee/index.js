var express = require('express');
var mustache = require('mustache-express');
var port = 3000;
var logger = require('morgan');  
var bodyParser = require('body-parser');  
var methodOverride  = require('method-override'); 
var coffeeController = require('./controller/coffeeController');
var customerController = require('./controller/customerController');
var app = express();


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/static', express.static(__dirname + '/public'));

// morgan config:
app.use(logger('dev'));

// body-parser config:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/coffee', coffeeController);
app.use('/customer', customerController);

app.get('/', function(req, res){
  res.render('./index');
})

app.listen(port, function(){
  console.log('order coffee');
})


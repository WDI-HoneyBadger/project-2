var express = require('express');
var app = express();
var port = 3000;


// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));


// express session 
var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

var usersController = require('./controllers/userController');
var sessionsController = require('./controllers/sessionController');

app.use('/login', sessionsController);
app.use('/users', usersController);


app.get('/', (req, res) => {
    res.render('./index');
  })

  var countriesController = require('./controllers/countries_controllers');
  var citiesController = require('./controllers/city_controllers');

  app.use('/countries', countriesController);
  app.use('/city', citiesController);



  app.listen(port, function () {
    console.log('---------------------------------------');
    console.log('Express listening on localhost:' + port);
    console.log('---------------------------------------');
  })
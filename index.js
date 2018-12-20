var express = require('express');
var mustache = require('mustache-express');
var session = require('express-session')
var port = 3000;

// app level config ------------------------------------------------------
// create our application and tell it what to do
var app = express();

var event= require('./controllers/events_controller');
var user = require('./controllers/volunteeruser_controller');

// mustache set up
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));
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

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.render('./index');
  })

app.use('/events', event);
 
app.use('/users', user);

var sessionsController = require('./controllers/sessionsController');

app.use('/login', sessionsController);
app.use('/users', user);
app.get('/', (req, res) => {
  res.render('./index');
})


 
  /*var session = require('express-session')
  app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }))*/
// start the server!
app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});
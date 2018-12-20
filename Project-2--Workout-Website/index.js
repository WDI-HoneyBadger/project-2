var express = require('express');
var app = express();
var port = 3000;
var path  = require('path');
// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '/public')));


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

app.get('/', (req, res) => {
  res.render('./index.html');
})

var exerciseController = require('./controllers/exercise_controller');
var trainerController = require('./controllers/trainer_controller');

app.use('/trainers', trainerController);
app.use('/exercise', exerciseController);

app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
console.log('---------------------------------------')
});

var express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);

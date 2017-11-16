let express = require('express');
let app = express();
let path = require('path');

let bodyParser = require('body-parser');

let port = process.env.PORT || 8080;

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://crudappappler:nodeapp@ds157325.mlab.com:57325/prokriya-crud-app');

let index = require('./routes/index');
let employees = require('./routes/employees');

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/employees', employees);


app.listen(port, (req, res) => {
	console.log('listening on ',port);
})

module.exports = app;

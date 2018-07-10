const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = new express();

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://ashokcrest:ashokcrest123@ds117691.mlab.com:17691/test-mongo-db')
mongoose.connect('mongodb://localhost:27017/test-db')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended:true }));

app.set('view engine', 'ejs');  

app.get('/', (req, res) => { res.write('hello, welcome to CRUD App with NODE-EXPRESS-MONGODB!'); res.end(); });

const employee = require('./routes/employee.route');

app.use('/employee', employee);

app.listen(3000, () => { console.log('Server is listening to port 3000'); }); 
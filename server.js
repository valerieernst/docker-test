'use strict';
const express    = require('express');
const db_connection = require('./db_connection.js');
const db_seed = require('./db_seed.js');
const bodyParser = require('body-parser');

const app = express();

db_connection.connect(function(err){
  if(err) {console.log('error with mysql db!', err);}
  console.log('mysql db connected!');
});

// this is a poor man's way to work through no data persistance...
db_seed(db_connection);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('this is a test api!');
});

app.get('/users',(req,res) => {
  db_connection.query('SELECT * from user LIMIT 2', (err, rows, fields) => {
  if (err) res.send(`there was a mysql error! here it is: ${err}`);
  res.send(rows);
  });
});

app.post('/users', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  db_connection.query(`INSERT INTO user (first_name, last_name) VALUES (${firstName}, ${lastName})`, (err) => {
    if (err) res.send(`there was a mysql error! here it is: ${err}`);
    res.send('success!');
  });
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`app listening on ${port}`));

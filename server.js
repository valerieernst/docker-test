'use strict';
const express    = require('express');
const db_connection = require('./db_connection.js');
const db_seed = require('./db_seed.js');

const app = express();

db_seed();

db_connection.connect(function(err){
  if(err) {console.log('error with mysql db!', err);}
  console.log('mysql db connected!');
});

app.get('/', (req, res) => {
  res.send('this is a test api!');
});

app.get('/users',(req,res) => {
  db_connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
  if (err) res.send(`there was a mysql error! here it is: ${err}`);
  res.send(rows);
  });
});

app.post('users', (req, res) => {

});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`app listening on ${port}`));

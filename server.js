'use strict';
const express    = require("express");
const db_connection = require('./db_connection.js')

const app = express();

db_connection.connect(function(err){
  if(err) throw err;
  console.log('mysql db connected!');
});

app.get("/",function(req,res){
  db_connection.query('SELECT * from Users LIMIT 2', function(err, rows, fields) {
  if (err) throw err;
  res.send(rows);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`app listening on ${port}`));

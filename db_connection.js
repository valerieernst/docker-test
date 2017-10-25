const mysql      = require('mysql');

const host = process.env.HOST || 'localhost';
const user = process.env.DBUSER || 'root';
const password = process.env.DBPASSWORD || '';
const database = process.env.DATABASE || 'test';

const connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password,
  database : database
});

module.exports = connection;

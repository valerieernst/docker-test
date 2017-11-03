const mysql      = require('mysql');

const host = process.env.MYSQL_HOST || 'dockertest_mysql_1';
const user = process.env.DBUSER || 'root';
const password = process.env.DBPASSWORD || 'root';
const port = process.env.DBPORT || 3306;

const connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password,
  port: port
});

module.exports = connection;

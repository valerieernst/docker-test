const db = require('./db_connection.js');

// stand in for seeding data until i find more sustainable solution
module.exports = () => {

  db.connect(function(err){
    if(err) {console.log('error with mysql db!', err);}
    console.log('mysql db connected!');
  });

  db.query('DROP DATABASE test');
  db.query('CREATE DATABASE test', (err) => { if(err) console.error(err); });
  db.query('USE test', (err) => {if (err) console.error(err); });
  db.query('CREATE TABLE user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(20), last_name VARCHAR(20))', (err) => {if (err) console.error(err); });
  db.query('INSERT INTO user (first_name, last_name) VALUES("test", "testy")', (err) => {if (err) console.error(err); });

}

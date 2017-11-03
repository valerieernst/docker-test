// stand in for seeding data until i find more sustainable solution
module.exports = (db) => {
  db.query('CREATE DATABASE IF NOT EXISTS test');
  db.query('USE test', (err) => {if (err) console.error(err); });
  db.query('CREATE TABLE IF NOT EXISTS user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(20), last_name VARCHAR(20))', (err) => {if (err) console.error(err); });
}

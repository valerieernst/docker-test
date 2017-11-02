// stand in for seeding data until i find more sustainable solution
module.exports = (db) => {
  db.query('DROP DATABASE test');
  db.query('CREATE DATABASE test', (err) => { if(err) console.error(err); });
  db.query('USE test', (err) => {if (err) console.error(err); });
  db.query('CREATE TABLE user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(20), last_name VARCHAR(20))', (err) => {if (err) console.error(err); });
}

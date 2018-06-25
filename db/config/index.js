// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
// const db = new Sequelize('sidebar', 'biosync', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// })
//
// db.authenticate()
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch(err => console.log('failed to connect to db ', err));
//
// module.exports = {
//   db: db,
//   Op: Op
// };


// Without ORM
const { Client } = require('pg');
const client = new Client({
  user: 'biosync',
  host: 'localhost',
  database: 'sidebar',
  password: ''
});

client.connect(err => {
  if (err) {
    console.log('failed to connect to db ', err);
  } else {
  console.log('connected to database');
  }
});

module.exports = { client };

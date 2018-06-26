/******************************************************************************/
/* Sequelize ******************************************************************/
/******************************************************************************/
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

/******************************************************************************/
/* PostgeSQL ******************************************************************/
/******************************************************************************/
// const { Client } = require('pg');
// const client = new Client({
//   user: 'biosync',
//   host: 'localhost',
//   database: 'sidebar',
//   password: ''
// });
//
// client.connect(err => {
//   if (err) {
//     console.log('failed to connect to db ', err);
//   } else {
//   console.log('connected to database');
//   }
// });
//
// module.exports = { client };

/******************************************************************************/
/* MongoDB ********************************************************************/
/******************************************************************************/
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', function(err, client) {
  if (err) {
    console.log('Failed to connect to db ', err);
  }

  const db = client.db('sidebar');

  /* Create collection ********************************************************/
  db.createCollection('details', function(err, data) {
    if (err) {
      console.log('Failed to create details collection ', err);
    }
    console.log('Created details collection');
  });

  /* Insert entry *************************************************************/
  const detailsEntry = { today: '', price_range: '$100-150', health_score: 'A'}

  db.collection('details').insertOne(detailsEntry, function(err, data) {
    if (err) {
      console.log('Failed to insert to details collection ', err);
    }
    console.log('Document inserted');
  });

  /* Find entry ***************************************************************/
  db.collection('details').findOne({}, function(err, data) {
    if (err) {
      console.log('Failed to find one ', err);
    }
    console.log('Data fetched from details collection:\n ', data);
  });
});

module.exports = { MongoClient };

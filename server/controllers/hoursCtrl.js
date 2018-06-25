const { client } = require('../../db/config');
// const { Hour } = require('../../db/models');

const hoursCtrl = {
  get: (req, res) => {
    client.query(`SELECT * FROM hour WHERE id = $1`, [req.query.id], (err, data) => {
      if (err) {
        console.log('Error getting hours ', err);
        res.status(404).send(err);
      }
      res.status(200).send(data);
    });
  },
  post: (req, res) => {
    client.query(
      'INSERT INTO hour(rid, mon, tue, wed, thu, fri, sat, sun) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
      [req.body.rid, req.body.mon, req.body.tue, req.body.wed, req.body.thu, req.body.fri, req.body.sat, req.body.sun],
      (err, data) => {
        if(err) {
          console.log('error inserting to hours table ', err);
          res.status(404).send(err);
        }
        console.log('added to hours table');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {

  },
  delete: (req, res) => {

  }
}

module.exports.hoursCtrl = hoursCtrl;

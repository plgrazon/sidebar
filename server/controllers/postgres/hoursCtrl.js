const { client } = require('../../../db/config');

const hoursCtrl = {
  get: (req, res) => {
    client.query(`SELECT * FROM hour WHERE id = $1`, [req.query.id], (err, data) => {
      if (err) {
        console.log('Error getting hours ', err);
        res.status(404).send('Error getting hours');
      }
      // console.log('Got row from hours ');
      res.status(200).send(data);
    });
  },
  post: (req, res) => {
    client.query(
      'INSERT INTO hour(mon, tue, wed, thu, fri, sat, sun) VALUES($1, $2, $3, $4, $5, $6, $7)',
      [req.body.mon, req.body.tue, req.body.wed, req.body.thu, req.body.fri, req.body.sat, req.body.sun],
      (err, data) => {
        if (err) {
          console.log('Error inserting row to hours ', err);
          res.status(404).send('Error getting hours');
        }
        // console.log('Added row to hours ');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {
    client.query(
      `SELECT * FROM hour WHERE id = $1`, [req.query.id], (err, data) => {
        if (err) {
          console.log('Error finding row to update in details ', err);
          res.status(404).send('Error getting hours');
        }
        client.query(
          'UPDATE hour SET mon = $2, tue = $3, wed = $4, thu = $5, fri = $6, sat = $7, sun = $8 WHERE id = $1',
          [req.query.id, req.query.mon, req.query.tue, req.query.wed, req.query.thu, req.query.fri, req.query.sat, req.query.sun],
          (err, data) => {
            if (err) {
              console.log('Error updating row in hours ', err);
              res.status(404).send('Error getting hours');
            }
            // console.log('Updated row in hour');
            res.status(200).send(data);
          }
        );
      }
    );
  },
  delete: (req, res) => {
    client.query('DELETE FROM hour WHERE id = $1', [req.query.id], (err, data) => {
      if (err) {
        console.log('Error deleting row in hours ', err);
        res.status(404).send('Error getting hours');
      }
      console.log('Deleted row in hours');
      res.status(204).send(data);
    });
  }
}

module.exports.hoursCtrl = hoursCtrl;

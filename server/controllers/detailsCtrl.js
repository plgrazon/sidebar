const { client } = require('../../db/config');

const detailsCtrl = {
  get: (req, res) => {
    client.query(`SELECT * FROM detail WHERE id = $1`, [req.query.rid], (err, data) => {
      if (err) {
        console.log('Error getting details ', err);
        res.status(404).send(err);
      }
      console.log('Got row from details');
      res.status(200).send(data);
    });
  },
  post: (req, res) => {
    client.query(
      'INSERT INTO detail(today, price_range, health_score) VALUES($1, $2, $3)',
      [req.body.today, req.body.price_range, req.body.health_score],
      (err, data) => {
        if (err) {
          console.log('Error inserting row to details ', err);
          res.status(404).send(err);
        }
        console.log('Added row to details');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {
    client.query(`SELECT * FROM detail WHERE id = $1`, [req.query.rid], (err, data) => {
      if (err) {
        console.log('Error finding row to update in details ', err);
        res.status(404).send(err);
      }
      client.query(
        `UPDATE detail SET price_range = $2, health_score = $3 WHERE id = $1`,
        [req.query.rid, req.query.price_range, req.query.health_score],
        (err, data) => {
          if (err) {
            console.log('Error updating row in details ', err);
            res.status(404).send(err);
          }
          console.log('Updated row in details');
          res.status(200).send(data);
        }
      );
    });
  },
  delete: (req, res) => {
    client.query('DELETE FROM detail WHERE id = $1', [req.query.rid], (err, data) => {
      if (err) {
        console.log('Error deleting row in details ', err);
        res.status(404).send(err);
      }
      console.log('Deleted row in details');
      res.status(204).send(data);
    });
  }
}

module.exports.detailsCtrl = detailsCtrl;

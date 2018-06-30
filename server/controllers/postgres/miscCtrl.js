const { client } = require('../../../db/config');
// const { Misc } = require('../../db/models');

const miscCtrl = {
  get: (req, res) => {
    client.query('SELECT * FROM misc where id = $1', [req.query.id], (err, data) => {
      if (err) {
        console.log('Error getting misc ', err);
        res.status(404).send('Error getting misc');
      }
      // console.log('Got row from misc');
      res.status(200).send(data);
    });
  },
  post: (req, res) => {
    console.log('what is ', req);
    client.query(
      'INSERT INTO misc(takes_reservations, takezout, accepts_credit_cards, accepts_apple_pay, ' +
      'good_for, parking, bike_parking, wheelchair_accessible, good_for_kids, good_for_groups, ' +
      'dogs_allowed, attire, ambience, noise_level, alcohol, outdoor_seating, wifi, ' +
      'has_tv, caters, gender_neutral_restrooms, smoking) ' +
      'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)',
      [
        req.body.takes_reservations,
        req.body.takezout,
        req.body.accepts_credit_cards,
        req.body.accepts_apple_pay,
        req.body.good_for,
        req.body.parking,
        req.body.bike_parking,
        req.body.wheelchair_accessible,
        req.body.good_for_kids,
        req.body.good_for_groups,
        req.body.dogs_allowed,
        req.body.attire,
        req.body.ambience,
        req.body.noise_level,
        req.body.alcohol,
        req.body.outdoor_seating,
        req.body.wifi,
        req.body.has_tv,
        req.body.caters,
        req.body.gender_neutral_restrooms,
        req.body.smoking
      ],
      (err, data) => {
        if(err) {
          console.log('Error inserting row to misc ', err);
          res.status(404).send('Error getting misc');
        }
        // console.log('Added row to misc');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {
    client.query(
      'SELECT * FROM misc where id = $1', [req.query.id], (err, data) => {
        if (err) {
          console.log('Error finding row to update in misc ', err);
          res.status(404).send('Error getting misc');
        }
        client.query(
          'UPDATE misc SET takes_reservations = $2, takezout = $3, accepts_credit_cards = $4, accepts_apple_pay = $5, ' +
          'good_for = $6, parking = $7, bike_parking = $8, wheelchair_accessible = $9, good_for_kids = $10, good_for_groups = $11, ' +
          'dogs_allowed = $12, attire = $13, ambience = $14, noise_level = $15, alcohol = $16, outdoor_seating = $17, wifi = $18, ' +
          'has_tv = $19, caters = $20, gender_neutral_restrooms = $21, smoking = $22 ' +
          'WHERE id = $1',
          [
            req.query.id,
            req.query.takes_reservations,
            req.query.takezout,
            req.query.accepts_credit_cards,
            req.query.accepts_apple_pay,
            req.query.good_for,
            req.query.parking,
            req.query.bike_parking,
            req.query.wheelchair_accessible,
            req.query.good_for_kids,
            req.query.good_for_groups,
            req.query.dogs_allowed,
            req.query.attire,
            req.query.ambience,
            req.query.noise_level,
            req.query.alcohol,
            req.query.outdoor_seating,
            req.query.wifi,
            req.query.has_tv,
            req.query.caters,
            req.query.gender_neutral_restrooms,
            req.query.smoking
          ],
          (err, data) => {
            if (err) {
              console.log('Error updating row in misc ', err);
              res.status(404).send('Error getting misc');
            }
            // console.log('Updated row in misc');
            res.status(200).send(data);
          }
        );
      }
    );
  },
  delete: (req, res) => {
    client.query('DELETE FROM misc WHERE id = $1', [req.query.id], (err, data) => {
      if (err) {
        console.log('Error deleteing row in misc ', err);
        res.status(404).send('Error getting misc');
      }
      // console.log('Deleted row in misc');
      res.status(204).send(data);
    });
  }
}

module.exports.miscCtrl = miscCtrl;

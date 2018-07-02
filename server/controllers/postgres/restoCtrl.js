const { client } = require('../../../db/config');

const restoCtrl = {
  get: (req, res) => {
    client.query('SELECT * FROM restodetails WHERE id = $1', [req.query.id], (err, data) => {
        if (err) {
          console.log('Error getting restaurant ', err);
          res.status(404).send(err);
        }
        // console.log('Got restaurant');
        res.status(200).send(data);
      }
    );
  },
  post: (req, res) => {
    client.query(
      'INSERT INTO restodetails(' +
      'today, price_range, health_score, mon, tue, wed, thu, fri, sat, sun, takes_reservations, ' +
      'takezout, accepts_credit_cards, accepts_apple_pay, good_for, parking, bike_parking, ' +
      'wheelchair_accessible, good_for_kids, good_for_groups, dogs_allowed, attire, ambience, ' +
      'noise_level, alcohol, outdoor_seating, wifi, has_tv, caters, gender_neutral_restrooms, smoking' +
      ') VALUES(' +
      '$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,' +
      '$17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31' +
      ')',
      [
        req.body.today,
        req.body.price_range,
        req.body.health_score,
        req.body.mon,
        req.body.tue,
        req.body.wed,
        req.body.thu,
        req.body.fri,
        req.body.sat,
        req.body.sun,
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
        if (err) {
          console.log('Error posting restaurant ', err);
          res.status(404).send(err);
        }
        // console.log('Added restaurant');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {
    client.query(`SELECT * FROM restodetails WHERE id = $1`, [req.query.id], (err, data) => {
      if (err) {
        console.log('Error finding restaurant ', err);
        res.status(404).send('Error getting details');
      }
      client.query(
        `UPDATE restodetails SET today = $2, price_range = $3, health_score = $4, mon = $5, tue = $6, wed = $7, thu = $8, fri = $9, sat = $10, sun = $11, takes_reservations = $12, ` +
        `takezout = $13, accepts_credit_cards = $14, accepts_apple_pay = $15, good_for = $16, parking = $17, bike_parking = $18, ` +
        `wheelchair_accessible = $19, good_for_kids = $20, good_for_groups = $21, dogs_allowed = $22, attire = $23, ambience = $24, ` +
        `noise_level = $25, alcohol = $26, outdoor_seating = $27, wifi = $28, has_tv = $29, caters = $30, gender_neutral_restrooms = $31, smoking = $32` +
        `WHERE id = $1`,
        [
          req.query.id,
          req.body.today,
          req.body.price_range,
          req.body.health_score,
          req.body.mon,
          req.body.tue,
          req.body.wed,
          req.body.thu,
          req.body.fri,
          req.body.sat,
          req.body.sun,
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
          if (err) {
            console.log('Error updating restaurant ', err);
            res.status(404).send(err);
          }
          // console.log('Updated restaurant');
          res.status(200).send(data);
        }
      );
    });
  },
  delete: (req, res) => {
    client.query('DELETE FROM restodetails WHERE id = $1', [req.query.id], (err, data) => {
      if (err) {
        console.log('Error deleting restaurant ', err);
        res.status(404).send(err);
      }
      // console.log('Deleted row in details');
      res.status(204).send(data);
    });
  }
}

module.exports.restoCtrl = restoCtrl;

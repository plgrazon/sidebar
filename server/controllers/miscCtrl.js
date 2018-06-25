const { client } = require('../../db/config');
// const { Misc } = require('../../db/models');

const miscCtrl = {
  get: (req, res) => {
    client.query('SELECT * FROM misc where id = $1', [req.query.id], (err, data) => {
      if (err) {
        console.log('Error getting misc ', err);
        res.status(404).send(err);
      }
      res.status(200).send(data);
    });
    // Misc.findAll({ where: {
    //   rid: req.query.rid
    // }})
    //   .then(data => {
    //     res.status(200).send(data);
    //   })
    //   .catch(err => {
    //     console.log('failed get misc ', err);
    //     res.status(404).send(err);
    //   })
  },
  post: (req, res) => {
    client.query(
      'INSERT INTO misc(rid, takes_reservations, takezout, accepts_credit_cards, accepts_apple_pay, ' +
      'good_for, parking, bike_parking, wheelchair_accessible, good_for_kids, good_for_groups, ' +
      'dogs_allowed, attire, ambience, noise_level, alcohol, outdoor_seating, wifi, ' +
      'has_tv, caters, gender_neutral_restrooms, smoking) ' +
      'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
      [
        req.body.rid,
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
          console.log('error inserting to misc table ', err);
          res.status(404).send(err);
        }
        console.log('added to misc table');
        res.status(201).send(data);
      }
    );
  },
  put: (req, res) => {

  },
  delete: (req, res) => {

  }
}

module.exports.miscCtrl = miscCtrl;

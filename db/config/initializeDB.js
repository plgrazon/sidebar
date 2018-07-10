const { client } = require('./index.js');

/* Details ********************************************************************/
  // console.log('begin copying details: ', new Date());
  // client.query(`COPY detail(today, price_range, health_score) FROM '/Users/biosync/Desktop/sidebar/dataGenerator_postgres/details.csv' DELIMITER ',' CSV`)
  //   .then(() => {
  //     console.log('close copying details: ', new Date());
  //   })
  //   .catch(err => {
  //     console.log('error copying details ', err);
  //   });
/* Details ********************************************************************/
/* Hours **********************************************************************/
  // console.log('begin copying hours: ', new Date());
  // client.query(`COPY hour(mon, tue, wed, thu, fri, sat, sun) FROM '/Users/biosync/Desktop/sidebar/dataGenerator_postgres/hours.csv' DELIMITER ',' CSV`)
  //   .then(() => {
  //     console.log('close copying hours: ', new Date());
  //   })
  //   .catch(err => {
  //     console.log('error copying hours ', err);
  //   });
/* Hours **********************************************************************/
/* Misc ***********************************************************************/
  // console.log('begin copying misc: ', new Date());
  // client.query(`COPY misc(takes_reservations, takezout, accepts_credit_cards, accepts_apple_pay, good_for, parking, bike_parking, wheelchair_accessible, good_for_kids, good_for_groups, dogs_allowed, attire, ambience, noise_level, alcohol, outdoor_seating, wifi, has_tv, caters, gender_neutral_restrooms, smoking) FROM '/Users/biosync/Desktop/sidebar/dataGenerator_postgres/misc.csv' DELIMITER ',' CSV`)
  //   .then(() => {
  //     console.log('close copying misc: ', new Date());
  //   })
  //   .catch(err => {
  //     console.log('error copying misc ', err);
  //   });
/* Misc ***********************************************************************/

COPY hour(mon, tue, wed, thu, fri, sat, sun) FROM '/home/hours.csv' DELIMITER ',' CSV;
COPY misc(takes_reservations, takezout, accepts_credit_cards, accepts_apple_pay, good_for, parking, bike_parking, wheelchair_accessible, good_for_kids, good_for_groups, dogs_allowed, attire, ambience, noise_level, alcohol, outdoor_seating, wifi, has_tv, caters, gender_neutral_restrooms, smoking) FROM '/home/misc.csv' DELIMITER ',' CSV

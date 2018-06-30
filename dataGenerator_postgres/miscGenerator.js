const fs = require('fs');

const miscGen = () => {
  const genAns = ['Yes', 'No', 'Maybe'];
  const data = ['takes_reservations', 'takezout', 'accepts_credit_cards', 'accepts_apple_pay', 'good_for', 'parking', 'bike_parking', 'wheelchair_accessible', 'good_for_kids', 'good_for_groups', 'dogs_allowed', 'attire', 'ambience', 'noise_level', 'alcohol', 'outdoor_seating', 'wifi', 'has_tv', 'caters', 'gender_neutral_restrooms', 'smoking'];
  const misc = [];

  data.map(item => {
    let randomNum = Math.floor(Math.random() * 3);
    misc.push(genAns[randomNum]);
  });

  return misc.join(',');
};

let writeStream = fs.createWriteStream('miscTest.csv', {flags: 'a'});

const writeTenMillionTimes = (limit, callback) => {
  console.log('start: ', new Date());
  const write = () => {
    console.time('start: ', new Date());
    let drained = true;
    do {
      limit--;
      if (limit === 0) {
        writeStream.write(miscGen() + '\n', callback);
      } else {
        drained = writeStream.write(miscGen() + '\n');
      }
    } while (limit > 0 && drained) {
      if (limit > 0) {
        writeStream.once('drain', write);
      }
    }
  }
  write();
};

writeTenMillionTimes(10000000, (err) => {
  if (err) console.log('error in details generator ', err);
  writeStream.end();
  console.log('closed: ', new Date());
});

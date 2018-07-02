const fs = require('fs');

const detailsGen = () => {
  const price = () => {
    return Math.floor(Math.random() * 60)
  }
  const randomI = (detail) => {
    return Math.floor(Math.random() * detail.length);
  }

  const today = ''
  const price1 = price()
  const price2 = Math.floor(price1 * (Math.random() + 1))
  const price_range = '$' + price1 + '-' + price2
  const health = ['A', 'B', 'C', 'D', 'E', 'F']

  const details = {today, price_range, health_score: health[randomI(health)]}

  return Object.values(details);
};

const hoursGen = () => {
  const result = [];
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  const hours = [
    '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30',
    '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
    '11:00', '11:30', '12:00'
  ];

  for (var i = 0; i < days.length; i++) {
    let randomNum = Math.floor(Math.random() * hours.length);
    let day = days[i];
    result.push(`${hours[randomNum]} am - ${hours[(randomNum + 8) % hours.length]} pm`);
  }
  return result;
}

const miscGen = () => {
  const genAns = ['Yes', 'No', 'Maybe'];
  const data = ['takes_reservations', 'takezout', 'accepts_credit_cards', 'accepts_apple_pay', 'good_for', 'parking', 'bike_parking', 'wheelchair_accessible', 'good_for_kids', 'good_for_groups', 'dogs_allowed', 'attire', 'ambience', 'noise_level', 'alcohol', 'outdoor_seating', 'wifi', 'has_tv', 'caters', 'gender_neutral_restrooms', 'smoking'];
  const misc = [];

  data.map(item => {
    let randomNum = Math.floor(Math.random() * 3);
    misc.push(genAns[randomNum]);
  });

  return misc;
};

let writeStream = fs.createWriteStream('restodetailstest.csv', {flags: 'a'});
const writeTenMillionTimes = (limit, callback) => {
  console.log('start: ', new Date());

  const write = () => {
    let drained = true;
    do {
      limit--;
      if (limit === 0) {
        writeStream.write([...detailsGen(), ...hoursGen(), ...miscGen()].join(',') + '\n', callback);
      } else {
        drained = writeStream.write([...detailsGen(), ...hoursGen(), ...miscGen()].join(',') + '\n');
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

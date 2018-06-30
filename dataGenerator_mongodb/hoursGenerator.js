const fs = require('fs');

let rid = 1;

const hoursGen = () => {
  const result = [];
  result.push(rid);
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  const hours = [
    '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30',
    '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
    '11:00', '11:30', '12:00'
  ];

  for (var i = 0; i < days.length; i++) {
    let randomNum = Math.floor(Math.random() * hours.length);
    let day = days[i];

    result.push(`${hours[randomNum]} am - ${hours[(randomNum + 8) % hours.length]} pm`)
  }
  rid++;
  return (result);
}

let writeStream = fs.createWriteStream('hours.csv', {flags: 'a'});

const writeTenMillionTimes = (limit, callback) => {
  console.log('start: ', new Date());
  const write = () => {
    let drained = true;
    do {
      limit--;
      if (limit === 0) {
        writeStream.write(hoursGen() + '\n', callback);
      } else {
        drained = writeStream.write(hoursGen() + '\n');
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

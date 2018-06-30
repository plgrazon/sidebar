const fs = require('fs');

let rid = 1;

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

  const details = {rid, today, price_range, health_score: health[randomI(health)]}
  rid++;
  return Object.values(details).join(',');
};

let writeStream = fs.createWriteStream('details.csv', {flags: 'a'});

const writeTenMillionTimes = (limit, callback) => {
  console.log('start: ', new Date());

  const write = () => {
    let drained = true;
    do {
      limit--;
      if (limit === 0) {
        writeStream.write(detailsGen() + '\n', callback);
      } else {
        drained = writeStream.write(detailsGen() + '\n');
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

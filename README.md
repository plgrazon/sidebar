Sidebar Component for Welp (All Hail Lord Voldemort)



bundle.js = https://s3-us-west-1.amazonaws.com/hr22welp-sidebar/bundle.js



may need to:

turn off db

set db sync force: true
uncomment commented out lines in addRestaurants() in ./client/components/Home.jsx

[PostgeSQL:]

to create the db:
psql <username> -a -f <schema.name>

to generate seeds:
node dataGenerator

to brute force seeding the table:
psql -U <username> -d sidebar -a -f <dataGenerator/details.sql>

to brute force data generation:
node --max_old_space_size=4096 detailsGenerator.js

to seed:
npm run initialize:db

to analyze:
EXPLAIN ANALYZE SELECT * FROM <table>

[MongodDB:]
to start:
npm install mongodb
sudo mongod
npm start

to connect:
mongo --host 127.0.0.1:27017

to seed using csv/json file:
mongoimport -d <database name> -c <table name> --file <filename.csv>

mongoimport --db leavereviews --collection collectionName --type tsv --columnsHaveTypes --fields "_id.int32(),date.string(),counts.string(),rating.int32(),user_id.int32() restaurant_id.int32(),description.string()" --file review.tsv

mongoimport -d sidebar -c test --file details.csv --type csv --columnsHaveTypes -f "today.string(),price_range.string(),health_score.string()"

to make queries faster:
db.collection.createIndex( { <key>: 1 } );

mongoimport -d sidebar -c details --file details.csv --type csv --columnsHaveTypes -f "rid.int32(),today.string(),price_range.string(),health_score.string()"

mongoimport -d sidebar -c hours --file hours.csv --type csv --columnsHaveTypes -f "rid.int32(),mon.string(),tue.string(),wed.string(),thu.string(),fri.string(),sat.string(),sun.string()"

mongoimport -d sidebar -c misc --file misc.csv --type csv --columnsHaveTypes -f "rid.int32(),takes_reservations.string(),takezout.string(),accepts_credit_cards.string(),accepts_apple_pay.string(),good_for.string(),parking.string(),bike_parking.string(),wheelchair_accessible.string(),good_for_kids.string(),good_for_groups.string(),dogs_allowed.string(),attire.string(),ambience.string(),noise_level.string(),alcohol.string(),outdoor_seating.string(),wifi.string(),has_tv.string(),caters.string(),gender_neutral_restrooms.string(),smoking.string()"

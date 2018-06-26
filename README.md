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

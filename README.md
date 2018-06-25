Sidebar Component for Welp (All Hail Lord Voldemort)



bundle.js = https://s3-us-west-1.amazonaws.com/hr22welp-sidebar/bundle.js



may need to:

turn off db

set db sync force: true
uncomment commented out lines in addRestaurants() in ./client/components/Home.jsx

to create the db:
psql <username> -a -f <schema.name>

to seed the table:
psql -U <username> -d sidebar -a -f <dataGenerator/details.sql>
node --max_old_space_size=4096 detailsGenerator.js

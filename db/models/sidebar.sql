DROP DATABASE IF EXISTS sidebar;
CREATE DATABASE sidebar;

\c sidebar;

CREATE TABLE Detail (
  ID SERIAL PRIMARY KEY,
  today VARCHAR,
  price_range VARCHAR,
  health_score VARCHAR
);

CREATE TABLE Hour (
  ID SERIAL PRIMARY KEY,
  mon VARCHAR,
  tue VARCHAR,
  wed VARCHAR,
  thu VARCHAR,
  fri VARCHAR,
  sat VARCHAR,
  sun VARCHAR
);

CREATE TABLE Misc (
  ID SERIAL PRIMARY KEY,
  takes_reservations VARCHAR,
  takezout VARCHAR,
  accepts_credit_cards VARCHAR,
  accepts_apple_pay VARCHAR,
  good_for VARCHAR,
  parking VARCHAR,
  bike_parking VARCHAR,
  wheelchair_accessible VARCHAR,
  good_for_kids VARCHAR,
  good_for_groups VARCHAR,
  dogs_allowed VARCHAR,
  attire VARCHAR,
  ambience VARCHAR,
  noise_level VARCHAR,
  alcohol VARCHAR,
  outdoor_seating VARCHAR,
  wifi VARCHAR,
  has_tv VARCHAR,
  caters VARCHAR,
  gender_neutral_restrooms VARCHAR,
  smoking VARCHAR
);

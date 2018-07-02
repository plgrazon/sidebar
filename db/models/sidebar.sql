DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;

\c restaurant;

CREATE TABLE restoDetails (
  ID SERIAL PRIMARY KEY,
  today VARCHAR,
  price_range VARCHAR,
  health_score VARCHAR,
  mon VARCHAR,
  tue VARCHAR,
  wed VARCHAR,
  thu VARCHAR,
  fri VARCHAR,
  sat VARCHAR,
  sun VARCHAR,
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

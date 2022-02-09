DROP DATABASE IF EXISTS travel_dev;
CREATE DATABASE travel_dev;

\c travel_dev;

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255),
    average_temp NUMERIC,
    has_nearby_beaches BOOLEAN,
    public_transportation_quality VARCHAR(255)
);
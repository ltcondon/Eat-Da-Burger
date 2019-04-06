### Schema

CREATE DATABASE faceless_db;
USE faceless_db;

CREATE TABLE people
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	alive BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

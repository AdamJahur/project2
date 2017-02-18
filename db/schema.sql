CREATE DATABASE Military_Connect;
USE Military_Connect;

CREATE TABLE admins
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	email varchar(50) NULL,
	username varchar(25) NULL,
	password char(20) NULL,
	PRIMARY KEY (id)
); 

CREATE TABLE employers
(
	id int NOT NULL AUTO_INCREMENT,
	company_name varchar(100) NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	website varchar(100) NULL,
	phone_number varchar(50) NULL,
	email varchar(50) NULL,
	address varchar(150) NULL,
	city varchar(100) NULL,
	state varchar(50) NULL,
	zip varchar(7) NULL,
	username varchar(25) NULL,
	password char(20) NULL,
	logo varchar(255) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE veterans
(
	id int NOT NULL AUTO_INCREMENT,
	photo varchar(255) NULL,
	rank varchar(100) NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	phone_number varchar(50) NULL,
	email varchar(50) NULL,
	address varchar(150) NULL,
	city varchar(100) NULL,
	state varchar(50) NULL,
	zip varchar(7) NULL,
	skills text(400) NULL,
	username varchar(25) NULL,
	password char(20) NULL,
	field varchar(50) NULL,
	bio varchar(255) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE jobs
(
	id int NOT NULL AUTO_INCREMENT,
	job_title varchar(100) NULL,
	job_description text(500) NULL,
	skills text(400) NULL,
	field text(50) NULL,
	company_name varchar(100) NULL,
	employer_id varchar(100) NULL,
	PRIMARY KEY (id)
);


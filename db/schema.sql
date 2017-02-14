CREATE DATABASE Military_Connect;
USE Military_Connect;

CREATE TABLE Admin
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	email varchar(50) NOT NULL,
	bio text(400) NOT NULL,
	username varchar(25) NOT NULL,
	password char(20) NOT NULL,
	PRIMARY KEY (id)
); 

CREATE TABLE Employer_Table
(
	id int NOT NULL AUTO_INCREMENT,
	company_name varchar(100) NOT NULL,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	phone_number varchar(15) NOT NULL,
	email varchar(50) NOT NULL,
	address varchar(150) NOT NULL,
	city varchar(100) NOT NULL,
	state varchar(50) NOT NULL,
	zip varchar(7) NOT NULL,
	username varchar(25) NOT NULL,
	password char(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Veteran_Table
(
	id int NOT NULL AUTO_INCREMENT,
	rank varchar(100) NOT NULL,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	phone_number varchar(10) NOT NULL,
	email varchar(50) NOT NULL,
	address varchar(150) NOT NULL,
	city varchar(100) NOT NULL,
	state varchar(50) NOT NULL,
	zip varchar(7) NOT NULL,
	skills text(400) NOT NULL,
	username varchar(25) NOT NULL,
	password char(20) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Jobs_Table
(
	id int NOT NULL AUTO_INCREMENT,
	job_title varchar(100) NOT NULL,
	job_description text(500) NOT NULL,
	skills text(400) NOT NULL,
	company_name varchar(100) NOT NULL,
	PRIMARY KEY (id)
);


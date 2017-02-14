# project2

Example: Working
CREATE TABLE `military_connect`.`Veternas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rank` VARCHAR(45) NULL,
  `firstName` VARCHAR(45) NULL COMMENT '			',
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `address1` VARCHAR(45) NULL,
  `address2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  `userName` VARCHAR(45) NULL,
  `passWord` VARCHAR(45) NULL,
  `skills` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));



Example: Working
INSERT INTO `military_connect`.`Veternas` (`id`, `rank`, `firstName`, `lastName`, `email`, `phoneNumber`, `gender`, `address1`, `address2`, `city`, `zip`, `userName`, `passWord`, `skills`) VALUES ('1', 'Private', 'John', 'Marcow', 'Jmarcow@example.com', '555-555-5555', 'male', '555 Awesom Ave', 'n/a', 'Orlando', '32811', 'Jmarcow', 'password', 'Farmer');



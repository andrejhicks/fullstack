--  CREATE CONTACTS DB
DROP DATABASE IF EXISTS `contacts`;
CREATE DATABASE IF NOT EXISTS `contacts`;
USE `contacts`;

--  CREATE CONTACTS TABLE
CREATE TABLE `contacts` (
  `firstName` varchar(40) DEFAULT NULL,
  `lastName` varchar(40) DEFAULT NULL,
  `PhoneNum` bigint DEFAULT NULL,
  `emailaddress` varchar(40) DEFAULT NULL,
  `university` varchar(40) DEFAULT NULL,
  `major` varchar(40) DEFAULT NULL
);

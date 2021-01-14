DROP DATABASE IF EXISTS USER;
CREATE DATABASE USER;
USE USER;
CREATE TABLE User_table_register(
id INT NOT NULL  AUTO_INCREMENT,
FisrtName VARCHAR(255) NOT NULL ,
LastName VARCHAR(255) NOT NULL ,
Email VARCHAR(255)NOT NULL ,
Pasword VARCHAR(255)NOT NULL ,
verifypassword VARCHAR(255)NOT NULL ,
PRIMARY KEY (id) 
);

/*  Execute this file from the command line by typing:
 *    mysql -u root  < database-mysql/schema.sql 
 *  to create the database and the tables.*/

-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS udim_dev_db;
CREATE USER IF NOT EXISTS 'udim_dev'@'localhost' IDENTIFIED BY 'udim_dev_pwd';
GRANT ALL PRIVILEGES ON `udim_dev_db`.* TO 'udim_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'udim_dev'@'localhost';
FLUSH PRIVILEGES;

/*
SQLyog Professional v12.09 (64 bit)
MySQL - 5.5.20-log : Database - cs1902
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cs1902` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `cs1902`;

/*Table structure for table `cartlist` */

DROP TABLE IF EXISTS `cartlist`;

CREATE TABLE `cartlist` (
  `c_id` int(100) NOT NULL,
  `p_id` varchar(100) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_price` varchar(10) NOT NULL,
  `p_url` varchar(100) DEFAULT NULL,
  `p_degree` varchar(100) DEFAULT NULL,
  `p_num` varchar(100) DEFAULT NULL,
  `p_total` varchar(100) DEFAULT NULL,
  `u_id` varchar(100) NOT NULL,
  PRIMARY KEY (`c_id`),
  KEY `p_name` (`p_name`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `cartlist` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

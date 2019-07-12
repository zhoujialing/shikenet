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

/*Table structure for table `cartslist` */

DROP TABLE IF EXISTS `cartslist`;

CREATE TABLE `cartslist` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` varchar(10) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_price` varchar(10) NOT NULL,
  `p_url` varchar(200) DEFAULT NULL,
  `p_types` varchar(20) DEFAULT NULL,
  `p_colors` varchar(20) DEFAULT NULL,
  `p_versions` varchar(20) DEFAULT NULL,
  `p_number` varchar(10) DEFAULT NULL,
  `p_total` varchar(10) DEFAULT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`c_id`),
  KEY `p_name` (`p_name`,`p_types`,`p_colors`,`p_versions`),
  KEY `uid` (`uid`),
  CONSTRAINT `cartslist_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `userinfo` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `cartslist` */

insert  into `cartslist`(`c_id`,`p_id`,`p_name`,`p_price`,`p_url`,`p_types`,`p_colors`,`p_versions`,`p_number`,`p_total`,`uid`) values (10,'1003','小米 红米Redmi Note7Pro AI双摄 6GB+128GB 梦幻蓝 全网通4G 双卡双待 水滴屏拍照游戏手机',' 1599.00','./images/RedMi.jpg','移动4g优先','黑色','内存128G','3','1599',2),(11,'1003','小米 红米Redmi Note7Pro AI双摄 6GB+128GB 梦幻蓝 全网通4G 双卡双待 水滴屏拍照游戏手机',' 1599.00','./images/RedMi.jpg','移动4g优先','蓝色','内存128G','5','7995',2);

/*Table structure for table `usefo` */

DROP TABLE IF EXISTS `usefo`;

CREATE TABLE `usefo` (
  `u_id` int(10) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(50) NOT NULL,
  `u_pwd` varchar(100) NOT NULL,
  `u_telphone` varchar(11) DEFAULT NULL,
  `u_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_name` (`u_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `usefo` */

insert  into `usefo`(`u_id`,`u_name`,`u_pwd`,`u_telphone`,`u_email`) values (1,'jia123','123456','12345678901','123@qq.com'),(2,'zhou12345','123456','12345678901','123@qq.com');

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(50) NOT NULL COMMENT '账号',
  `u_pwd` varchar(50) NOT NULL,
  `u_email` varchar(50) DEFAULT NULL,
  `u_telphone` varchar(11) DEFAULT NULL,
  `u_sex` varchar(1) DEFAULT NULL,
  `u_hobby` varchar(250) DEFAULT NULL,
  `u_realyname` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `u_name` (`u_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`u_id`,`u_name`,`u_pwd`,`u_email`,`u_telphone`,`u_sex`,`u_hobby`,`u_realyname`) values (2,'abc123','123','itzan@sina.com','15622889635','男',NULL,'吴彦祖'),(3,'zhou123','123456','itzan@sina.com','12345678901','女','男',''),(7,'zhou1234','123456','itzan@sina.com','12345678901','女','羽毛球','嘿嘿');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

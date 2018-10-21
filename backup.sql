-- MySQL dump 10.13  Distrib 5.5.58, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ani
-- ------------------------------------------------------
-- Server version	5.5.58-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_group_permissi_permission_id_84c5c92e_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permissi_content_type_id_2f476e4b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add animal',7,'add_animal'),(20,'Can change animal',7,'change_animal'),(21,'Can delete animal',7,'delete_animal'),(22,'Can add estado',8,'add_estado'),(23,'Can change estado',8,'change_estado'),(24,'Can delete estado',8,'delete_estado'),(25,'Can add cliente',9,'add_cliente'),(26,'Can change cliente',9,'change_cliente'),(27,'Can delete cliente',9,'delete_cliente'),(28,'Can add categoria',10,'add_categoria'),(29,'Can change categoria',10,'change_categoria'),(30,'Can delete categoria',10,'delete_categoria'),(31,'Can add subcategoria',11,'add_subcategoria'),(32,'Can change subcategoria',11,'change_subcategoria'),(33,'Can delete subcategoria',11,'delete_subcategoria'),(34,'Can add provincia',12,'add_provincia'),(35,'Can change provincia',12,'change_provincia'),(36,'Can delete provincia',12,'delete_provincia'),(37,'Can add photo',13,'add_photo'),(38,'Can change photo',13,'change_photo'),(39,'Can delete photo',13,'delete_photo'),(40,'Can add video',14,'add_video'),(41,'Can change video',14,'change_video'),(42,'Can delete video',14,'delete_video'),(43,'Can add photoproducto',15,'add_photoproducto'),(44,'Can change photoproducto',15,'change_photoproducto'),(45,'Can delete photoproducto',15,'delete_photoproducto'),(46,'Can add videoproducto',16,'add_videoproducto'),(47,'Can change videoproducto',16,'change_videoproducto'),(48,'Can delete videoproducto',16,'delete_videoproducto'),(49,'Can add marca',17,'add_marca'),(50,'Can change marca',17,'change_marca'),(51,'Can delete marca',17,'delete_marca'),(52,'Can add modelo',18,'add_modelo'),(53,'Can change modelo',18,'change_modelo'),(54,'Can delete modelo',18,'delete_modelo'),(55,'Can add tipo',19,'add_tipo'),(56,'Can change tipo',19,'change_tipo'),(57,'Can delete tipo',19,'delete_tipo'),(58,'Can add color',20,'add_color'),(59,'Can change color',20,'change_color'),(60,'Can delete color',20,'delete_color'),(61,'Can add distrito',21,'add_distrito'),(62,'Can change distrito',21,'change_distrito'),(63,'Can delete distrito',21,'delete_distrito'),(64,'Can add auto',22,'add_auto'),(65,'Can change auto',22,'change_auto'),(66,'Can delete auto',22,'delete_auto'),(67,'Can add servicios',23,'add_servicios'),(68,'Can change servicios',23,'change_servicios'),(69,'Can delete servicios',23,'delete_servicios'),(70,'Can add empleo',24,'add_empleo'),(71,'Can change empleo',24,'change_empleo'),(72,'Can delete empleo',24,'delete_empleo'),(73,'Can add cursos',25,'add_cursos'),(74,'Can change cursos',25,'change_cursos'),(75,'Can delete cursos',25,'delete_cursos'),(76,'Can add producto',26,'add_producto'),(77,'Can change producto',26,'change_producto'),(78,'Can delete producto',26,'delete_producto'),(79,'Can add chat',27,'add_chat'),(80,'Can change chat',27,'change_chat'),(81,'Can delete chat',27,'delete_chat'),(82,'Can add favoritoproducto',28,'add_favoritoproducto'),(83,'Can change favoritoproducto',28,'change_favoritoproducto'),(84,'Can delete favoritoproducto',28,'delete_favoritoproducto'),(85,'Can add notificacion',29,'add_notificacion'),(86,'Can change notificacion',29,'change_notificacion'),(87,'Can delete notificacion',29,'delete_notificacion'),(88,'Can add marketing',30,'add_marketing'),(89,'Can change marketing',30,'change_marketing'),(90,'Can delete marketing',30,'delete_marketing'),(91,'Can add Scrap',31,'add_scrap'),(92,'Can change Scrap',31,'change_scrap'),(93,'Can delete Scrap',31,'delete_scrap'),(94,'Can add datodepagina',32,'add_datodepagina'),(95,'Can change datodepagina',32,'change_datodepagina'),(96,'Can delete datodepagina',32,'delete_datodepagina');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$24000$F6FjyW2L0puH$zU+7KNXd2ZFcUYHO9zo2UUWeAokUNmPlLSgL+SKBjzE=','2018-07-06 16:56:44',1,'root','','','',1,1,'2018-04-21 19:35:04'),(2,'pbkdf2_sha256$24000$f6qUku7M8inA$eM5Gq7JhOWnpmNDgKhLEKICBdusojuZmHzQ+S3OObBI=','2018-04-22 17:26:27',0,'10212486937426509','Andy Jo','','10212486937426509',0,1,'2018-04-22 15:53:26'),(3,'pbkdf2_sha256$24000$gMlcExiOGySg$4wAuTJJP5Uo/ZFNnkb78i5NgtgPJUt8p8DKtGuhVfD4=','2018-04-22 19:33:14',0,'1169329119861370','Joel Rosas','','1169329119861370',0,1,'2018-04-22 15:58:03'),(4,'pbkdf2_sha256$24000$A82jA5yLBXpi$dPk9axASR5j3A8Gw/2aZ1cWRWy3/40irjNCOKxeJRLs=','2018-04-22 17:31:26',0,'2090939481195767','Pool Rosas','','2090939481195767',0,1,'2018-04-22 17:28:03'),(5,'pbkdf2_sha256$24000$JfbXuAm3qMed$kiYd6U7BZh4dpCQ/Pw7Ai5di9m3ztZGhvy+H0HDUttQ=','2018-04-22 19:31:31',0,'355307028315417','Andres Rosas','','355307028315417',0,1,'2018-04-22 17:49:47');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `auth_user_user_perm_permission_id_1fbb5f2c_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auto`
--

DROP TABLE IF EXISTS `auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` int(11),
  `modelo` int(11),
  `tipo` int(11),
  PRIMARY KEY (`id`),
  KEY `auto_a9412f8d` (`marca`),
  KEY `auto_72aaecac` (`modelo`),
  KEY `auto_401281b0` (`tipo`),
  CONSTRAINT `auto_marca_936618bd_fk_marca_id` FOREIGN KEY (`marca`) REFERENCES `marca` (`id`),
  CONSTRAINT `auto_modelo_fbd7a742_fk_modelo_id` FOREIGN KEY (`modelo`) REFERENCES `modelo` (`id`),
  CONSTRAINT `auto_tipo_8199551b_fk_tipo_id` FOREIGN KEY (`tipo`) REFERENCES `tipo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto`
--

LOCK TABLES `auto` WRITE;
/*!40000 ALTER TABLE `auto` DISABLE KEYS */;
/*!40000 ALTER TABLE `auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `icon` varchar(1000) DEFAULT NULL,
  `descripcion` longtext,
  `imagen` varchar(100) DEFAULT NULL,
  `color` varchar(1000) DEFAULT NULL,
  `relink` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Vestidos Largos','','','static/evening-dresses-banner.jpg','#6c5ce7','Vestidos_Largos'),(2,'Ultima Coleccion','','Descripcion ultima colleccion','','#fd79a8','Ultima_Coleccion'),(3,'Vestidos cotel','','vestidos de día y de noche para todo tipo de eventos','','#000','Vestidos_cotel'),(4,'Fiesta',NULL,'',NULL,'','Fiesta');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mensaje` varchar(1000) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `destino` int(11) DEFAULT NULL,
  `producto` int(11),
  `user` int(11),
  PRIMARY KEY (`id`),
  KEY `chat_destino_924ad461_fk_auth_user_id` (`destino`),
  KEY `chat_286e18ee` (`producto`),
  KEY `chat_ee11cbb1` (`user`),
  CONSTRAINT `chat_destino_924ad461_fk_auth_user_id` FOREIGN KEY (`destino`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `chat_producto_2f9a7bbf_fk_producto_id` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`),
  CONSTRAINT `chat_user_080e3788_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(1000) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `nombre` varchar(1000),
  `imagen` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_user_d0118460_fk_auth_user_id` (`user`),
  CONSTRAINT `cliente_user_d0118460_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,NULL,2,NULL,'https://lookaside.facebook.com/platform/profilepic/?asid=10212486937426509&height=50&width=50&ext=1524677368&hash=AeQ_FPcFfWODJHAi'),(2,NULL,3,NULL,'https://lookaside.facebook.com/platform/profilepic/?asid=1169329119861370&height=50&width=50&ext=1524684975&hash=AeSvo6DAYldKCNj1'),(3,NULL,4,NULL,'https://lookaside.facebook.com/platform/profilepic/?asid=2090939481195767&height=50&width=50&ext=1524677667&hash=AeTy79QIy7C3oVS6'),(4,NULL,5,NULL,'https://lookaside.facebook.com/platform/profilepic/?asid=355307028315417&height=50&width=50&ext=1524684873&hash=AeR-A37Ozc78AYLR');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datodepagina`
--

DROP TABLE IF EXISTS `datodepagina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datodepagina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(110) DEFAULT NULL,
  `direccion` varchar(110) DEFAULT NULL,
  `icono` varchar(100) DEFAULT NULL,
  `lema` varchar(110) DEFAULT NULL,
  `telefono` varchar(110) DEFAULT NULL,
  `descripcion_tienda` varchar(110),
  `imagen_tienda` varchar(100),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datodepagina`
--

LOCK TABLES `datodepagina` WRITE;
/*!40000 ALTER TABLE `datodepagina` DISABLE KEYS */;
INSERT INTO `datodepagina` VALUES (1,'Ania','La Torre 234 Gamarra','','Buen vestir','980725698','Esta descripcion es para la tienda','static/CynjVjgWIAELJSm.jpg');
/*!40000 ALTER TABLE `datodepagina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distrito`
--

DROP TABLE IF EXISTS `distrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  `provincia` int(11),
  PRIMARY KEY (`id`),
  KEY `distrito_16a74f32` (`provincia`),
  CONSTRAINT `distrito_provincia_b82c78cf_fk_provincia_id` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distrito`
--

LOCK TABLES `distrito` WRITE;
/*!40000 ALTER TABLE `distrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `distrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin__content_type_id_c4bce8eb_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2018-04-21 19:42:10','1','Fiesta',1,'Added.',10,1),(2,'2018-04-21 19:45:08','1','Titulo para fiesta',1,'Added.',11,1),(3,'2018-04-21 19:54:35','1','Titulo para fiesta',2,'Changed check_imagen and activo.',11,1),(4,'2018-04-21 20:00:56','1','Titulo para fiesta',2,'Changed imagen.',11,1),(5,'2018-04-21 20:01:11','1','Titulo para fiesta',2,'Changed check_imagen.',11,1),(6,'2018-04-21 20:01:34','1','Titulo para fiesta',2,'Changed activo.',11,1),(7,'2018-04-21 20:12:08','1','Titulo para fiesta',2,'Changed imagen.',11,1),(8,'2018-04-21 20:15:00','1','Titulo para fiesta',2,'Changed imagen.',11,1),(9,'2018-04-21 20:20:16','2','Portada Nombre Fiesta 2',1,'Added.',11,1),(10,'2018-04-21 20:22:09','2','Portada Nombre Fiesta 2',2,'Changed imagen.',11,1),(11,'2018-04-21 20:22:49','1','Portada fiesta 1',2,'Changed nombre, subtitulo and descripcion.',11,1),(12,'2018-04-21 20:25:06','2','Portada Nombre Fiesta 2',2,'No fields changed.',11,1),(13,'2018-04-21 20:25:31','2','Portada Fiesta 2',2,'Changed nombre, subtitulo and descripcion.',11,1),(14,'2018-04-21 20:26:00','1','Portada fiesta 1',2,'Changed subtitulo.',11,1),(15,'2018-04-22 04:32:21','2','Ultima Coleccion',1,'Added.',10,1),(16,'2018-04-22 04:32:33','1','Fiesta',2,'Changed icon and descripcion.',10,1),(17,'2018-04-22 04:40:05','2','Ultima Coleccion',2,'Changed color.',10,1),(18,'2018-04-22 05:19:21','3','Ultima Coleccion',1,'Added.',11,1),(19,'2018-04-22 05:51:02','4','Producto Fiesta',1,'Added.',11,1),(20,'2018-04-22 05:51:56','5','Producto Fiesta 2',1,'Added.',11,1),(21,'2018-04-22 05:53:09','6','Fiesta 2',1,'Added.',11,1),(22,'2018-04-22 05:54:33','7','Nombre Fiesta 2',1,'Added.',11,1),(23,'2018-04-22 05:59:45','1','Fiesta',2,'Changed color.',10,1),(24,'2018-04-22 06:00:06','1','Fiesta',2,'Changed color.',10,1),(25,'2018-04-22 06:00:57','1','Fiesta',2,'Changed color.',10,1),(26,'2018-04-22 06:01:52','1','Fiesta',2,'Changed color.',10,1),(27,'2018-04-22 15:00:13','1','Fiesta',2,'Changed color.',10,1),(28,'2018-04-22 18:25:23','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(29,'2018-04-22 18:25:36','6','Fiesta 2',2,'No fields changed.',11,1),(30,'2018-04-22 18:25:40','5','Producto Fiesta 2',2,'No fields changed.',11,1),(31,'2018-04-22 18:25:45','3','Ultima Coleccion',2,'No fields changed.',11,1),(32,'2018-04-22 18:25:49','2','Portada Fiesta 2',2,'No fields changed.',11,1),(33,'2018-04-22 18:28:19','4','Producto Fiesta',2,'No fields changed.',11,1),(34,'2018-04-22 18:28:24','1','Portada fiesta 1',2,'No fields changed.',11,1),(35,'2018-04-22 18:40:02','7','Nombre Fiesta 2',2,'Changed imagen2 and imagen3.',11,1),(36,'2018-04-22 18:46:09','7','Nombre Fiesta 2',2,'Changed imagen3.',11,1),(37,'2018-04-22 18:52:53','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(38,'2018-04-22 18:53:35','7','Nombre Fiesta 2',2,'Changed imagen2 and imagen3.',11,1),(39,'2018-04-22 18:54:36','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(40,'2018-04-22 18:55:08','7','Nombre Fiesta 2',2,'Changed imagen2 and imagen3.',11,1),(41,'2018-04-22 18:55:38','7','Nombre Fiesta 2',2,'Changed imagen2 and imagen3.',11,1),(42,'2018-04-22 18:58:03','7','Nombre Fiesta 2',2,'Changed imagen and imagen2.',11,1),(43,'2018-04-22 18:59:19','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(44,'2018-04-22 19:05:01','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(45,'2018-04-22 19:05:56','7','Nombre Fiesta 2',2,'Changed imagen2.',11,1),(46,'2018-04-22 19:08:14','7','Nombre Fiesta 2',2,'Changed imagen2.',11,1),(47,'2018-04-22 19:09:26','7','Nombre Fiesta 2',2,'Changed imagen2.',11,1),(48,'2018-04-22 19:09:37','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(49,'2018-04-22 19:10:09','7','Nombre Fiesta 2',2,'Changed imagen2.',11,1),(51,'2018-04-22 19:11:27','8','Fiesta 3',1,'Added.',11,1),(52,'2018-04-22 19:13:12','8','Fiesta 3',2,'No fields changed.',11,1),(53,'2018-04-22 19:14:04','8','Fiesta 3',2,'No fields changed.',11,1),(54,'2018-04-22 19:14:42','7','Nombre Fiesta 2',2,'No fields changed.',11,1),(55,'2018-04-22 19:14:52','8','Fiesta 3',2,'No fields changed.',11,1),(56,'2018-04-22 19:15:21','8','Fiesta 3',2,'No fields changed.',11,1),(57,'2018-04-22 19:15:48','8','Fiesta 3',2,'No fields changed.',11,1),(58,'2018-04-22 19:16:15','8','Fiesta 3',2,'No fields changed.',11,1),(59,'2018-04-22 19:17:26','4','Producto Fiesta',2,'Changed imagen2 and imagen3.',11,1),(60,'2018-04-22 19:18:35','4','Producto Fiesta',2,'Changed imagen2.',11,1),(61,'2018-04-22 19:19:39','4','Producto Fiesta',2,'Changed imagen.',11,1),(62,'2018-04-22 19:27:24','6','Fiesta 2',2,'Changed imagen2 and imagen3.',11,1),(63,'2018-04-22 20:17:32','1','Ania',1,'Added.',32,1),(64,'2018-04-22 20:27:25','1','Ania',2,'Changed imagen_tienda.',32,1),(65,'2018-04-22 20:35:45','1','Ania',2,'Changed descripcion_tienda.',32,1),(66,'2018-05-13 23:36:42','3','Boda',1,'Added.',10,1),(67,'2018-05-13 23:40:32','9','Slider',1,'Added.',11,1),(68,'2018-05-13 23:42:27','10','Slider 2',1,'Added.',11,1),(69,'2018-05-13 23:43:40','3','Boda',2,'Changed color.',10,1),(70,'2018-05-13 23:57:06','3','Vestidos cotel',2,'Changed nombre and descripcion.',10,1),(71,'2018-05-13 23:59:04','8','Fiesta 3',3,'',11,1),(72,'2018-05-14 00:00:12','8','Fiesta 3',3,'',11,1),(73,'2018-05-14 00:01:02','113','Fiesta 3',3,'',30,1),(74,'2018-05-14 00:01:02','111','Fiesta 3',3,'',30,1),(75,'2018-05-14 00:01:02','98','Fiesta 3',3,'',30,1),(76,'2018-05-14 00:01:02','97','Fiesta 3',3,'',30,1),(77,'2018-05-14 00:01:02','96','Fiesta 3',3,'',30,1),(78,'2018-05-14 00:01:02','90','Fiesta 3',3,'',30,1),(79,'2018-05-14 00:01:02','82','Fiesta 3',3,'',30,1),(80,'2018-05-14 00:01:02','81','Fiesta 3',3,'',30,1),(81,'2018-05-14 00:01:02','78','Fiesta 3',3,'',30,1),(82,'2018-05-14 00:01:02','75','Fiesta 3',3,'',30,1),(83,'2018-05-14 00:01:02','71','Fiesta 3',3,'',30,1),(84,'2018-05-14 00:01:02','51','Fiesta 3',3,'',30,1),(85,'2018-05-14 00:01:02','49','Fiesta 3',3,'',30,1),(86,'2018-05-14 00:01:02','48','Fiesta 3',3,'',30,1),(87,'2018-05-14 00:01:02','47','Fiesta 3',3,'',30,1),(88,'2018-05-14 00:01:02','46','Fiesta 3',3,'',30,1),(89,'2018-05-14 00:01:02','45','Fiesta 3',3,'',30,1),(90,'2018-05-14 00:01:02','44','Fiesta 3',3,'',30,1),(91,'2018-05-14 00:01:02','43','Fiesta 3',3,'',30,1),(92,'2018-05-14 00:01:02','42','Fiesta 3',3,'',30,1),(93,'2018-05-14 00:01:02','41','Fiesta 3',3,'',30,1),(94,'2018-05-14 00:01:02','40','Fiesta 3',3,'',30,1),(95,'2018-05-14 00:01:21','8','Fiesta 3',3,'',11,1),(96,'2018-05-14 00:13:02','16','Vestidos',1,'Added.',11,1),(97,'2018-05-14 00:18:51','17','oiu',1,'Added.',11,1),(98,'2018-05-18 04:14:59','1','Portada fiesta 1',2,'Changed imagen.',11,1),(99,'2018-05-18 04:15:46','1','Portada fiesta 1',2,'Changed check_imagen.',11,1),(100,'2018-05-18 04:16:16','1','Portada fiesta 1',3,'',11,1),(101,'2018-05-18 04:16:26','2','Portada Fiesta 2',2,'Changed activo.',11,1),(102,'2018-05-18 04:16:42','2','Portada Fiesta 2',2,'Changed imagen, check_imagen and activo.',11,1),(103,'2018-05-21 05:01:32','2','Portada Fiesta 3',2,'Changed nombre.',11,1),(104,'2018-05-21 05:02:00','7','Nombre Fiesta 2',3,'',11,1),(105,'2018-05-21 05:02:00','6','Fiesta 2',3,'',11,1),(106,'2018-05-21 05:02:00','5','Producto Fiesta 2',3,'',11,1),(107,'2018-05-21 05:02:00','4','Producto Fiesta',3,'',11,1),(108,'2018-05-21 05:02:00','2','Portada Fiesta 3',3,'',11,1),(109,'2018-05-21 05:02:40','116','Fiesta 2',3,'',30,1),(110,'2018-05-21 05:02:40','115','Fiesta 2',3,'',30,1),(111,'2018-05-21 05:02:40','114','Portada Fiesta 3',3,'',30,1),(112,'2018-05-21 05:02:40','112','Producto Fiesta',3,'',30,1),(113,'2018-05-21 05:02:40','110','Fiesta 2',3,'',30,1),(114,'2018-05-21 05:02:40','109','Producto Fiesta 2',3,'',30,1),(115,'2018-05-21 05:02:40','108','Producto Fiesta',3,'',30,1),(116,'2018-05-21 05:02:40','107','Producto Fiesta 2',3,'',30,1),(117,'2018-05-21 05:02:40','106','Producto Fiesta',3,'',30,1),(118,'2018-05-21 05:02:40','105','Producto Fiesta',3,'',30,1),(119,'2018-05-21 05:02:40','104','Producto Fiesta',3,'',30,1),(120,'2018-05-21 05:02:40','103','Producto Fiesta 2',3,'',30,1),(121,'2018-05-21 05:02:40','102','Nombre Fiesta 2',3,'',30,1),(122,'2018-05-21 05:02:40','101','Producto Fiesta 2',3,'',30,1),(123,'2018-05-21 05:02:40','100','Producto Fiesta',3,'',30,1),(124,'2018-05-21 05:02:40','99','Producto Fiesta',3,'',30,1),(125,'2018-05-21 05:02:40','95','Producto Fiesta',3,'',30,1),(126,'2018-05-21 05:02:40','94','Producto Fiesta 2',3,'',30,1),(127,'2018-05-21 05:02:40','93','Producto Fiesta',3,'',30,1),(128,'2018-05-21 05:02:40','92','Producto Fiesta',3,'',30,1),(129,'2018-05-21 05:02:40','91','Nombre Fiesta 2',3,'',30,1),(130,'2018-05-21 05:02:40','89','Producto Fiesta',3,'',30,1),(131,'2018-05-21 05:02:40','88','Producto Fiesta',3,'',30,1),(132,'2018-05-21 05:02:40','87','Producto Fiesta 2',3,'',30,1),(133,'2018-05-21 05:02:40','86','Fiesta 2',3,'',30,1),(134,'2018-05-21 05:02:40','85','Fiesta 2',3,'',30,1),(135,'2018-05-21 05:02:40','84','Fiesta 2',3,'',30,1),(136,'2018-05-21 05:02:40','83','Fiesta 2',3,'',30,1),(137,'2018-05-21 05:02:40','80','Producto Fiesta 2',3,'',30,1),(138,'2018-05-21 05:02:40','79','Fiesta 2',3,'',30,1),(139,'2018-05-21 05:02:40','77','Nombre Fiesta 2',3,'',30,1),(140,'2018-05-21 05:02:40','76','Fiesta 2',3,'',30,1),(141,'2018-05-21 05:02:40','74','Producto Fiesta 2',3,'',30,1),(142,'2018-05-21 05:02:40','73','Producto Fiesta',3,'',30,1),(143,'2018-05-21 05:02:40','72','Fiesta 2',3,'',30,1),(144,'2018-05-21 05:02:40','70','Fiesta 2',3,'',30,1),(145,'2018-05-21 05:02:40','69','Nombre Fiesta 2',3,'',30,1),(146,'2018-05-21 05:02:40','68','Producto Fiesta 2',3,'',30,1),(147,'2018-05-21 05:02:40','67','Producto Fiesta',3,'',30,1),(148,'2018-05-21 05:02:40','66','Producto Fiesta',3,'',30,1),(149,'2018-05-21 05:02:40','65','Producto Fiesta',3,'',30,1),(150,'2018-05-21 05:02:40','64','Producto Fiesta',3,'',30,1),(151,'2018-05-21 05:02:40','63','Fiesta 2',3,'',30,1),(152,'2018-05-21 05:02:40','62','Nombre Fiesta 2',3,'',30,1),(153,'2018-05-21 05:02:40','61','Nombre Fiesta 2',3,'',30,1),(154,'2018-05-21 05:02:40','60','Nombre Fiesta 2',3,'',30,1),(155,'2018-05-21 05:02:40','59','Producto Fiesta',3,'',30,1),(156,'2018-05-21 05:02:40','58','Producto Fiesta',3,'',30,1),(157,'2018-05-21 05:02:40','57','Producto Fiesta',3,'',30,1),(158,'2018-05-21 05:02:40','56','Producto Fiesta',3,'',30,1),(159,'2018-05-21 05:02:40','55','Producto Fiesta',3,'',30,1),(160,'2018-05-21 05:02:40','54','Producto Fiesta',3,'',30,1),(161,'2018-05-21 05:02:40','53','Producto Fiesta',3,'',30,1),(162,'2018-05-21 05:02:40','52','Producto Fiesta',3,'',30,1),(163,'2018-05-21 05:02:40','50','Nombre Fiesta 2',3,'',30,1),(164,'2018-05-21 05:02:40','39','Nombre Fiesta 2',3,'',30,1),(165,'2018-05-21 05:02:40','38','Nombre Fiesta 2',3,'',30,1),(166,'2018-05-21 05:02:40','37','Nombre Fiesta 2',3,'',30,1),(167,'2018-05-21 05:02:40','36','Nombre Fiesta 2',3,'',30,1),(168,'2018-05-21 05:02:40','35','Nombre Fiesta 2',3,'',30,1),(169,'2018-05-21 05:02:40','34','Nombre Fiesta 2',3,'',30,1),(170,'2018-05-21 05:02:40','33','Nombre Fiesta 2',3,'',30,1),(171,'2018-05-21 05:02:40','32','Nombre Fiesta 2',3,'',30,1),(172,'2018-05-21 05:02:40','31','Nombre Fiesta 2',3,'',30,1),(173,'2018-05-21 05:02:40','30','Nombre Fiesta 2',3,'',30,1),(174,'2018-05-21 05:02:40','29','Nombre Fiesta 2',3,'',30,1),(175,'2018-05-21 05:02:40','28','Nombre Fiesta 2',3,'',30,1),(176,'2018-05-21 05:02:40','27','Nombre Fiesta 2',3,'',30,1),(177,'2018-05-21 05:02:40','26','Nombre Fiesta 2',3,'',30,1),(178,'2018-05-21 05:02:40','25','Nombre Fiesta 2',3,'',30,1),(179,'2018-05-21 05:02:40','24','Nombre Fiesta 2',3,'',30,1),(180,'2018-05-21 05:02:40','23','Nombre Fiesta 2',3,'',30,1),(181,'2018-05-21 05:02:40','22','Nombre Fiesta 2',3,'',30,1),(182,'2018-05-21 05:02:40','21','Nombre Fiesta 2',3,'',30,1),(183,'2018-05-21 05:02:40','20','Nombre Fiesta 2',3,'',30,1),(184,'2018-05-21 05:02:40','19','Nombre Fiesta 2',3,'',30,1),(185,'2018-05-21 05:02:40','18','Nombre Fiesta 2',3,'',30,1),(186,'2018-05-21 05:02:40','17','Nombre Fiesta 2',3,'',30,1),(187,'2018-05-21 05:02:40','16','Nombre Fiesta 2',3,'',30,1),(188,'2018-05-21 05:02:40','15','Nombre Fiesta 2',3,'',30,1),(189,'2018-05-21 05:02:40','14','Nombre Fiesta 2',3,'',30,1),(190,'2018-05-21 05:02:40','13','Nombre Fiesta 2',3,'',30,1),(191,'2018-05-21 05:02:40','12','Nombre Fiesta 2',3,'',30,1),(192,'2018-05-21 05:02:40','11','Producto Fiesta 2',3,'',30,1),(193,'2018-05-21 05:02:40','10','Producto Fiesta',3,'',30,1),(194,'2018-05-21 05:02:40','9','Producto Fiesta',3,'',30,1),(195,'2018-05-21 05:02:40','8','Producto Fiesta',3,'',30,1),(196,'2018-05-21 05:02:40','7','Producto Fiesta',3,'',30,1),(197,'2018-05-21 05:02:40','6','Producto Fiesta 2',3,'',30,1),(198,'2018-05-21 05:02:40','5','Producto Fiesta 2',3,'',30,1),(199,'2018-05-21 05:02:40','4','Producto Fiesta 2',3,'',30,1),(200,'2018-05-21 05:02:40','3','Producto Fiesta 2',3,'',30,1),(201,'2018-05-21 05:02:40','2','Nombre Fiesta 2',3,'',30,1),(202,'2018-05-21 05:02:40','1','Producto Fiesta 2',3,'',30,1),(203,'2018-05-21 05:03:00','7','Nombre Fiesta 2',3,'',11,1),(204,'2018-05-21 05:03:00','6','Fiesta 2',3,'',11,1),(205,'2018-05-21 05:03:00','5','Producto Fiesta 2',3,'',11,1),(206,'2018-05-21 05:03:00','4','Producto Fiesta',3,'',11,1),(207,'2018-05-21 05:03:00','2','Portada Fiesta 3',3,'',11,1),(208,'2018-05-21 05:03:58','1','Vestidos Largos',2,'Changed nombre and descripcion.',10,1),(209,'2018-05-21 05:05:07','18','',1,'Added.',11,1),(210,'2018-05-21 05:06:16','19','',1,'Added.',11,1),(211,'2018-05-21 05:06:36','20','',1,'Added.',11,1),(212,'2018-05-21 05:13:06','19','',3,'',11,1),(213,'2018-05-21 05:13:06','18','',3,'',11,1),(214,'2018-05-21 05:13:48','20','',3,'',11,1),(215,'2018-05-21 05:14:59','21','',1,'Added.',11,1),(216,'2018-05-21 05:21:39','21','',3,'',11,1),(217,'2018-05-21 05:22:22','22','',1,'Added.',11,1),(218,'2018-05-21 05:23:11','22','',2,'Changed check_imagen.',11,1),(219,'2018-05-21 05:24:29','22','Vestido Lazo',2,'Changed nombre and subtitulo.',11,1),(220,'2018-05-21 05:25:44','22','Vestido Lazo',2,'Changed imagen.',11,1),(221,'2018-05-21 05:28:08','22','Vestido Lazo',2,'Changed imagen.',11,1),(222,'2018-05-21 05:37:52','22','Vestido Lazo',2,'No fields changed.',11,1),(223,'2018-05-21 05:40:06','4','Fiesta',1,'Added.',10,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'app','animal'),(22,'app','auto'),(10,'app','categoria'),(27,'app','chat'),(9,'app','cliente'),(20,'app','color'),(25,'app','cursos'),(32,'app','datodepagina'),(21,'app','distrito'),(24,'app','empleo'),(8,'app','estado'),(28,'app','favoritoproducto'),(17,'app','marca'),(30,'app','marketing'),(18,'app','modelo'),(29,'app','notificacion'),(13,'app','photo'),(15,'app','photoproducto'),(26,'app','producto'),(12,'app','provincia'),(31,'app','scrap'),(23,'app','servicios'),(11,'app','subcategoria'),(19,'app','tipo'),(14,'app','video'),(16,'app','videoproducto'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2018-04-21 19:34:15'),(2,'auth','0001_initial','2018-04-21 19:34:15'),(3,'admin','0001_initial','2018-04-21 19:34:15'),(4,'admin','0002_logentry_remove_auto_add','2018-04-21 19:34:15'),(5,'app','0001_initial','2018-04-21 19:34:17'),(6,'app','0002_cliente_nombre','2018-04-21 19:34:17'),(7,'app','0003_cliente_imagen','2018-04-21 19:34:17'),(8,'app','0004_auto_20180414_0329','2018-04-21 19:34:17'),(9,'app','0005_auto_20180414_0329','2018-04-21 19:34:17'),(10,'app','0006_auto_20180414_0330','2018-04-21 19:34:17'),(11,'app','0007_auto_20180414_0332','2018-04-21 19:34:17'),(12,'app','0008_auto_20180414_0333','2018-04-21 19:34:17'),(13,'app','0009_auto_20180414_0335','2018-04-21 19:34:17'),(14,'app','0010_scrap','2018-04-21 19:34:17'),(15,'app','0011_scrap_telefono','2018-04-21 19:34:17'),(16,'app','0012_producto_id_olx','2018-04-21 19:34:17'),(17,'app','0013_auto_20180415_2105','2018-04-21 19:34:17'),(18,'app','0014_photoproducto_photo_olx','2018-04-21 19:34:17'),(19,'app','0015_auto_20180415_2118','2018-04-21 19:34:17'),(20,'app','0016_auto_20180415_2123','2018-04-21 19:34:17'),(21,'app','0017_producto_user_olx','2018-04-21 19:34:17'),(22,'contenttypes','0002_remove_content_type_name','2018-04-21 19:34:18'),(23,'auth','0002_alter_permission_name_max_length','2018-04-21 19:34:18'),(24,'auth','0003_alter_user_email_max_length','2018-04-21 19:34:18'),(25,'auth','0004_alter_user_username_opts','2018-04-21 19:34:18'),(26,'auth','0005_alter_user_last_login_null','2018-04-21 19:34:18'),(27,'auth','0006_require_contenttypes_0002','2018-04-21 19:34:18'),(28,'auth','0007_alter_validators_add_error_messages','2018-04-21 19:34:18'),(29,'sessions','0001_initial','2018-04-21 19:34:18'),(30,'app','0018_auto_20180422_1823','2018-04-22 18:23:45'),(31,'app','0019_auto_20180422_1839','2018-04-22 18:39:14'),(32,'app','0020_datodepagina','2018-04-22 20:15:21'),(33,'app','0021_datodepagina_descripcion_tienda','2018-04-22 20:22:29'),(34,'app','0022_datodepagina_imagen_tienda','2018-04-22 20:24:13');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1fdvcwqfvmrf0ufx8mzau2zq0bkoj0oc','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-07-19 00:56:37'),('1h7rxe348mkv1r4gfzxup0pgso4awg5a','NDAxMjcyMDk5MGIzMTM1MDhmMjYwM2E3NzczZGVkOWUxODJlMGJkZDp7Il9hdXRoX3VzZXJfaGFzaCI6IjIyNmMwNTJiNDE2MGU5MGNjMDNmYTEzNzdkZDY0NDc5OTJkMzQxNjQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=','2018-05-06 16:50:11'),('2efnx5z7dgltu44dsgtilr207pvm1t8r','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-06-01 04:07:46'),('32v7n1fswqx4gwommkwcjdcbb961dfop','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-27 23:54:12'),('3gb54jri0ptog98xbzxuzae7mijgyjp1','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-07-20 16:56:44'),('3l3tf5adnsru2nka83lyjznlrg7l3v8d','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-06-04 05:36:34'),('8ucbnif519cbvw8oxjdxfqmuykkwelzr','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-28 00:03:12'),('ab50e54ad4rsdly1ukt9lp9jhlp5k18t','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-06 05:49:36'),('btohk775p7ab242x63kxr35lcfwecyyp','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-06 04:30:03'),('cnexz9h4zfqc4ez000fwhfp68rj2hlqh','ODk2YzVjMTExN2VjOWFkNDAwMjRhNTcxNTljZjQ3Mjk5YTU3NmQ4Nzp7Il9hdXRoX3VzZXJfaGFzaCI6IjY3OWEwNmVmMmMwMjcxYzNiODg4ZWQzMzI0MWNiZTNkYjhiYWZiYjciLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiI0In0=','2018-05-06 17:31:26'),('en0t8oo0e6yubgzp96mkgkw31bhphdgy','MzY5ZGQ4ZGIyYTUzZjQ1NjFiYzUxMmEzNDgxZjViYmY5NWM3MWRjODp7Il9hdXRoX3VzZXJfaGFzaCI6Ijg1YWViZmEzYWRiOGIwMGVjOWQ3OGFjMGVjZTliOGVjZmUwMTBhMzQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIzIn0=','2018-05-06 16:34:14'),('g95y6ceyxrpq9t2f8n0ejenehnabbrkl','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-07-19 00:58:03'),('kc0u9zeg6md09m07am6ztg5o5ycbmkw6','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-06 20:16:51'),('n4in3bxz94pu0orpuz2pmxvyehow5c37','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-06-15 19:24:27'),('pebpoko13mxy4hhxfeklg4r2ljxts8ol','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-05 19:37:41'),('pkyrt99i5vjcwuihvsbcdoo7uam0rtjs','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-06-04 04:54:50'),('shkb9ketl3mrfit9lk1opbuikqlnzor2','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-06-01 04:09:20'),('yh1n31gbp05kisg8mf3h37e8p08puon2','YzBiZTYwOWMzMDI4ZmQ1MTczYjU2YThhZTBmZTg5M2Y4NDgyNDE1Mjp7Il9hdXRoX3VzZXJfaGFzaCI6ImM3MTkzNzk4MmY3ZjFhNDc4MjE4ZGI0ZGFkOWVlNzdmNmM4YTM4MTUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-05-06 23:38:24');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleo`
--

DROP TABLE IF EXISTS `empleo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleo`
--

LOCK TABLES `empleo` WRITE;
/*!40000 ALTER TABLE `empleo` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'active'),(2,'desactivo');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritoproducto`
--

DROP TABLE IF EXISTS `favoritoproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritoproducto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` int(11) DEFAULT NULL,
  `producto` int(11),
  `user` int(11),
  PRIMARY KEY (`id`),
  KEY `favoritoproducto_286e18ee` (`producto`),
  KEY `favoritoproducto_ee11cbb1` (`user`),
  CONSTRAINT `favoritoproducto_producto_f5bae579_fk_producto_id` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`),
  CONSTRAINT `favoritoproducto_user_de31e911_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritoproducto`
--

LOCK TABLES `favoritoproducto` WRITE;
/*!40000 ALTER TABLE `favoritoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritoproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketing`
--

DROP TABLE IF EXISTS `marketing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marketing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(1000) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `datocategoria` int(11) DEFAULT NULL,
  `subcategoria` int(11),
  `user` int(11),
  PRIMARY KEY (`id`),
  KEY `marketing_datocategoria_4984307e_fk_categoria_id` (`datocategoria`),
  KEY `marketing_490782d0` (`subcategoria`),
  KEY `marketing_ee11cbb1` (`user`),
  CONSTRAINT `marketing_datocategoria_4984307e_fk_categoria_id` FOREIGN KEY (`datocategoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `marketing_subcategoria_7521047a_fk_subcategoria_id` FOREIGN KEY (`subcategoria`) REFERENCES `subcategoria` (`id`),
  CONSTRAINT `marketing_user_7bde362b_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketing`
--

LOCK TABLES `marketing` WRITE;
/*!40000 ALTER TABLE `marketing` DISABLE KEYS */;
INSERT INTO `marketing` VALUES (117,NULL,NULL,NULL,22,NULL),(118,NULL,NULL,NULL,22,NULL),(119,NULL,NULL,NULL,22,NULL),(120,NULL,NULL,NULL,22,NULL),(121,NULL,NULL,NULL,17,NULL),(122,NULL,NULL,NULL,16,NULL),(123,NULL,NULL,NULL,22,NULL),(124,NULL,NULL,NULL,16,NULL),(125,NULL,NULL,NULL,17,NULL),(126,NULL,NULL,NULL,17,NULL),(127,NULL,NULL,NULL,16,NULL),(128,NULL,NULL,NULL,22,NULL),(129,NULL,NULL,NULL,16,NULL),(130,NULL,NULL,NULL,22,NULL),(131,NULL,NULL,NULL,17,NULL),(132,NULL,NULL,NULL,22,NULL),(133,NULL,NULL,NULL,16,NULL);
/*!40000 ALTER TABLE `marketing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

DROP TABLE IF EXISTS `modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modelo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacion`
--

DROP TABLE IF EXISTS `notificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notificacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payload` longtext,
  `p256dh` longtext,
  `auth` longtext,
  `endpoint` longtext,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notificacion_user_9eb09c9c_fk_auth_user_id` (`user`),
  CONSTRAINT `notificacion_user_9eb09c9c_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacion`
--

LOCK TABLES `notificacion` WRITE;
/*!40000 ALTER TABLE `notificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photoproducto`
--

DROP TABLE IF EXISTS `photoproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photoproducto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` int(11) DEFAULT NULL,
  `producto` int(11),
  `photo_olx` varchar(10000),
  PRIMARY KEY (`id`),
  KEY `photoproducto_photo_33ecd553_fk_photo_id` (`photo`),
  KEY `photoproducto_286e18ee` (`producto`),
  CONSTRAINT `photoproducto_photo_33ecd553_fk_photo_id` FOREIGN KEY (`photo`) REFERENCES `photo` (`id`),
  CONSTRAINT `photoproducto_producto_0f4d79e8_fk_producto_id` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photoproducto`
--

LOCK TABLES `photoproducto` WRITE;
/*!40000 ALTER TABLE `photoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `photoproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(1000) DEFAULT NULL,
  `descripcion` longtext,
  `precio` varchar(1000) DEFAULT NULL,
  `anio` varchar(100) DEFAULT NULL,
  `kilometraje` varchar(1000) DEFAULT NULL,
  `cilindros` varchar(1000) DEFAULT NULL,
  `transmision` varchar(100) DEFAULT NULL,
  `combustible` varchar(1000) DEFAULT NULL,
  `condicion` varchar(1000) DEFAULT NULL,
  `moneda` varchar(1000) DEFAULT NULL,
  `transaction` varchar(1000) DEFAULT NULL,
  `telefono` varchar(1000) DEFAULT NULL,
  `animal` int(11) DEFAULT NULL,
  `metros2` varchar(1000) DEFAULT NULL,
  `ubicacion` varchar(1000) DEFAULT NULL,
  `experiencia` varchar(100) DEFAULT NULL,
  `salarioestimado` varchar(10000) DEFAULT NULL,
  `detalleservicio` varchar(1000) DEFAULT NULL,
  `dormitorios` int(11) DEFAULT NULL,
  `banios` int(11) DEFAULT NULL,
  `piscina` int(11) DEFAULT NULL,
  `jardin` int(11) DEFAULT NULL,
  `amueblado` int(11) DEFAULT NULL,
  `gimnasio` int(11) DEFAULT NULL,
  `sauna` int(11) DEFAULT NULL,
  `jacuzzi` int(11) DEFAULT NULL,
  `ambientes` int(11) DEFAULT NULL,
  `antiguedad` varchar(1000) DEFAULT NULL,
  `auto` int(11) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `curso` int(11) DEFAULT NULL,
  `distrito` int(11) DEFAULT NULL,
  `empleo` int(11) DEFAULT NULL,
  `provincia` int(11),
  `servicio` int(11),
  `subcategoria` int(11),
  `user` int(11),
  `id_olx` varchar(1000),
  `user_olx` varchar(1000),
  PRIMARY KEY (`id`),
  KEY `producto_auto_7a073075_fk_auto_id` (`auto`),
  KEY `producto_categoria_b19692e2_fk_categoria_id` (`categoria`),
  KEY `producto_color_63875859_fk_color_id` (`color`),
  KEY `producto_curso_6432b8c8_fk_cursos_id` (`curso`),
  KEY `producto_distrito_2bf6e0a8_fk_distrito_id` (`distrito`),
  KEY `producto_empleo_cf0f258c_fk_empleo_id` (`empleo`),
  KEY `producto_16a74f32` (`provincia`),
  KEY `producto_842b1c52` (`servicio`),
  KEY `producto_490782d0` (`subcategoria`),
  KEY `producto_ee11cbb1` (`user`),
  CONSTRAINT `producto_auto_7a073075_fk_auto_id` FOREIGN KEY (`auto`) REFERENCES `auto` (`id`),
  CONSTRAINT `producto_categoria_b19692e2_fk_categoria_id` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `producto_color_63875859_fk_color_id` FOREIGN KEY (`color`) REFERENCES `color` (`id`),
  CONSTRAINT `producto_curso_6432b8c8_fk_cursos_id` FOREIGN KEY (`curso`) REFERENCES `cursos` (`id`),
  CONSTRAINT `producto_distrito_2bf6e0a8_fk_distrito_id` FOREIGN KEY (`distrito`) REFERENCES `distrito` (`id`),
  CONSTRAINT `producto_empleo_cf0f258c_fk_empleo_id` FOREIGN KEY (`empleo`) REFERENCES `empleo` (`id`),
  CONSTRAINT `producto_provincia_56385505_fk_provincia_id` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id`),
  CONSTRAINT `producto_servicio_2d7fa4d9_fk_servicios_id` FOREIGN KEY (`servicio`) REFERENCES `servicios` (`id`),
  CONSTRAINT `producto_subcategoria_f7d4b3b5_fk_subcategoria_id` FOREIGN KEY (`subcategoria`) REFERENCES `subcategoria` (`id`),
  CONSTRAINT `producto_user_17d86399_fk_auth_user_id` FOREIGN KEY (`user`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(110) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scrap`
--

DROP TABLE IF EXISTS `scrap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scrap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  `iid` varchar(1000) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `telefono` varchar(1000),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrap`
--

LOCK TABLES `scrap` WRITE;
/*!40000 ALTER TABLE `scrap` DISABLE KEYS */;
/*!40000 ALTER TABLE `scrap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategoria`
--

DROP TABLE IF EXISTS `subcategoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `subtitulo` varchar(100) DEFAULT NULL,
  `descripcion` longtext,
  `imagen` varchar(100) DEFAULT NULL,
  `check_imagen` tinyint(1) NOT NULL,
  `activo` int(11) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `relink` varchar(1000),
  `imagen2` varchar(100),
  `imagen3` varchar(100),
  PRIMARY KEY (`id`),
  KEY `subcategoria_activo_59cb99b4_fk_estado_id` (`activo`),
  KEY `subcategoria_categoria_8ce49c6f_fk_categoria_id` (`categoria`),
  CONSTRAINT `subcategoria_activo_59cb99b4_fk_estado_id` FOREIGN KEY (`activo`) REFERENCES `estado` (`id`),
  CONSTRAINT `subcategoria_categoria_8ce49c6f_fk_categoria_id` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategoria`
--

LOCK TABLES `subcategoria` WRITE;
/*!40000 ALTER TABLE `subcategoria` DISABLE KEYS */;
INSERT INTO `subcategoria` VALUES (3,'Ultima Coleccion','Subtitulo Ultima Coleccion','Descripcion  Ultima Coleccion','static/maxresdefault_1.jpg',1,1,2,'Ultima_Coleccion',NULL,NULL),(9,'Slider','Esto es el slider','Descripcion del slider','static/imagen.jpg',1,1,3,'Slider','',''),(10,'Slider 2','Subtitulo 2','Descr t2gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg','static/fotografias-post-boda-cris-6.jpg',1,2,3,'Slider_2','',''),(16,'Vestidos','Vessds','sds','static/red-dress-AL-60094-a_W3Ry6Ws.jpg',0,NULL,3,'Vestidos',NULL,NULL),(17,'oiu','jkjk','nhkhkj','static/vestido_isabela_2.jpg',0,NULL,3,'oiu',NULL,NULL),(22,'Vestido Lazo','color azulino','','static/lazo_azul_LzjGIT4.jpg',0,NULL,1,'Vestido_Lazo','','');
/*!40000 ALTER TABLE `subcategoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videoproducto`
--

DROP TABLE IF EXISTS `videoproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `videoproducto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` int(11) DEFAULT NULL,
  `video` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `videoproducto_producto_d590a54a_fk_producto_id` (`producto`),
  KEY `videoproducto_video_37aa29b9_fk_video_id` (`video`),
  CONSTRAINT `videoproducto_producto_d590a54a_fk_producto_id` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`),
  CONSTRAINT `videoproducto_video_37aa29b9_fk_video_id` FOREIGN KEY (`video`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videoproducto`
--

LOCK TABLES `videoproducto` WRITE;
/*!40000 ALTER TABLE `videoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `videoproducto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 14:45:52

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for liftkalkulator
DROP DATABASE IF EXISTS `liftkalkulator`;
CREATE DATABASE IF NOT EXISTS `liftkalkulator` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `liftkalkulator`;

-- Dumping structure for table liftkalkulator.projects
DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` varchar(50) NOT NULL,
  `projectName` varchar(50) NOT NULL,
  `autor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `adresaGradAutora` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `izradio` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `suradnik` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `datum` date NOT NULL DEFAULT '1900-01-01',
  `ugraditelj` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `adresaGradUgraditelja` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `nazivGradevine` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `lokacijaAdresaGradevine` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `refOznakaProjekta` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `tvBrojOznakaDizala` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `namjenaDizala` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'osobno',
  `ukrcavanjeVilicarem` bit(1) NOT NULL DEFAULT b'0',
  `vrstaDizala` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'elektricno',
  `vrstaPogona` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'bezreduktorski',
  `smjestajPogona` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'uVoznomOknuNaNosacu',
  `bezStrojarnice` bit(1) NOT NULL DEFAULT b'1',
  `faktorOvjesa` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '2:1',
  `nazivnaNosivost` float NOT NULL DEFAULT '630',
  `brojOsoba` int NOT NULL DEFAULT '8',
  `nazivnaBrzina` float NOT NULL DEFAULT '1',
  `akceleracijaDeceleracijaNormalnaVoznja` float NOT NULL DEFAULT '0.5',
  `deceleracijaKodHitnogStopa` float NOT NULL DEFAULT '0.7',
  `brojUkljucenjaNaSat` float NOT NULL DEFAULT '180',
  `brojPostaja` int NOT NULL DEFAULT '7',
  `brojUlaza` int NOT NULL DEFAULT '7',
  `visinaDizanja` float NOT NULL DEFAULT '18000',
  `tlocrtnaSirina` float NOT NULL DEFAULT '1700',
  `tlocrtnaDubina` float NOT NULL DEFAULT '1800',
  `dubinaJame` float NOT NULL DEFAULT '1200',
  `nadvisenje` float NOT NULL DEFAULT '3600',
  `brojNosivihUzadi` int NOT NULL DEFAULT '7',
  `tipUzadi` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'tip1',
  `korisnickoDefiniranje` bit(1) NOT NULL DEFAULT b'0',
  `promjer` float NOT NULL DEFAULT '6.5',
  `prekidnaCvrstoca` float NOT NULL DEFAULT '24700',
  `masaPoDuljnomMetru` float NOT NULL DEFAULT '0.148',
  `youngovModul` float NOT NULL DEFAULT '6300',
  `promjenaSmjeraNaStraniKabine` bit(1) NOT NULL DEFAULT b'1',
  `maxRazmakNaStraniKabine` float NOT NULL DEFAULT '1300',
  `npr_c` int NOT NULL DEFAULT '1',
  `promjenaSmjeraNaStraniProtuutega` bit(1) NOT NULL DEFAULT b'0',
  `maxRazmakNaStraniProtuutega` float NOT NULL DEFAULT '1300',
  `npr_cw` int NOT NULL DEFAULT '0',
  `z1` float NOT NULL DEFAULT '20000',
  `z2` float NOT NULL DEFAULT '21000',
  `z3` float NOT NULL DEFAULT '0.01',
  `z4` float NOT NULL DEFAULT '0.01',
  `z5` float NOT NULL DEFAULT '20000',
  `z6` float NOT NULL DEFAULT '3000',
  `l1` float NOT NULL DEFAULT '8200',
  `otklonskeUzniceNaStraniKabine` bit(1) NOT NULL DEFAULT b'1',
  `brojIDP_c` int NOT NULL DEFAULT '1',
  `promjerDDP_c` float NOT NULL DEFAULT '240',
  `masaMDP_c` float NOT NULL DEFAULT '11',
  `inercijaJDP_c` float NOT NULL DEFAULT '0.13',
  `otklonskeUzniceNaStraniUtega` bit(1) NOT NULL DEFAULT b'1',
  `brojIDP_cw` int NOT NULL DEFAULT '1',
  `promjerDDP_cw` float NOT NULL DEFAULT '240',
  `masaMDP_cw` float NOT NULL DEFAULT '11',
  `inercijaJDP_cw` float NOT NULL DEFAULT '0.13',
  `vk_brojVodilica` int NOT NULL DEFAULT '2',
  `vk_ukupnaDuljinaVodilica` int NOT NULL DEFAULT '23000',
  `vk_vertikalniRazmakPrihvataVodilica` float NOT NULL DEFAULT '2000',
  `vk_masaDodatneOpreme` float NOT NULL DEFAULT '20',
  `vk_ukupnaDodatnaMasa` float NOT NULL DEFAULT '20',
  `vk_koeficijentDodatnogOpterecenja` float NOT NULL DEFAULT '1',
  `vk_gubitciUslijedTrenja` float NOT NULL DEFAULT '0.5',
  `vk_korisnickoDefiniranjeFRc` bit(1) NOT NULL DEFAULT b'0',
  `vk_vrstaVodilice` varchar(50) NOT NULL DEFAULT 'hladnoVucene',
  `vk_tipVodilice` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'tip1',
  `vk_korisnickoDefiniranjeVodilica` bit(1) NOT NULL DEFAULT b'0',
  `vk_brojOdbojnika` int NOT NULL DEFAULT '2',
  `vk_vrstaOdbojnika` varchar(100) NOT NULL DEFAULT 'odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom',
  `vk_vlacnaCvrstoca` float NOT NULL DEFAULT '370',
  `vk_modulElasticnosti` float NOT NULL DEFAULT '210000',
  `vk_elongacija` float NOT NULL DEFAULT '22',
  `vk_povrsinaPoprecnogPresjeka` float NOT NULL DEFAULT '1052',
  `vk_masaPoJedinicDuzine` float NOT NULL DEFAULT '8.26',
  `vk_momentOtporaWxx` float NOT NULL DEFAULT '9630',
  `vk_momentOtporaWyy` float NOT NULL DEFAULT '6610',
  `vk_geometrijskaInercijaLxx` float NOT NULL DEFAULT '474300',
  `vk_geometrijskaInercijaLyy` float NOT NULL DEFAULT '231300',
  `vk_minRadijusInercijeIxx` float NOT NULL DEFAULT '21.2',
  `vk_minRadijusInercijeIyy` float NOT NULL DEFAULT '14.8',
  `vk_minRadijusInercijeImin` float NOT NULL DEFAULT '14.8',
  `vk_vitkost` float NOT NULL DEFAULT '135.14',
  `vk_omega` float NOT NULL DEFAULT '3.08',
  `vk_b1` float NOT NULL DEFAULT '70',
  `vk_h1` float NOT NULL DEFAULT '70',
  `vk_h` float NOT NULL DEFAULT '0',
  `vk_k` float NOT NULL DEFAULT '8',
  `vk_n` float NOT NULL DEFAULT '0',
  `vk_c` float NOT NULL DEFAULT '8',
  `vk_p` float NOT NULL DEFAULT '8',
  `vk_g` float NOT NULL DEFAULT '0',
  `vk_f` float NOT NULL DEFAULT '0',
  `vk_e` float NOT NULL DEFAULT '20.2',
  `vk_rs` float NOT NULL DEFAULT '1.5',
  `vk_m1` float NOT NULL DEFAULT '3',
  `vk_m2` float NOT NULL DEFAULT '2.95',
  `vk_t1` float NOT NULL DEFAULT '3.5',
  `vk_t2` float NOT NULL DEFAULT '3',
  `vk_l` float NOT NULL DEFAULT '0',
  `vk_d` float NOT NULL DEFAULT '13',
  `vk_d1` float NOT NULL DEFAULT '0',
  `vk_b3` float NOT NULL DEFAULT '42',
  `vk_l2` float NOT NULL DEFAULT '105',
  `vk_l3` float NOT NULL DEFAULT '25',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table liftkalkulator.projects: ~3 rows (approximately)
DELETE FROM `projects`;
INSERT INTO `projects` (`id`, `owner`, `projectName`, `autor`, `adresaGradAutora`, `izradio`, `suradnik`, `datum`, `ugraditelj`, `adresaGradUgraditelja`, `nazivGradevine`, `lokacijaAdresaGradevine`, `refOznakaProjekta`, `tvBrojOznakaDizala`, `namjenaDizala`, `ukrcavanjeVilicarem`, `vrstaDizala`, `vrstaPogona`, `smjestajPogona`, `bezStrojarnice`, `faktorOvjesa`, `nazivnaNosivost`, `brojOsoba`, `nazivnaBrzina`, `akceleracijaDeceleracijaNormalnaVoznja`, `deceleracijaKodHitnogStopa`, `brojUkljucenjaNaSat`, `brojPostaja`, `brojUlaza`, `visinaDizanja`, `tlocrtnaSirina`, `tlocrtnaDubina`, `dubinaJame`, `nadvisenje`, `brojNosivihUzadi`, `tipUzadi`, `korisnickoDefiniranje`, `promjer`, `prekidnaCvrstoca`, `masaPoDuljnomMetru`, `youngovModul`, `promjenaSmjeraNaStraniKabine`, `maxRazmakNaStraniKabine`, `npr_c`, `promjenaSmjeraNaStraniProtuutega`, `maxRazmakNaStraniProtuutega`, `npr_cw`, `z1`, `z2`, `z3`, `z4`, `z5`, `z6`, `l1`, `otklonskeUzniceNaStraniKabine`, `brojIDP_c`, `promjerDDP_c`, `masaMDP_c`, `inercijaJDP_c`, `otklonskeUzniceNaStraniUtega`, `brojIDP_cw`, `promjerDDP_cw`, `masaMDP_cw`, `inercijaJDP_cw`, `vk_brojVodilica`, `vk_ukupnaDuljinaVodilica`, `vk_vertikalniRazmakPrihvataVodilica`, `vk_masaDodatneOpreme`, `vk_ukupnaDodatnaMasa`, `vk_koeficijentDodatnogOpterecenja`, `vk_gubitciUslijedTrenja`, `vk_korisnickoDefiniranjeFRc`, `vk_vrstaVodilice`, `vk_tipVodilice`, `vk_korisnickoDefiniranjeVodilica`, `vk_brojOdbojnika`, `vk_vrstaOdbojnika`, `vk_vlacnaCvrstoca`, `vk_modulElasticnosti`, `vk_elongacija`, `vk_povrsinaPoprecnogPresjeka`, `vk_masaPoJedinicDuzine`, `vk_momentOtporaWxx`, `vk_momentOtporaWyy`, `vk_geometrijskaInercijaLxx`, `vk_geometrijskaInercijaLyy`, `vk_minRadijusInercijeIxx`, `vk_minRadijusInercijeIyy`, `vk_minRadijusInercijeImin`, `vk_vitkost`, `vk_omega`, `vk_b1`, `vk_h1`, `vk_h`, `vk_k`, `vk_n`, `vk_c`, `vk_p`, `vk_g`, `vk_f`, `vk_e`, `vk_rs`, `vk_m1`, `vk_m2`, `vk_t1`, `vk_t2`, `vk_l`, `vk_d`, `vk_d1`, `vk_b3`, `vk_l2`, `vk_l3`) VALUES
	(20, 'enzo', 'projekt 1', 'Enzo', 'Pazin', 'Ivan', 'Matej', '1900-01-01', 'Karlo', 'Zagreb', 'Građevina 1', 'Adresa 11A', '255C3/2', '123456', 'osobno', b'0', 'elektricno', 'bezreduktorski', 'uVoznomOknuNaNosacu', b'1', '2:1', 630, 8, 1, 0.5, 0.7, 180, 7, 7, 18000, 1700, 1800, 1200, 3600, 7, 'tip1', b'0', 6.5, 24700, 0.148, 6300, b'1', 1300, 1, b'0', 1300, 0, 20000, 21000, 0.01, 0.01, 20000, 3000, 8200, b'1', 1, 240, 11, 0.13, b'1', 1, 240, 11, 0.13, 2, 23000, 2000, 20, 20, 1, 0.5, b'0', 'hladnoVucene', 'tip1', b'0', 2, 'odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom', 370, 210000, 22, 1052, 8.26, 9630, 6610, 474300, 231300, 21.2, 14.8, 14.8, 135.14, 3.08, 70, 70, 0, 8, 0, 8, 8, 0, 0, 20.2, 1.5, 3, 2.95, 3.5, 3, 0, 13, 0, 42, 105, 25),
	(21, 'enzo', 'projekt 2', 'Ivan', 'Ivanić Grad', 'Ivan', 'Ivan', '1900-01-01', 'Ivan', 'Ivanić Grad', 'Ivanova zgrada 2', 'Ivanić Grad 2B', '155C-54', '654321', 'osobno', b'0', 'elektricno', 'bezreduktorski', 'uVoznomOknuNaNosacu', b'1', '2:1', 630, 8, 1, 0.5, 0.7, 180, 7, 7, 18000, 1700, 1800, 1200, 3600, 7, 'tip1', b'0', 6.5, 24700, 0.148, 6300, b'1', 1300, 1, b'0', 1300, 0, 20000, 21000, 0.01, 0.01, 20000, 3000, 8200, b'1', 1, 240, 11, 0.13, b'1', 1, 240, 11, 0.13, 2, 23000, 2000, 20, 20, 1, 0.5, b'0', 'hladnoVucene', 'tip3', b'0', 2, 'odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom', 370, 210000, 22, 1052, 8.26, 9630, 6610, 474300, 231300, 21.2, 14.8, 14.8, 135.14, 3.08, 70, 70, 0, 8, 0, 8, 8, 0, 0, 20.2, 1.5, 3, 2.95, 3.5, 3, 0, 13, 0, 42, 105, 25);

-- Dumping structure for table liftkalkulator.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table liftkalkulator.users: ~1 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `username`, `password`) VALUES
	(1, 'enzo', 'password'),
	(2, 'kristijan', 'password');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

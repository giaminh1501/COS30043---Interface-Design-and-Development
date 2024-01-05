--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE IF NOT EXISTS units (
    `id` int(30) NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(8) CHARACTER SET utf8,
    `desc` VARCHAR(47) CHARACTER SET utf8,
    `cp` NUMERIC(3, 1),
    `type` VARCHAR(20) CHARACTER SET utf8,
    PRIMARY KEY (id)
);

--
-- Dumping data for table `units`
--

INSERT INTO units VALUES (1,'ICT10001','Problem Solving with ICT',12.5,'Core'),
	(2,'COS10005','Web Development',12.5,'Core'),
	(3,'INF10003','Introduction to Business Information Systems',12.5,'Core'),
	(4,'INF10002','Database Analysis and Design',12.5,'Core'),
	(5,'COS10009','Introduction to Programming',12.5,'Core'),
	(6,'INF30029','Information Technology Project Management',12.5,'Core'),
	(7,'ICT30005','Professional Issues in Information Technology',12.5,'Core'),
	(8,'ICT30001','Information Technology Project',12.5,'Core'),
	(9,'COS20001','User-Centred Design',12.5,'Software Development'),
	(10,'TNE10005','Network Administration',12.5,'Software Development'),
	(11,'COS20016','Operating System Configuration',12.5,'Software Development'),
	(12,'SWE20001','Development Project 1 - Tools and Practices',12.5,'Software Development'),
	(13,'COS20007','Object Oriented Programming',12.5,'Software Development'),
	(14,'COS30015','IT Security',12.5,'Software Development'),
	(15,'COS30043','Interface Design and Development',12.5,'Software Development'),
	(16,'COS30017','Software Development for Mobile Devices',12.5,'Software Development'),
	(17,'INF20012','Enterprise Systems',12.5,'Systems Analysis'),
	(18,'ACC10007','Financial Information for Decision Making',12.5,'Systems Analysis'),
	(19,'INF20003','Requirements Analysis and Modelling',12.5,'Systems Analysis'),
	(20,'ACC20014','Management Decision Making',12.5,'Systems Analysis'),
	(21,'INF30005','Business Process Management',12.5,'Systems Analysis'),
	(22,'INF30003','Business Information Systems Analysis',12.5,'Systems Analysis'),
	(23,'INF30020','Information Systems Risk and Security',12.5,'Systems Analysis'),
	(24,'INF30001','Systems Acquisition & Implementation Management',12.5,'Systems Analysis');
-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'hellovue');
(2, 'giaminh', 'giaminhw09');


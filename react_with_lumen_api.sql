-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2020 at 01:53 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_with_lumen_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `basic`
--

CREATE TABLE `basic` (
  `id` int(10) UNSIGNED NOT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `basic`
--

INSERT INTO `basic` (`id`, `language`, `category`, `sub_category`, `question`, `answer`, `created_at`, `updated_at`) VALUES
(2, 'JAVA', 'class', 'sub class', 'What is Java?', 'Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.', '2020-12-10 05:43:59', '2020-12-10 05:43:59'),
(4, 'JavaScript', 'Data Types', '', 'Data Types', 'var length = 16;  var lastName = \"Johnson\";   var x = {firstName:\"John\", lastName:\"Doe\"};    // Object', '2020-12-10 05:51:05', '2020-12-10 05:51:05'),
(5, 'JavaScript', 'Data Types', '', 'JavaScript Objects', 'Objects are variables too. But objects can contain many values. var car = {type:\"Fiat\", model:\"500\", color:\"white\"}; Spaces and line breaks are not important. An object definition can span multiple lines', '2020-12-10 05:51:38', '2020-12-10 05:51:38'),
(6, 'JavaScript', '', '', 'What can JavaScript Do?', 'Event handlers can be used to handle, and verify, user input, user actions, and browser actions: Things that should be done every time a page loads Things that should be done when the page is closed Action that should be performed when a user clicks a button Content that should be verified when a user inputs data', '2020-12-10 05:52:06', '2020-12-10 05:52:06'),
(7, 'JavaScript', '', '', 'JavaScript Classes', 'The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name \"constructor\", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.', '2020-12-10 05:52:50', '2020-12-10 05:52:50'),
(8, 'Design Pattern', '', '', 'What is a Design Pattern?', 'Design patterns are design level solutions for recurring problems that we software engineers come across often. It’s not code - I repeat, ❌CODE. It is like a description on how to tackle these problems and design a solution. Using these patterns is considered good practice, as the design of the solution is quite tried and tested, resulting in higher readability of the final code. Design patterns are quite often created for and used by OOP Languages, like Java, in which most of the examples from here on will be written.', '2020-12-10 05:53:46', '2020-12-10 05:53:46'),
(9, 'Design Pattern', '', '', 'What are Types of design patterns?', 'There are about 26 Patterns currently discovered (I hardly think I will do them all…). These 26 can be classified into 3 types: 1. Creational: These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns. 2. Structural: These patterns are designed with regard to a class\'s structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changing much of its composition. 3. Behavioral: These patterns are designed depending on how one class communicates with others.', '2020-12-10 05:54:19', '2020-12-10 05:54:19'),
(10, 'Design Pattern', '', '', 'Creational - The Singleton Design Pattern', 'The Singleton Design Pattern is a Creational pattern, whose objective is to create only one instance of a class and to provide only one global access point to that object. One commonly used example of such a class in Java is Calendar, where you cannot make an instance of that class. It also uses its own getInstance()method to get the object to be used.', '2020-12-10 05:54:59', '2020-12-10 05:54:59'),
(11, 'Design Pattern', '', '', 'Lazy Days ?', 'There isn’t much difference from the above implementation. The main differences are that the static variable is initially declared null, and is only instantiated within the getInstance() method if - and only if - the instance variable remains null at the time of the check.', '2020-12-10 05:55:17', '2020-12-10 05:55:17'),
(12, 'PYTHON', 'class', 'sub class', 'asd', 'mnb', '2020-12-13 11:50:18', '2020-12-13 11:50:18'),
(13, 'JAVA', '', '', 'What is Java?', 'Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.', '2020-12-14 06:31:50', '2020-12-14 06:31:50');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(7, '2020_11_22_112324_create_basic_table', 1),
(8, '2020_11_22_120432_create_quizs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quizs`
--

CREATE TABLE `quizs` (
  `id` int(10) UNSIGNED NOT NULL,
  `quiz_language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_optiona` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_optionb` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_optionc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_optiond` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_answer` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quizs`
--

INSERT INTO `quizs` (`id`, `quiz_language`, `quiz_type`, `quiz_question`, `quiz_optiona`, `quiz_optionb`, `quiz_optionc`, `quiz_optiond`, `quiz_answer`, `created_at`, `updated_at`) VALUES
(6, 'JavaScript', 'asd', 'Inside which HTML element do we put the JavaScript?', '<scripting>  ', '<script> ', '<javascript>', '<js>', 2, '2020-12-15 07:06:02', '2020-12-15 07:06:02'),
(7, 'JavaScript', 'asd', 'What is the correct JavaScript syntax to change the content of the HTML element below?      <p id=\"demo\">This is a demonstration.</p>', 'document.getElement(\"p\").innerHTML = \"Hello World!\";  ', 'document.getElementByName(\"p\").innerHTML = \"Hello World!\";', 'document.getElementById(\"demo\").innerHTML = \"Hello World!\";  ', '#demo.innerHTML = \"Hello World!\";', 3, '2020-12-15 07:07:17', '2020-12-15 07:07:17'),
(8, 'JavaScript', 'asd', 'Where is the correct place to insert a JavaScript?', 'Both the <head> section and the <body> section are correct  ', 'The <body> section', 'The <head> section', 'The <html> section', 1, '2020-12-15 07:08:27', '2020-12-15 07:08:27'),
(9, 'JavaScript', 'asd', 'What is the correct syntax for referring to an external script called \"xxx.js\"?', '<script name=\"xxx.js\">  ', '<script src=\"xxx.js\">  ', '<script href=\"xxx.js\">', 'empty', 2, '2020-12-15 07:09:30', '2020-12-15 07:09:30'),
(10, 'JavaScript', 'asd', 'The external JavaScript file must contain the <script> tag.', 'False  ', 'True', 'empty', 'empty', 1, '2020-12-15 07:10:19', '2020-12-15 07:10:19'),
(11, 'JavaScript', 'asd', 'How do you write \"Hello World\" in an alert box?', 'alert(\"Hello World\");  ', 'msgBox(\"Hello World\");', 'msg(\"Hello World\");', 'alertBox(\"Hello World\");', 1, '2020-12-15 07:11:03', '2020-12-15 07:11:03'),
(12, 'JavaScript', 'asd', 'How do you create a function in JavaScript?', 'function = myFunction()  ', 'function:myFunction()', 'function myFunction()  ', 'function => myFunction()  ', 3, '2020-12-15 07:11:55', '2020-12-15 07:11:55'),
(13, 'JavaScript', 'asd', 'How do you call a function named \"myFunction\"?', 'call myFunction()  ', 'myFunction()  ', 'call function myFunction()', 'function => myFunction()  ', 2, '2020-12-15 07:12:31', '2020-12-15 07:12:31'),
(14, 'JavaScript', 'asd', 'How to write an IF statement in JavaScript?', 'if i == 5 then  ', 'if i = 5', 'if i = 5 then', 'if (i == 5)  ', 4, '2020-12-15 07:13:14', '2020-12-15 07:13:14'),
(15, 'JavaScript', 'asd', 'How to write an IF statement for executing some code if \"i\" is NOT equal to 5?', 'if i <> 5  ', 'if (i <> 5)', 'if (i != 5)  ', 'if i =! 5 then', 3, '2020-12-15 07:13:58', '2020-12-15 07:13:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `basic`
--
ALTER TABLE `basic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quizs`
--
ALTER TABLE `quizs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `basic`
--
ALTER TABLE `basic`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `quizs`
--
ALTER TABLE `quizs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

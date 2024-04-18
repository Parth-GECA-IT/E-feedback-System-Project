CREATE DATABASE feedback_database;


alter user 'root'@'localhost' identified with mysql_native_password by 'Prakhar@1729';

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO Students (student_id, student_name, email, password) VALUES
(1, 'Sahil_Parbat', 'sahil@example.com', 'pass@123'),
(2, 'Nutan_Adhav', 'nutan@example.com', 'pass@123'),
(3, 'Raju_Amrute', 'raju@example.com', 'pass@123'),
(4, 'Hasibuddin_Shaikh', 'hasib@example.com', 'pass@123'),
(5, 'Parth_Armarkar', 'parth@example.com', 'pass@123'),
(6, 'Prajakta_Bagade', 'prajakta@example.com', 'pass@123'),
(7, 'Tanisha_Bang', 'tanisha@example.com', 'pass@123'),
(8, 'Pranay_Bannagare', 'pranay@example.com', 'pass@123'),
(9, 'Diksha_Barsagade', 'diksha@example.com', 'pass@123'),
(10, 'Chetan_Bonsule', 'chetan@example.com', 'pass@123'),
(11, 'Manish_Borse', 'manish@example.com', 'pass@123'),
(12, 'Shruti_Chandekar', 'shruti@example.com', 'pass@123'),
(13, 'Dhiraj_Chaudhari', 'dhiraj@example.com', 'pass@123'),
(14, 'Rajveer_Chauhan', 'rajveer@example.com', 'pass@123'),
(15, 'Komal_Chilke', 'komal@example.com', 'pass@123'),
(16, 'Sanika_Daithankar', 'sanika@example.com', 'pass@123'),
(17, 'Tanaya_Dambe', 'tanayada@example.com', 'pass@123'),
(18, 'Tanaya_Deote', 'tanayade@example.com', 'pass@123'),
(19, 'Rohan_Dhale', 'rohan@example.com', 'pass@123'),
(20, 'Prathamesh_Dhote', 'prathamesh@example.com', 'pass@123'),
(21, 'Pratiksha_Dogre', 'pratiksha@example.com', 'pass@123'),
(22, 'Sumit_Gaikwad', 'sumit@example.com', 'pass@123'),
(23, 'Siddhant_Gajbhiye', '@example.com', 'pass@123'),
(24, 'Karan_Gawande', 'karan@example.com', 'pass@123'),
(25, 'Prajwal_Ghinmene', 'prajwal@example.com', 'pass@123'),
(26, 'Pratik_Girhe', 'pratik@example.com', 'pass@123'),
(27, 'Mukund_Gund', 'gund@example.com', 'pass@123'),
(28, 'Abdul_Dayyan', 'Abdul@example.com', 'pass@123'),
(29, 'Pratham_Hirve', 'pratham@example.com', 'pass@123'),
(30, 'Nikita_Ingle', 'nikita@example.com', 'pass@123'),
(31, 'Gaurav_Jadhav', 'gauravja@example.com', 'pass@123'),
(32, 'Shivani_Kalange', 'shivani@example.com', 'pass@123'),
(33, 'Virendra_Khade', 'virendra@example.com', 'pass@123'),
(34, 'Dnyaneshwar_Kharmale', 'dnyaneshwar@example.com', 'pass@123'),
(35, 'Sayali_Khode', 'sayali@example.com', 'pass@123'),
(36, 'Chaitanya_Kole', 'chaitanya@example.com', 'pass@123'),
(37, 'Atharva_Kulkarni', 'atharva@example.com', 'pass@123'),
(38, 'Shreya_Lahane', 'shreya@example.com', 'pass@123'),
(39, 'Gaurav_Magar', 'gauravma@example.com', 'pass@123'),
(40, 'Sujit_Magar', 'sujit@example.com', 'pass@123'),
(41, 'Vishwas_Masram', 'vishwas@example.com', 'pass@123'),
(42, 'Mohammad_Zaid', 'zaid@example.com', 'pass@123'),
(43, 'Abuusama_Momin', 'abuusama@example.com', 'pass@123'),
(44, 'Aditya_More', 'adityamo@example.com', 'pass@123'),
(45, 'Mihir_Mudholkar', 'mihir@example.com', 'pass@123'),
(46, 'Vishal_Nagashankar', 'vishal@example.com', 'pass@123'),
(47, 'Harshal_Nagdeote', 'harshal@example.com', 'pass@123'),
(48, 'Pankaj_Navale', 'pankaj@example.com', 'pass@123'),
(49, 'Giriraj_Parik', 'giriraj@example.com', 'pass@123'),
(50, 'Tejas_Pathak', 'tejas@example.com', 'pass@123'),
(51, 'Swarali_Pathrikar', 'swarali@example.com', 'pass@123'),
(52, 'Rushikesh_Pawar', 'rushikesh@example.com', 'pass@123'),
(53, 'Dhruv_Punekar', 'dhruv@example.com', 'pass@123'),
(54, 'Suresh_Raghu', 'raghu@example.com', 'pass@123'),
(55, 'Ketaki_Randive', 'ketaki@example.com', 'pass@123'),
(56, 'Haroon_Rashid', 'haroon@example.com', 'pass@123'),
(57, 'Rohit_Rathod', 'rohitra@example.com', 'pass@123'),
(58, 'Kaustubh_Raut', 'kaustubh@example.com', 'pass@123'),
(59, 'Mohammad_Saad', 'saad@example.com', 'pass@123'),
(60, 'Swarupa_', '@example.com', 'pass@123'),
(61, '', '@example.com', 'pass@123'),
(62, '', '@example.com', 'pass@123'),
(63, '', '@example.com', 'pass@123'),
(64, '', '@example.com', 'pass@123'),
(65, '', '@example.com', 'pass@123'),
(66, '', '@example.com', 'pass@123'),
(67, '', '@example.com', 'pass@123'),
(68, '', '@example.com', 'pass@123'),
(69, '', '@example.com', 'pass@123'),
(70, '', '@example.com', 'pass@123'),
(71, '', '@example.com', 'pass@123'),
(72, '', '@example.com', 'pass@123'),
(73, '', '@example.com', 'pass@123'),
(74, '', '@example.com', 'pass@123'),
(75, '', '@example.com', 'pass@123'),
(76, '', '@example.com', 'pass@123'),
(77, '', '@example.com', 'pass@123');



select * from Students;


CREATE TABLE Faculty (
    faculty_id INT PRIMARY KEY,
    faculty_name VARCHAR(255),
   email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO Faculty (faculty_id, faculty_name, email, password) VALUES
(1, 'rbm', 'rbm@example.com', 'pass@123'),
(2, 'spr', 'spr@example.com', 'pass@123');

select * from faculty;

	CREATE TABLE Courses (
		course_id INT PRIMARY KEY auto_increment,
		course_code VARCHAR(50),
		course_name VARCHAR(255)
	);
    
    INSERT INTO Courses (course_code, course_name) VALUES
( 'ITPC-3003', 'Machine Learning');

select * from Courses;



CREATE TABLE Feedback (
    feedback_id INT PRIMARY KEY auto_increment,
    student_id INT,
    faculty VARCHAR(255),
    course VARCHAR(255),
    question1_rating INT,
    question1_rating_label VARCHAR(255),
    question2_rating INT,
    question2_rating_label VARCHAR(255),
    question3_rating INT,
    question3_rating_label VARCHAR(255),
    question4_rating INT,
    question4_rating_label VARCHAR(255),
    question5_rating INT,
    question5_rating_label VARCHAR(255),
    question6_rating INT,
    question6_rating_label VARCHAR(255),
    question7_rating INT,
    question7_rating_label VARCHAR(255),
    question8_rating INT,
    question8_rating_label VARCHAR(255),
    question9_rating INT,
    question9_rating_label VARCHAR(255),
    question10_rating INT,
    question10_rating_label VARCHAR(255),
    timestamp TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
   
);




INSERT INTO Feedback (
    feedback_id,
    student_id,
    faculty,
    course,
    question1_rating,
    question1_rating_label,
    question2_rating,
    question2_rating_label,
    question3_rating,
    question3_rating_label,
    question4_rating,
    question4_rating_label,
    question5_rating,
    question5_rating_label,
    question6_rating,
    question6_rating_label,
    question7_rating,
    question7_rating_label,
    question8_rating,
    question8_rating_label,
    question9_rating,
    question9_rating_label,
    question10_rating,
    question10_rating_label,
    timestamp
) VALUES (
    1,
    1,
    'Prof. R.B. Mannade',
    'ITPC-3003 Machine Learning',
    
    4,
    'Very Good',
    5,
    'Excellent',
    4,
    'Very Good',
    3,
    'Average',
    5,
    'Excellent',
    4,
    'Very Good',
    5,
    'Excellent',
    3,
    'Average',
    4,
    'Very Good',
    5,
    'Excellent',
    '2024-04-16 10:00:00'
);

select * from Feedback;


ALTER TABLE Feedback
DROP COLUMN question1_rating,
DROP COLUMN question2_rating,
DROP COLUMN question3_rating,
DROP COLUMN question4_rating,
DROP COLUMN question5_rating,
DROP COLUMN question6_rating,
DROP COLUMN question7_rating,
DROP COLUMN question8_rating,
DROP COLUMN question9_rating,
DROP COLUMN question10_rating;

    



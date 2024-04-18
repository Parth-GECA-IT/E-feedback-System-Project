CREATE DATABASE feedback_database;


CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO Students (student_id, student_name, email, password) VALUES
(1, 'Dipak', 'dipak@example.com', 'pass@123'),
(2, 'Prakhar', 'prakhar@example.com', 'pass@123');



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

drop table Feedback;


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

SELECT
    COUNT(*) AS student_count
FROM
    Feedback
WHERE
    course = 'ITPC-3003 Machine Learning' AND
    question1_rating_label = 'Good';
    
    
    SELECT
    COUNT(CASE WHEN question1_rating_label = 'Below Average' THEN 1 END) AS q1_below_average,
    COUNT(CASE WHEN question1_rating_label = 'Average' THEN 1 END) AS q1_average,
    COUNT(CASE WHEN question1_rating_label = 'Good' THEN 1 END) AS q1_good,
    COUNT(CASE WHEN question1_rating_label = 'Very Good' THEN 1 END) AS q1_very_good,
    COUNT(CASE WHEN question1_rating_label = 'Excellent' THEN 1 END) AS q1_excellent
FROM
    Feedback
WHERE
    course = 'ITPC-3003 Machine Learning' and faculty = 'Prof. S. Nemade';





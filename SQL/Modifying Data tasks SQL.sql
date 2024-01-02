Modifying Data tasks SQL

-- Exercise 01: Insert a record into the student table
INSERT INTO student VALUES ('EC007', 'Flintstone', 'Fred', 'flintstone@bt.com', 1234567);

-- Exercise 02: Enter records for other members of the Flintstone family: Wilma, Pebbles, and Dino
INSERT INTO student VALUES
('EC008', 'Flintstone', 'Wilma', 'w.flintstone@bt.com', 2345678),
('EC009', 'Flintstone', 'Dino', 'd.flintstone@bt.com', 3456789);

-- Exercise 03: Insert a record into the module table
INSERT INTO module VALUES ('DH3J34', 'SQL: Introduction', 1, 32, 'EC007');

-- Exercise 04: Update the value from Fred to Barney
UPDATE student SET firstname = 'Barney' WHERE studentno = 1234567;

-- Exercise 04: Show Barney and the module details using a join
SELECT student.surname, student.firstname, student.studentno, module.modulename
FROM student
JOIN module ON student.studentno = module.studentno
WHERE student.firstname = 'Barney';

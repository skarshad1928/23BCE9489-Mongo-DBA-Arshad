-- Show all existing databases
SHOW DATABASES;

-- Create a new database named 'vit'
CREATE DATABASE vit;

-- Use the 'vit' database
USE vit;

-- Create a table 'vit_vellore' with student details
CREATE TABLE vit_vellore (
    full_name VARCHAR(100),           -- Student's full name
    reg_no VARCHAR(20) PRIMARY KEY,   -- Unique registration number (Primary Key)
    school VARCHAR(100),              -- School/Department name
    graduation_year INT               -- Year of graduation
);

-- Insert multiple records (rows) into 'vit_vellore'
INSERT INTO vit_vellore (full_name, reg_no, school, graduation_year) VALUES
('Ananya Sharma', '21BCE1001', 'School of Computer Science', 2025),
('Rohan Mehta', '21EEE1002', 'School of Electrical Engineering', 2025),
('Sneha Reddy', '21MEC1003', 'School of Mechanical Engineering', 2025),
('Aditya Verma', '20BCE1004', 'School of Computer Science', 2024),
('Priya Nair', '21CSE1005', 'School of Computer Science', 2025),
('Karthik Iyer', '21ECE1006', 'School of Electronics Engineering', 2025),
('Megha Rao', '20BBA1007', 'School of Business', 2024),
('Arjun Das', '22CIV1008', 'School of Civil Engineering', 2026),
('Divya Kapoor', '21BIO1009', 'School of Bio Sciences', 2025);

-- Show all records from 'vit_vellore'
SELECT * FROM vit_vellore;

-- Add a new column 'phone' to the table (example: for contact number)
ALTER TABLE vit_vellore ADD phone VARCHAR(10);

-- Show the structure (schema) of the table
DESC vit_vellore;

-- Remove the 'phone' column
ALTER TABLE vit_vellore DROP COLUMN phone;

-- Add a new column 's_country' with default value 'India'
ALTER TABLE vit_vellore ADD s_country VARCHAR(10) DEFAULT 'India';

-- Update full_name where it matches specific value
UPDATE vit_vellore 
SET full_name = 'Nikita Anandmani' 
WHERE full_name = 'Megha Rao';

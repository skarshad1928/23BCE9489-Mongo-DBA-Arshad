-- Drop and create SchoolDB
DROP DATABASE IF EXISTS SchoolDB;
CREATE DATABASE SchoolDB;
USE SchoolDB;

-- Create Students table
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Create LibraryIssues table with foreign key
CREATE TABLE LibraryIssues (
    issue_id INT PRIMARY KEY,
    student_id INT,
    book_title VARCHAR(100) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insert students
INSERT INTO Students (student_id, name) VALUES
(101, 'Rahul'),
(102, 'Nikita'),
(103, 'Ayesha');

-- Insert library issues
INSERT INTO LibraryIssues (issue_id, student_id, book_title) VALUES
(1, 101, 'C Programming'),
(2, 102, 'Data Structures'),
(3, 101, 'Discrete Math');

-- --------------------------------------

-- Drop and create StoreDB
DROP DATABASE IF EXISTS StoreDB;
CREATE DATABASE StoreDB;
USE StoreDB;

-- Create Category table
CREATE TABLE Category (
    category_id INT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    details VARCHAR(100)
);

-- Create Product table with FK
CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    details VARCHAR(100),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- Insert categories
INSERT INTO Category (category_id, name, details) VALUES
(101, 'Electronics', 'All electronic items'),
(102, 'Furniture', 'Tables, chairs, sofas');

-- Insert products
INSERT INTO Product (product_id, name, details, category_id) VALUES
(1, 'TV', 'Smart LED 42 inch', 101),
(2, 'Sofa', 'Leather 3-seater recliner', 102);

-- --------------------------------------

-- Create Customer and Orders
CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    middle_name VARCHAR(40),
    last_name VARCHAR(40) NOT NULL,
    country VARCHAR(35) DEFAULT 'India'
);

-- Insert customer
INSERT INTO Customer (customer_id, first_name, middle_name, last_name)
VALUES (101, 'Shalu', '', 'Kumari');

-- Create Orders table with FK
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

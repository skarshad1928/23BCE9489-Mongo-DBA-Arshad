use vit;
select * from worker1;
select * from worker;
SELECT COUNT(department)
FROM worker1
GROUP BY department
ORDER BY COUNT(department) DESC
LIMIT 1;
select department,sum(salary) as sume from worker1 group by department order by sume limit 1;
select department, sum(salary) from worker1 group by department;
select department, count(department) from worker1
group by department having count(department)>3;
select department, sum(salary) as sume from worker1
group by department order by sume desc limit 1;
SELECT department, SUM(salary)
FROM worker1
GROUP BY department
ORDER BY SUM(salary) DESC
LIMIT 1 OFFSET 1;

select first_name, department from worker1 where salary=(select max(salary) from worker1);
select first_name, department, salary from worker1 where salary>(select avg(salary) from worker1);

create table student(
s_id int,
s_name varchar(25));
insert into student values
(101,'jayanth'),
(102, 'karthik'),
(103,'Praveen'),
(105,'Mahesh'),
(106,'Arun');

create table address(
s_id int,
s_address varchar(25));

insert into address values 
(101,'coimbatore'),
(104,'chennai'),
(105,'pune');
select * from student;
select * from address;
select * from student cross join address;
select * from student inner join address where student.s_id=address.s_id;
select * from student left outer join address on (student.s_id=address.s_id);
select * from student right outer join address on (student.s_id=address.s_id);
select * from student full join address;
SELECT DISTINCT Salary
FROM Worker1 W1
WHERE (
    SELECT COUNT(DISTINCT Salary)
    FROM Worker1 W2
    WHERE W2.Salary > W1.Salary
) = 4;

-- 1. Create and use the practise database
CREATE DATABASE IF NOT EXISTS practise;
USE practise;

-- 2. Drop table if it exists (optional for clean rerun)
DROP TABLE IF EXISTS table1;
SET SQL_SAFE_UPDATES = 0;

-- 3. Create the table
CREATE TABLE table1 (
    a INT
);

-- 4. Begin a transaction
START TRANSACTION;

-- 5. Insert rows
INSERT INTO table1 (a) VALUES
    (1),
    (2),
    (3);

-- 6. Set a savepoint
SAVEPOINT a11;

-- 7. Delete one row (this is safe and reversible within the transaction)
DELETE FROM table1 ;

-- 8. Rollback to the savepoint (undo the delete)
ROLLBACK TO a11;

-- 9. Confirm that all rows are still present
SELECT * FROM table1;

-- 10. Commit the transaction
COMMIT;
-- 11. check it rollback or not  
select * from table1;

delete from  table1;
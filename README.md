| Class / Interface   | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `DriverManager`     | Manages JDBC drivers, helps get `Connection` objects                |
| `Connection`        | Represents an active connection to the database                     |
| `Statement`         | Used to execute static SQL queries like `SELECT * FROM students`    |
| `PreparedStatement` | Used to execute parameterized queries (safe from SQL injection)     |
| `ResultSet`         | Holds the result of a SQL query (like rows from a SELECT statement) |
| `SQLException`      | Handles SQL-related exceptions                                      |
| `ResultSetMetaData` | Provides info about columns in a `ResultSet`                        |
| `CallableStatement` | Used to call stored procedures from the database                    |



# simple understansing
-- rs.getString("match_id")  the value of match id be   int but .get String convert into String

# important note 1:
-- String url = "jdbc:mysql://localhost:3306/ipl";// it  defines the java which database need to use
# Statement stmt = conn.createStatement();
|conn is your Connection object (connected to a MySQL database).|
|createStatement() is a method from the Connection class.|
|It returns a Statement object, which is used to run SQL statements.|


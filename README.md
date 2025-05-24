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

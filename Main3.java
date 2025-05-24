package crud;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main3{
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/";
        String user = "root";
        String password = "NewPassword";  // Replace with your MySQL password

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");//com.oracle if used oracle database

            // Connect to MySQL server
            Connection conn = DriverManager.getConnection(url, user, password);

            // Create SQL statement
            Statement stmt = conn.createStatement();
            String sql = "create database Practise";
            

            // Use executeQuery for SELECT-like commands
            int rs = stmt.executeUpdate(sql);// it was not result set  execute Update
            stmt.close();
            conn.close();

        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            // if any exception  from  sql exception  connection or quwery
            System.out.println("Database connection or query failed.");
            e.printStackTrace();
        }
    }
}

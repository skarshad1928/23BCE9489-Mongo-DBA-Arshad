import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/";
        String user = "root";
        String password = "NewPassword";  // Replace with your MySQL password

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Connect to MySQL server
            Connection conn = DriverManager.getConnection(url, user, password);

            // Create SQL statement
            Statement stmt = conn.createStatement();
            String sql = "SHOW DATABASES";

            // Use executeQuery for SELECT-like commands
            ResultSet rs = stmt.executeQuery(sql);

            System.out.println("Databases:");
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }

            // Close resources
            rs.close();
            stmt.close();
            conn.close();

        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC Driver not found.");
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("Database connection or query failed.");
            e.printStackTrace();
        }
    }
}

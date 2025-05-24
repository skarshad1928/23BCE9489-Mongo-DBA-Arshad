import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Main1 {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/ipl";
        String user = "root";
        String password = "NewPassword";  // Replace with your MySQL password

        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");//com.oracle if used oracle database

            // Connect to MySQL server
            Connection conn = DriverManager.getConnection(url, user, password);

            // Create SQL statement
            Statement stmt = conn.createStatement();
            String sql = "Select * from mb1";

            // Use executeQuery for SELECT-like commands
            ResultSet rs = stmt.executeQuery(sql);

            System.out.println("match_id\tbatter\t\ttotal_score");
            while (rs.next()) {
                System.out.println(
                        rs.getString("match_id") + "\t" +
                                rs.getString("batter") + "\t\t" +
                                rs.getString("total_score")
                );
            }


            // Close resources
            rs.close();
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

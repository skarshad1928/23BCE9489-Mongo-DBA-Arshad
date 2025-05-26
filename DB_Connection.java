
import java.sql.Connection;
import java.sql.DriverManager;

public class DB_Connection {
    public Connection get_connection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/Practise",
                    "root",
                    "NewPassword" // 🔁 Replace with your MySQL password
            );
        } catch (Exception e) {
            System.out.println("Database connection failed: " + e.getMessage());
        }
        return connection;
    }
}

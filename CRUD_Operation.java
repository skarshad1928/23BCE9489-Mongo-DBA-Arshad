import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class CRUD_Operation {

    public static void main(String[] args) {
        CRUD_Operation objTest = new CRUD_Operation();

        // Create records
        objTest.create_data("105", "manoj", 95);
        objTest.create_data("108", "karthick", 75);
        //objTest.change_columnname("Student","sl_no","sl_no");
        objTest.drop_table("student");

        // Read records
        objTest.read_data();
    }
    public void change_columnname (String table_name, String oldname, String newname) {
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();

        // Add spaces properly between keywords and identifiers
        String query = "ALTER TABLE " + table_name + " RENAME COLUMN " + oldname + " TO " + newname;

        try (PreparedStatement ps = connection.prepareStatement(query)) {
            ps.executeUpdate();
            System.out.println("Column renamed from '" + oldname + "' to '" + newname + "'");
        } catch (Exception e) {
            System.out.println("Error changing column name: " + e.getMessage());
            e.printStackTrace();
        }
    }
    public void delete_records(String table_name,String Condition){
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();
        String query = "Delete from "+table_name+ "where "+ Condition;

        try (PreparedStatement ps = connection.prepareStatement(query)) {
            ps.executeUpdate();
            System.out.println("delete records based on condition");
        } catch (Exception e) {
            System.out.println("Error occured: " + e.getMessage());
            e.printStackTrace();
        }

    }
    public void update_record(String table_name,String Condition,String column1,String newvalue){
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();
        String query = "update  "+table_name+ " set "+column1+"="+newvalue+" where "+Condition;
        try (PreparedStatement ps = connection.prepareStatement(query)) {
            ps.executeUpdate();
            System.out.println("changed");
        } catch (Exception e) {
            System.out.println("Error coccured " + e.getMessage());
            e.printStackTrace();
        }
    }


    public void create_data(String sl_no, String name, int mark) {
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();

        String query = "INSERT INTO student (sl_no, name, mark) VALUES (?, ?, ?)";

        try (PreparedStatement ps = connection.prepareStatement(query)) {
            ps.setString(1, sl_no);
            ps.setString(2, name);
            ps.setInt(3, mark);

            int rowsInserted = ps.executeUpdate();

            if (rowsInserted > 0) {
                System.out.println("Inserted: " + sl_no + ", " + name + ", " + mark);
            }
        } catch (Exception e) {
            System.out.println("Insert failed: " + e.getMessage());
        }
    }
    public void drop_table(String table_name){
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();
        String query ="drop table "+table_name;
        try(PreparedStatement ps = connection.prepareStatement(query)){
            ps.executeUpdate();
        }catch (Exception e){
            System.out.println("Drop table failed:"+ e.getMessage());
        }
    }

    public void read_data() {
        DB_Connection obj_DB_Connection = new DB_Connection();
        Connection connection = obj_DB_Connection.get_connection();

        String query = "SELECT * FROM student";

        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(query)) {
            System.out.println("\n--- Student Records ---");
            while (rs.next()) {
                String sl_no = rs.getString("sl_no");
                String name = rs.getString("name");
                int mark = rs.getInt("mark");

                System.out.println("Sl_No: " + sl_no + ", Name: " + name + ", Mark: " + mark);
            }
        } catch (Exception e) {
            System.out.println("Read failed: " + e.getMessage());
        }
    }
}

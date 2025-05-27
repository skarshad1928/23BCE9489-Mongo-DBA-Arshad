// 1. Create or switch to a database
use mydatabase;

// 2. Create a collection and insert documents
db.students.insertOne({ name: "Alice", age: 21, department: "CSE" });
db.students.insertMany([
  { name: "Bob", age: 22, department: "ECE" },
  { name: "Charlie", age: 20, department: "MECH" }
]);

// 3. Find all documents
print("All Students:");
db.students.find().forEach(printjson);

// 4. Find documents with condition
print("CSE Students:");
db.students.find({ department: "CSE" }).forEach(printjson);

// 5. Update a document
db.students.updateOne(
  { name: "Alice" },
  { $set: { age: 22 } }
);

// 6. Delete a document
db.students.deleteOne({ name: "Charlie" });

// 7. Count documents
print("Total students: " + db.students.countDocuments());

// 8. Show all collections
show collections;

// 9. Drop collection (optional)
// db.students.drop();

// 10. Drop database (optional)
// use mydatabase;
// db.dropDatabase();

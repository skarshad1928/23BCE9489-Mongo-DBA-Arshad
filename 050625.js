# Connect to MongoDB
mongo

# OR connect directly to a specific database
mongo "mongodb://localhost:27017/mongoDb"

# Show all databases
show dbs

# Switch to a specific database
use mongoDb

# Show all collections in the current database
show collections

# Insert a document into 'students' collection
db.students.insertOne({ name: "John", age: 22, course: "Math" })

# Insert multiple documents
db.students.insertMany([
  { name: "Alice", age: 21, course: "Science" },
  { name: "Bob", age: 23, course: "History" }
])

# Find all documents in the 'students' collection
db.students.find()

# Find documents with a filter condition
db.students.find({ age: { $gt: 20 } })

# Find one document
db.students.findOne({ name: "John" })

# Update a single document
db.students.updateOne(
  { name: "John" },
  { $set: { age: 23 } }
)

# Update multiple documents
db.students.updateMany(
  { course: "Math" },
  { $set: { course: "Mathematics" } }
)

# Delete one document
db.students.deleteOne({ name: "John" })

# Delete multiple documents
db.students.deleteMany({ course: "History" })

# Count documents in a collection
db.students.countDocuments()

# Drop a collection
db.students.drop()

# Create a new collection
db.createCollection("teachers")

# Insert document into new collection
db.teachers.insertOne({ name: "Dr. Smith", subject: "Physics" })

# Rename a collection
db.teachers.renameCollection("faculty")

# Get stats about the collection
db.students.stats()

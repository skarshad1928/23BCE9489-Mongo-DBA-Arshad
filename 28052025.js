use test
db
db.vit
use vit
show databases
db.student.insertOne({name: "arshad",company:"vit"})
db.student.drop()
db.student1.drop()

use latest_db
show collections
db.students.find()
db.student.insertMany([{name:"ranjeet",age:44,college:"Vit-Ap"},{name:"ranveer",age:45,college:"Drama"}])
db.students.insertMany([{name:"Ravi teja",age:54,colllege:"lanka"},{height:163,place:"rampur",name:"Kaham"}])

let students = [];
for (let i = 1; i <= 70; i++) {
  students.push({
    name: "Student" + i,
    age: 18 + (i % 5),
    department: i % 2 === 0 ? "CSE" : "ECE",
    roll: "R" + (1000 + i)
  });
}
db.student.insertMany(students);

db.students.insertMany([
  { _id: 1, name: "Arshad",   mark: 92, location: "Vellore" },
  { _id: 2, name: "Nithin",   mark: 85, location: "Chennai" },
  { _id: 3, name: "Priya",    mark: 78, location: "Mumbai" },
  { _id: 4, name: "Rahul",    mark: 88, location: "Delhi" },
  { _id: 5, name: "Sneha",    mark: 95, location: "Kolkata" }
]);

db.details.insertMany([
  { id: 1, name: "Udi", mark: 89, location: "Vellore" },
  { id: 2, name: "Arghya", mark: 91, location: "Kolkata" },
  { id: 3, name: "Ankit", mark: 76, location: "Patna" },
  { id: 4, name: "Shubham", mark: 84, location: "Delhi" },
  { id: 5, name: "Dev", mark: 95, location: "Mumbai" }
]);

db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01") , "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
]);

db.products.findOne()
db.products.findOne({_id:2})
db.products.find({_id:{$gte:2}})
db.products.findOne({name:{$eq:"SmartTablet"}})
db.products.findOne({_id:5},{name:1})
db.products.findOne({name:{$eq:"SmartTablet"}},{id:1,name:1})
db.products.findOne({name:{$eq:"SmartTablet"}},{id:1,name:1,releaseDate:1})
db.products.findOne({name:{$eq:"SmartTablet"}},{id:1,name:1,releaseDate:1,color:2})
db.products.findOne({_id:{$eq:5}},{id:1,name:1,releaseDate:1})
db.products.findOne({_id:{$eq:5}},{id:1,name:1,releaseDate:1,color:2})
db.products.find(
  { _id: 5 },
  { _id: 0, "color.1": 1 }
)

db.books.insertMany([
    { "_id" : 1, "title" : "Unlocking Android", "isbn" : "1933988673", "categories" : [ "Open Source", "Mobile" ] },
    { "_id" : 2, "title" : "Android in Action, Second Edition", "isbn" : "1935182722", "categories" : [ "Java" ] },
    { "_id" : 3, "title" : "Specification by Example", "isbn" : "1617290084", "categories" : [ "Software Engineering" ] },
    { "_id" : 4, "title" : "Flex 3 in Action", "isbn" : "1933988746", "categories" : [ "Internet" ] },
    { "_id" : 5, "title" : "Flex 4 in Action", "isbn" : "1935182420", "categories" : [ "Internet" ] },
    { "_id" : 6, "title" : "Collective Intelligence in Action", "isbn" : "1933988312", "categories" : [ "Internet" ] },
    { "_id" : 7, "title" : "Zend Framework in Action", "isbn" : "1933988320", "categories" : [ "Web Development" ] },
    { "_id" : 8, "title" : "Flex on Java", "isbn" : "1933988797", "categories" : [ "Internet" ] },
    { "_id" : 9, "title" : "Griffon in Action", "isbn" : "1935182234", "categories" : [ "Java" ] },
    { "_id" : 10, "title" : "OSGi in Depth", "isbn" : "193518217X", "categories" : [ "Java" ] },
    { "_id" : 11, "title" : "Flexible Rails", "isbn" : "1933988509", "categories" : [ "Web Development" ] },
    { "_id" : 13, "title" : "Hello! Flex 4", "isbn" : "1933988762", "categories" : [ "Internet" ] },
    { "_id" : 14, "title" : "Coffeehouse", "isbn" : "1884777384", "categories" : [ "Miscellaneous" ] },
    { "_id" : 15, "title" : "Team Foundation Server 2008 in Action", "isbn" : "1933988592", "categories" : [ "Microsoft .NET" ] },
    { "_id" : 16, "title" : "Brownfield Application Development in .NET", "isbn" : "1933988711", "categories" : [ "Microsoft" ] },
    { "_id" : 17, "title" : "MongoDB in Action", "isbn" : "1935182870", "categories" : [ "Next Generation Databases" ] },
    { "_id" : 18, "title" : "Distributed Application Development with PowerBuilder 6.0", "isbn" : "1884777686", "categories" : [ "PowerBuilder" ] },
    { "_id" : 19, "title" : "Jaguar Development with PowerBuilder 7", "isbn" : "1884777864", "categories" : [ "PowerBuilder", "Client-Server" ] },
    { "_id" : 20, "title" : "Taming Jaguar", "isbn" : "1884777686", "categories" : [ "PowerBuilder" ] },
    { "_id" : 21, "title" : "3D User Interfaces with Java 3D", "isbn" : "1884777902", "categories" : [ "Java", "Computer Graphics" ] },
    { "_id" : 22, "title" : "Hibernate in Action", "isbn" : "193239415X", "categories" : [ "Java" ] },
    { "_id" : 23, "title" : "Hibernate in Action (Chinese Edition)", "categories" : [ "Java" ] },
    { "_id" : 24, "title" : "Java Persistence with Hibernate", "isbn" : "1932394885", "categories" : [ "Java" ] },
    { "_id" : 25, "title" : "JSTL in Action", "isbn" : "1930110529", "categories" : [ "Internet" ] },
    { "_id" : 26, "title" : "iBATIS in Action", "isbn" : "1932394826", "categories" : [ "Web Development" ] },
    { "_id" : 27, "title" : "Designing Hard Software", "isbn" : "133046192", "categories" : [ "Object-Oriented Programming", "S" ] },
    { "_id" : 28, "title" : "Hibernate Search in Action", "isbn" : "1933988649", "categories" : [ "Java" ] },
    { "_id" : 29, "title" : "jQuery in Action", "isbn" : "1933988355", "categories" : [ "Web Development" ] },
    { "_id" : 30, "title" : "jQuery in Action, Second Edition", "isbn" : "1935182323", "categories" : [ "Java" ] }
]);

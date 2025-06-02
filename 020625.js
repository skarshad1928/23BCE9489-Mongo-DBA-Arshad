// Switch to database 'vit'
use vit

// Initial find all products
db.products.find()

// Find products with both "black" and "white" colors (two variations)
db.products.find(
  {
    color: {
      $all: ["black", "white"]
    }
  },
  {
    name: 1,
    color: 1
  }
)

db.products.find(
  {color: {$all:["black","white"]}},
  {name:1, color:1}
)

// Alternative query using $and and $in for same result
db.products.find(
  {$and: [
    {color: {$in:["black"]}}, 
    {color: {$in:["white"]}}
  ]},
  {name:1, color:1}
)

// Drop products collection
db.products.drop()

// Insert products (first attempt failed due to duplicate _id)
// Successful insertion after drop:
db.products.insertMany([
  { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
  { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
  { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
  { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
  { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] }
])

// Find products with storage containing values < 128
db.products.find(
  {
    storage: {
      $elemMatch: {
        $lt: 128
      }
    }
  },
  {
    name: 1,
    storage: 1
  }
)

// Drop and recreate collection with additional documents
db.products.drop()
db.products.insertMany([
  { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },
  { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },
  { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },
  { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },
  { "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] },
  { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "black" ], "storage" : [ 1024 ] },
  { "_id" : 7, "name" : "xReader", "price" : null, "spec" : { "ram" : 64, "screen" : 6.7, "cpu" : 3.66 }, "color" : [ "black", "white" ], "storage" : [ 128 ] }
])

// Sorting queries with price exists
db.products.find({'price':{$exists:1}}).sort({price:1})
db.products.find({'price':{$exists:1}}).sort({price:1,_id:1})
db.products.find({'price':{$exists:1}}).sort({price:-1})
db.products.find({'price':{$exists:1}}).sort({price:1,name:1})
db.products.find({'price':{$exists:1}}).sort({price:1,name:-1})

// Find and sort by releaseDate with limit
db.products.find(
  {releaseDate:{$exists:1}},
  {name:1, releaseDate:1}
).sort({releaseDate:1}).limit(2)

// Find even _id documents with releaseDate, sorted by releaseDate
db.products.find(
  {
    releaseDate: { $exists: true },
    _id: { $mod: [2, 0] }
  },
  {
    name: 1,
    releaseDate: 1
  }
).sort({ releaseDate: 1 }).limit(5)
//updateMany will update in all where it satisfies

 db.products.updateOne({_id:1}, {$set: {price: 9000}})

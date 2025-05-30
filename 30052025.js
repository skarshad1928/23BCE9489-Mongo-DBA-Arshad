// Database operations
show databases
use latest_db
db.dropDatabase()
use operators

// First products collection setup and queries
db.products.drop()
db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
])

// Query operations on first collection
db.products.find({"spec.ram": {"$eq": 4}})
db.products.find({"spec.ram": {"$eq": 4}},{name:1,_id:0})
db.products.find({"color":"black"},{name:1,_id:0})
db.products.find({ "price": { $lt:500 } }, { name: 1, _id: 0 })
db.products.find({"spec.screen":{$lt:7.0}},{name:1,_id:0})
db.products.find({"storage":128},{name:1,storage:1,_id:0})
db.products.find({"spec.cpu":{$lte:3.66}},{name:1,"spec.cpu":1,_id:0})
db.products.find({"releaseDate": { "$lte": ISODate("2015-01-01") }})

// Second products collection setup (after first drop)
db.products.drop()
db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]},
    { "_id" : 6, "name" : "xWidget", "spec" : { "ram" : 64, "screen" : 9.7, "cpu" : 3.66 },"color":["black"],"storage":[1024]}
])

// Query operations on second collection
db.products.find({"spec.cpu":{$ne:3.66}},{name:1,"spec.cpu":1,_id:0})
db.products.find({price:{$in:[699,799]}},{price:1})
db.products.find({price:{$nin:[699,799]}},{price:1})

// Third products collection setup (after second drop)
db.products.drop()
db.products.insertMany([
    { "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate": ISODate("2011-05-14"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 },"color":["white","black"],"storage":[64,128,256]},
    { "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate": ISODate("2011-09-01"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 },"color":["white","black","purple"],"storage":[128,256,512]},
    { "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate": ISODate("2015-01-14"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 },"color":["blue"],"storage":[16,64,128]},
    { "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate": ISODate("2020-05-14"),"spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256,1024]},
    { "_id" : 5, "name" : "SmartPhone", "price" : 599,"releaseDate": ISODate("2022-09-14"), "spec" : { "ram" : 4, "screen" : 5.7, "cpu" : 1.66 },"color":["white","orange","gold","gray"],"storage":[128,256]}
])

// Query operations on third collection
db.products.find({color: {$nin: [/^g+/, /^w+/]}}, {name:1, color:1})
db.products.find({color: {$in: [/^g+/, /^w+/]}}, {name:1, color:1})
db.products.find({color: {$in: [/or/]}}, {name:1, color:1})
db.products.find({color: {$in: [/gr/]}}, {name:1, color:1})
db.products.find({color: {$in: [/blue/]}}, {name:1, color:1})
db.products.find({name: /smart/i}, {_id:0, name:1})
db.products.find({color: {$in: [/ue$/]}}, {name:1, color:1})
db.products.find({color: {$in: [/^.+or.+$/]}}, {name:1, color:1})

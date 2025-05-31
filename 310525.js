db.products.find(
  { price: { $gt: 700, $lt: 800 } },
  { name: 1, price: 1, _id: 0 }
)

db.products.find({
  $or: [
    { price: { $lte: 700 } },
    { price: { $gte: 800 } }
  ]
}, { name: 1, price: 1 })

db.products.find({
  $or: [
    { price: { $lt: 700 } },
    { price: { $gt: 800 } }
  ]
}, { name: 1, price: 1, _id: 0 })

db.products.find({
  $and: [
    { color: { $regex: /^b/i } },
    { "spec.ram": { $gt: 4 } }
  ]
}, { name: 1, color: 1, "spec.ram": 1 })

db.products.find({
  $and: [
    { color: { $in: [/^b/i] } },
    { "spec.ram": { $gt: 4 } }
  ]
}, { name: 1, color: 1, "spec.ram": 1, _id: 0 })

db.products.find({
  $and: [
    { color: "white" },
    { storage: { $gt: 64 } }
  ]
}, { name: 1, storage: 1, color: 1 })

db.products.find({
  $and: [
    { "spec.storage": { $gt: 64 } },
    { color: "white" }
  ]
}, { _id: 0, name: 1, color: 1, "spec.ram": 1 })

db.products.find({
  $and: [
    { color: "white" },
    { storage: { $elemMatch: { $gt: 64 } } }
  ]
}, { name: 1, color: 1, storage: 1, _id: 0 })

db.products.find(
  { name: { $not: /smart/i } },
  { name: 1, _id: 0 }
)

db.products.find({
  name: { $not: { $regex: "Smart" } }
})

db.products.find({
  name: { $not: { $in: [/smart/i] } }
}, { name: 1 })

db.products.find({
  $nor: [
    { price: 899 },
    { color: "gold" }
  ]
}, { name: 1, price: 1, color: 1 })

db.products.find({
  $nor: [
    { price: { $eq: 899 } },
    { color: { $eq: "gold" } }
  ]
}, { name: 1, price: 1, color: 1 })

db.products.find(
  { price: { $type: 4 } },
  { name: 1, price: 1 }
)

db.products.find(
  { price: { $type: [4, 16] } },
  { name: 1, price: 1 }
)

db.products.find({
  price: { $type: ["double", "string"] }
})

db.products.find({
  price: { 
    $exists: true,
    $type: "array",
    $elemMatch: { $gt: 600 }
  }
}, { name: 1, price: 1, _id: 0 })

db.products.find({
  price: { 
    $exists: true,
    $type: 4,
    $gt: 600
  }
}, { name: 1, price: 1 })

db.products.find(
  { color: { $size: 2 } },
  { name: 1, color: 1 }
)

db.products.find({
  $nor: [
    { releaseDate: { $lte: new ISODate("2022-09-14") } },
    { price: { $lte: 899 } }
  ]
}, { name: 1 })

db.products.find({
  $nor: [
    { price: { $lt: 700 } },
    { "spec.cpu": { $gt: 3.0 } }
  ]
}, {
  name: 1,
  price: 1,
  "spec.cpu": 1
})

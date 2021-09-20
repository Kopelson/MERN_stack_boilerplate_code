const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/eCommerceDB",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//Seed the database
const Seed = [
]

db.nameOfCollection.deleteMany({})
  .then(() => db.nameOfCollection.collection.insertMany(Seed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


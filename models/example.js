const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
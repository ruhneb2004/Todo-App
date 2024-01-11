const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ruhneb:PxR29CfqDjCGrZS@cluster0.ci51xdx.mongodb.net/"
);
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
  },
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};

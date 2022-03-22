// Q. create a user schema with following fields and type
// 1.name -> string
// 2.email -> string
// 3.age -> number
let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Q. update user schema to make email lowercase and default age to be 0.
//updated user Schema
UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    default: 0,
  },
  age: Number,
});
// Q. Update user schema
// - contains password field with minimum 5 characters
// - add createdAt field of type date and default it to current date.
UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      lowercase: true,
      default: 0,
    },
    age: Number,
    password: {
      type: String,
      min: 5,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
    favourite: [String],
  },
  { timestamps: true }
);

let User = mongoose.model("User", UserSchema);
module.exports = User;

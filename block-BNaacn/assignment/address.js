// village -> String
// city -> String
// state -> String
// pin -> number
// user -> ObjectId of User from user schema
let mongoose = require("mongoose");
let AddressSchema = new mongoose.Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: mongoose.Schema.Types.ObjectId,
});
// Q. Update address schema to contain required validators for state and city field.
AddressSchema = new mongoose.Schema(
  {
    village: String,
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: Number,
    user: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

let Address = mongoose.model("Address", AddressSchema);
module.exports = Address;

const express = require("express");
const { schema } = require("./model/article");
const mongoose = require("mongoose");
const app = express();
// Requiring  all the  blog schemas
let Comments = require("./model/comment");
let Articles = require("./model/article");
let Users = require("./model/user");

// Connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/test", (err) => {
  console.log(err ? err : "Connected to the test database successfully");
});
// Listening on  the port 2K19
app.listen(2019, () => {
  console.log("Server is running on the port 2K19");
});

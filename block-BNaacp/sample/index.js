const express = require("express");
const app = express();
let mongoose = require("mongoose");
const { findById } = require("./models/user");
let Users = require("./models/user");

//Creating a connection between the database
mongoose.connect("mongodb://127.0.0.1:27017/testdatabase", (err) => {
  console.log(err ? err : "Connection Made sucessfully");
});

// adding a middelware for parsing  the data
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  Users.create(req.body, (err, user) => {
    res.json(user);
  });
});
// Query all the users from the database
Users.find({}, (err, allusers) => {
  res.json(allusers);
});

// Q. query a single document(user) using mongoose
app.get("/users/:id", (req, res) => {
  let userid = req.params.id;
  console.log(userid);
  //   find by using the find only  this will return the result in the form of an array of objects
  Users.find({ _id: userid }, (err, user) => {
    res.json(user);
  });
  //find the document in the database by using the filterOne
  Users.findOne({ _id: userid }, (err, user) => {
    res.json(user);
  });
  //Find the document by using the findById
  Users.findById(userid, (err, user) => {
    res.json(user);
  });
});

// Difference between the find and findOne and findById
// ***** find *******
// find returns an array of  the document . the usecase of the find is to find multiple document so it always return an array weather one match is found
// ********* Find One **********
// find returns a single document .The use case is only to reutrn a single document . in find you can pass any query and find the document but you always got a single document or the first found match
// ************ findById *************
// find by  id  is also used to  get single document . Buy here you can not pass queries here you have to find find the document only by using the  id

app.put("/users/:id", (req, res) => {
  let userid = req.params.id;
  Users.updateOne(
    { _id: userid },
    req.body,
    { new: true },
    (err, updatedData) => {
      // console.log(err ,updatedData);
      res.send("user is updated  successfully");
    }
  );

  // update by the id
  Users.findByIdAndUpdate(
    userid,
    req.body,
    { new: true },
    (err, updatedData) => {
      res.send("user is updated  successfully");
    }
  );
});

// Delete the user in the database form here

app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  Users.findByIdAndDelete(id, (err, user) => {
    res.send("user is Deleted successfully");
  });
});

//Running the server on the port 6000 port
app.listen(2000, () => {
  console.log("server is running the port 6K");
});

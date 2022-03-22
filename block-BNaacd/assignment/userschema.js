let mongoose = require('mongoose');
let Schema  = mongoose.Schema;

// create a user schema with following fields and type
let userSchema = new Schema({
    name : String,
    email : String , 
    age  : Number,
});


// update user schema to make email lowercase and default age to be 0.
let updatedSchema= new Schema({
    name : String,
    email :{
        type : String,
        lowercase : true,
    } ,
    age  :{
        type : Number,
        default : 0,
    },
})

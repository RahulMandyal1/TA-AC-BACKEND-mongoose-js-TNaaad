let mongoose= require('mongoose');

let UserSchema = new mongoose.Schema({
    name : String,
    email :{
        type : String,
        lowercase : true,
    } ,
    age  :{
        type : Number,
        default : 0,
    },
    favourites : [String],
    marks : [Number],
    password : {
        type : String ,
        min : 5 ,
        max : 15,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
});


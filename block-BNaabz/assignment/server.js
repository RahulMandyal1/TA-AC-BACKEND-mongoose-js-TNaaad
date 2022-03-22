let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/firstDatabase',(err)=>{
    console.log(err?err : 'Connected to  the database succesfully');
})
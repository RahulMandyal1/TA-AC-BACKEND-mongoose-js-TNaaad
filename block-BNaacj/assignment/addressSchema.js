let mongoose  = require('mongoose');
let AddressSchema  = new mongoose.Schema({
    village : String,
    city : String ,
    state : String,
    pin : Number ,
    user : mongoose.Schema.Types.ObjectId
})
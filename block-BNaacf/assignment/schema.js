let mongoose= require('mongoose');

let UserSchema = new mongoose.Schema({
    favourites : [String],
    marks : [Number]
});

let AddressSchema  = new mongoose.Schema({
    village : String,
    city : String ,
    state : String,
    pin : Number ,
    user : mongoose.Schema.Types.ObjectId
})
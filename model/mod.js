const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const user = new Schema({
        name:{
            type: String,
            require: true
        },
        Email: {
            type: String,
            require: true 
        },
        password: {
            type: String,
            require: true
        }
 })
module.exports = mongoose.model('login',user);
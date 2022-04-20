const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/rout");
const app = express(); 
app.use(express.json());
app.use("/login",router)
mongoose.connect("mongodb+srv://user:1q2w3e4r@cluster0.uhv3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log("Can't connect to MongoDB"))
.then(()=>{
app.listen(4630);
}).catch((err)=>console.log(err));

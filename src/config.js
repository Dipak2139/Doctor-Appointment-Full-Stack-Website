const { name } = require("ejs");
const mongoose = require("mongoose");
const { type } = require("os");

const connect =  mongoose.connect("mongodb://localhost:27017/Hospital1")

// check database connection
connect.then(()=>{
    console.log("Database connected")
    console.log("1")
}).catch(()=>{
    console.log("Database cannot be connected")
})

//creatin a schema

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    token:
    [
        {
            type: String,
            required: true  
        }
    ]
    
})

//collection part

const collection = new mongoose.model("users",loginSchema);
// const collection1 = new mongoose.model("users",loginSchema);


module.exports  = collection
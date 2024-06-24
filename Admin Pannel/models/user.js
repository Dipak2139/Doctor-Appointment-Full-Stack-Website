const { name } = require("ejs");
const mongoose1 = require("mongoose");
const { type } = require("os");

const connect1 =  mongoose1.connect("mongodb://localhost:27017/Hospital1")

// check database connection
connect1.then(()=>{
    console.log("Database connected")
}).catch(()=>{
    console.log("Database cannot be connected")
})

//creatin a schema

const loginSchema1 = new mongoose1.Schema({
    Name: {
        type: String
    },

    Number: {
        type: String
    },

    Gender: {
        type: String
    },

    Specialist: {
        type: String
    },

    Doctor: {
        type: String
    },

    Appointment: {
        type: String
    },

    address: {
        type: String
    }
    

    // postal: {
    //     type: String,
    //     required: true
    // }, 

   
});

//collection part

const user = new mongoose1.model("appoints",loginSchema1);

module.exports  = user
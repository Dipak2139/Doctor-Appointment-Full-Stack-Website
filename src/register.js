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
        type: String,
        required: true
    },

    // email : {
    //     type: String,
    //     required: true
    // },

    Number: {
        type: String,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    Specialist: {
        type: String,
        required: true
    },

    Doctor: {
        type: String,
        required: true
    },

    Appointment: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    }, 

    Link: {
        type: String,
        required: true
    }

    

   
});

//collection part

const collection1 = new mongoose1.model("appoints",loginSchema1);

module.exports  = collection1
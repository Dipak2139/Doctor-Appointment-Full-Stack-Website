// const { name } = require("ejs");
// const mongoose2 = require("mongoose");
// const { type } = require("os");

// const connect2 =  mongoose2.connect("mongodb://localhost:27017/Hospital1")

// // check database connection
// connect2.then(()=>{
//     console.log("Database connected")
// }).catch(()=>{
//     console.log("Database cannot be connected")
// })

// //creatin a schema

// const loginSchema2 = new mongoose2.Schema({
//     Name: {
//         type: String,
//         required: true
//     },

//     // email : {
//     //     type: String,
//     //     required: true
//     // },

//     Number: {
//         type: String,
//         required: true
//     },

//     Specialist: {
//         type: String,
//         required: true
//     },

//     Doctor: {
//         type: String,
//         required: true
//     },
  
// });

// //collection part

// const collection2 = new mongoose2.model("appoints",loginSchema2);

// module.exports  = collection2
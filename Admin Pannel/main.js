// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');


const app = express();
app.use(express.static("public"));

const PORT= process.env.PORT || 4000;

// Database connection
mongoose.connect("mongodb://localhost:27017/Hospital1")
.then(()=>{
    
app.listen(PORT, ()=>{
    console.log("Server started at port no. 5000")
});

})

.catch((error)=>{
    console.log(error)
})

// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret: "my secret key",
    saveUninitialized:true,
    resave: false,
})
);

app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static('uploads'));

// set template engine
app.set('view engine', 'ejs');


// route prefix
app.use("",require("./routes/routes1"))

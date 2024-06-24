const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const session = require('express-session');

const cookieParser=require("cookie-parser")
const bcrypt = require("bcrypt");
const collection = require("./config");
const collection1 = require("./register");
// const collection2 = require("./models/appointments")
// doctor import routes
const cardiology = require('../routes/cardiology')
const neurology = require('../routes/neurology')
const oncology = require('../routes/oncology')
const gastro = require('../routes/gastro')
// 
const ent = require('../routes/ent')
const dentices = require('../routes/dentices')
const general = require('../routes/general')
const urology = require('../routes/urology')
const generalsurgery = require('../routes/generalsurgery')
const orthopedics = require('../routes/orthopedic')
const dermotology = require('../routes/dermotology')
const opthamology = require('../routes/opthamology')
const internalmedicine = require('../routes/internalmedicine')
const radiationoncology = require('../routes/radiationoncology')

const authuser = require("./middleware/userauth")
const logoutauth = require("./middleware/logoutauth")








const exp = require("constants");
const { render } = require("ejs");

const app = express()
app.use(express.static("public"));
app.use(cookieParser());


// managing doctors routes
app.use('/cardiology', cardiology);
app.use('/neurology', neurology);
app.use('/oncology', oncology);
app.use('/gastro', gastro);
app.use('/ent', ent);
app.use('/dentices', dentices);
app.use('/general', general);
app.use('/urology', urology);
app.use("/generalsurgery",generalsurgery);
app.use("/orthopedic",orthopedics);
app.use("/dermotology",dermotology);
app.use("/opthalmology", opthamology);
app.use("/internalmedicine",internalmedicine);
app.use("/radiationoncology",radiationoncology);


// convert data into json format
app.use(express.json())

app.use(express.urlencoded({extended: false}));

// new added
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

// set ejs as view engine
app.set('view engine', 'ejs');



// app.get("/",(req,res)=>{
//     res.render("main")
// });

app.get("/",(req,res)=>{
    const tokens = req.cookies.jwt;
    // console.log(tokens)
    if(req.cookies.jwt){
        const verify = jwt.verify(req.cookies.jwt,"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper")
        console.log("name;;;;");
        console.log(verify.name);
        res.render("cardiology",{name:verify.name})
    }
    else{
        res.render("main")
    }
})
// app.get("/login",(req,res)=>{
//     res.render("index");
// });

app.get("/home",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("login");
});

app.get("/second",(req,res)=>{
    res.render("home_secondpage");
});

app.get("/registration",(req,res)=>{
    res.render("registration");
});

app.get("/helpdesk",(req,res)=>{
    res.render("helpdesk");
});

// // Edit an user route
// // Edit an user route
// app.get("/edit/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const user = await collection2.findById(id);
//       console.log(user);
  
//       if (!user) {
//         return res.redirect('/');
//       }
  
//       res.render('edit_users', {
//         title: "Edit User",
//         user: user
//       });
//     } catch (err) {
//       console.error(err);
//       res.redirect('/');
//     }
//   });


app.get("/index",authuser, async(req,res)=>{
    const result = await collection.findOne({name: req.name});

    // console.log(result);
    const name = result.name;
    const email = result.email;

    res.render("index",{name,email});
});

app.get("/appointments", async (req, res) => {
    const tokens = req.cookies.jwt;
    console.log(tokens)
    if(req.cookies.jwt){
        const verify = jwt.verify(req.cookies.jwt,"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper");
        linkname = verify.name;
        console.log("registeerrrr");
        console.log(linkname);
        // res.render("cardiology",{name:verify.name})
    }
    try {
      const users = await collection1.find({Link: linkname});
      console.log("appointments;;");
      console.log(users)
      res.render('appointments', {
        title: 'Home Page',
        users,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get("/logout", logoutauth, async(req,res)=>{
    try {
        const user2 =  await collection.findOne({name:req.name})
        console.log("looooo");
        console.log(user2.token)
        // console.log("")
        res.clearCookie("jwt")
        user2.token=[]
        await user2.save();
        res.render("login");

        // console.log(token)
        console.log("logout successfull")
        // res.render("main")


    } 
    catch (error) {
     res.status(500).json(error)   
    }
})



// hashing password
async function hashPass(password){
    const res = await bcrypt.hash(password,10);
    return res
}

async function compare(userPass,hashPass){
    const res = await bcrypt.compare(userPass,hashPass);
    return res
}


//Register user
app.post("/signup", async(req,res)=>{
    
    // check if the user already exist
    const existingUser = await collection.findOne({name:req.body.username1});
    if(existingUser){
        res.send("User already exist")
    }
    else{

        // Generating JWT token
        // const token = jwt.sign({name:req.body.username1,email:req.body.email1},"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper")
        // console.log(token)

        // res.cookie("jwt",token,{
        //     maxAge:300000,
        //     httpOnly:true
        // })

        // const data = {  
        //     name: req.body.username1,
        //     password:await hashPass( req.body.password1),
        //     email: req.body.email1,
        //     token:token
        // }
        // await collection.insertMany([data])

        const data = {
            name: req.body.username1,
            password:await hashPass( req.body.password1),
             email: req.body.email1,
        }

        await collection.insertMany([data])
        res.redirect('/register');


        
    }      
});


// login user
app.post("/login", async(req,res)=>{
    try{
        const check = await collection.findOne({email:req.body.email2});
        console.log(check)
        if(!check){
            return res.send("user cannot be found")
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password2, check.password)
        if(!isPasswordMatch){
            return res.send("please ente a correct password")
        }
        else{
        const token = jwt.sign({name:check.name,email:check.email},"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper")
        // console.log(token)
        

            res.cookie("jwt",token,{  
                maxAge:3600000,
                httpOnly:true
            })
            const data1 ={
                token:token
            }
            // await collection.insertMany(data1)
            check.token = token
            await check.save()
         



            return res.render("cardiology")
        }
    }catch{
        res.send("Wrong Details")
    }
})

// appointment details
app.post("/register", async(req,res)=>{
    const tokens = req.cookies.jwt;
    console.log(tokens)
    if(req.cookies.jwt){
        const verify = jwt.verify(req.cookies.jwt,"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper");
        linkname = verify.name;
        console.log("registeerrrr");
        console.log(linkname);
        res.render("cardiology",{name:verify.name})
    }
    // else{
    //     res.render("main")
    // }
   
    const data1 = {  
        Name: req.body.name1,
        // email: req.body.email1,
        Number: req.body.number1,
        Gender: req.body.gender,
        Specialist: req.body.specialist,
        Doctor: req.body.doctor,
        Appointment: req.body.appointment,
        address: req.body.address1,
        Link: linkname,

    }
    // check if the user already exist
    const existingUser = await collection1.findOne({name: data1.Name});
    if(existingUser){
        res.send("User already exist")
        alert("User already Exist")
    }
    else{
        // // hash the password using bcrypt
        // const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(data.password, saltRounds)
        // data.password = hashedPassword;
        const userdata = await collection1.insertMany(data1);
        // alert("Appointment Book Successfully")
        res.render("cardiology")

    
        // console.log(userdata)

    }      
    
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`);
})
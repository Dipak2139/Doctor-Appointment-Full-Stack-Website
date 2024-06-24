const express = require('express');
const router = express.Router();
const User = require("../models/user");
const User2 = require("../models/user1");





router.get('/userpannel', async(req,res)=>{
  try {
    const users1 = await User2.find();
    // console.log(users)
    res.render('index2', {
      title: 'Home Page',
      users1,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Insert user data into database 
router.post('/add', async (req, res) => {
  try {
    const user = new User({
        Name: req.body.name1,
        Number: req.body.number1,
        Gender: req.body.gender,
        Specialist: req.body.specialist,
        Doctor: req.body.doctor,
        Appointment: req.body.appointment,
        address: req.body.address1,
    })
    await user.save();
    req.session.message = {
      type: 'success',
      message: 'User added successfully'
    };
    res.redirect('/');
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Insert user data into database 
router.post('/add2', async (req, res) => {
  try {
    
    const user = new User2 ({
        name: req.body.name2,
        email: req.body.email2,
       
    });

    await user.save();


    req.session.message = {
      type: "success",
      message: "User Added Successfully",
    };
    res.redirect('/userpannel');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message, type: 'danger' });
  }
});

router.get("/add2", (req, res) => {
  res.render('add_users2', { title: "Add Users" })
});


// check admin login and password
router.get("/",(req,res)=>{
  res.render('login')
})

router.post('/check', (req,res)=>{
  const name = "Dipak";
  const password = "Dipak2002";
  
  const login_name = req.body.username;
  console.log(login_name);
  const login_pass = req.body.password;

  if( name == login_name && password == login_pass){
    res.redirect("/main");
  }
  else{
    res.send("User Credentials not matched");
  }

})

//get all users data
router.get("/main", async (req, res) => {
  try {
    const users = await User.find();
    // console.log(users)
    res.render('index', {
      title: 'Home Page',
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/add", (req, res) => {
  res.render('add_users', { title: "Add Users" })
});

// Edit an user route
router.get("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    console.log("kkkkkkkk")
    console.log(user);

    if (!user) {
      return res.redirect('/main');
    }

    res.render('edit_users', {
      title: "Edit User",
      user: user
    });
  } catch (err) {
    console.error(err);
    res.redirect('/main');
  }
});



// Edit an user route
router.get("/edit2/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User2.findById(id);
    console.log(user);

    if (!user) {
      return res.redirect('/');
    }

    res.render('edit_users2', {
      title: "Edit User",
      user: user
    });
  } catch (err) {
    console.error(err);
    res.redirect('/main');
  }
});

// Update user route
router.post('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, {
        Name: req.body.name1,
        Number: req.body.number1,
        Gender: req.body.gender,
        Specialist: req.body.specialist,
        Doctor: req.body.doctor,
        Appointment: req.body.appointment,
        address: req.body.address1,
    });

    await user.save();


    req.session.message = {
      type: "success",
      message: "User Updated Successfully",
    };
    res.redirect('/main');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message, type: 'danger' });
  }
});


// Update user route
router.post('/update2/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User2.findByIdAndUpdate(id, {
        name: req.body.name2,
        email: req.body.email2,
       
    });

    await user.save();


    req.session.message = {
      type: "success",
      message: "User Updated Successfully",
    };
    res.redirect('/userpannel');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message, type: 'danger' });
  }
});

// Delete appointmnet route
router.get('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    req.session.message = {
      type: "info",
      message: "User deleted Successfully!"
    };
    res.redirect('/main');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});


// Delete user route
router.get('/delete2/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await User2.findByIdAndDelete(id);

    req.session.message = {
      type: "info",
      message: "User deleted Successfully!"
    };
    res.redirect('/userpannel');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});
module.exports = router;

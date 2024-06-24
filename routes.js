const express = require('express');
const router = express.Router();
const User = require("../models/user");
const multer = require("multer");
const { type } = require('os');
// const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("image");

// Insert user data into database 
router.post('/add', upload, async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.filename
    })
    await user.save();
    req.session.message = {
      type: 'success',
      message: 'User added successfully'
    };
    res.redirect('/');
  }
  catch {
    res.status(500).json({ message: error.message });
  }


});

//get all users data

router.get("/", async (req, res) => {
  // User.find().exec((err,users)=>{
  //     if(err){
  //         res.json({message: err.message});
  //     }else{
  //         res.render('index', {
  //             title: 'Home Page',
  //             users: users,
  //         })
  //     }

  // })

  try {
    const users = await User.find();
    console.log(users);
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

    if (!user) {
      return res.redirect('/');
    }

    res.render('edit_users', {
      title: "Edit User",
      user: user
    });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});


// router.get("/edit/:id",(req,res)=>{
// let id = req.params.id;
// User.findById(id,(err,user)=>{
//     if(err){
//         res.redirect('/');
//     }else{
//         if(user==null){
//             res.redirect('/')
//         }
//         else{
//             res.render('edit_users',{title:"Edit User",
//                 user:user
//             })
//         }
//     }
// })

// })

// update user route

// router.post('/update/:id'.upload, (req,res)=>{
//     let id = req.params.id;
//     let new_image = '';

//     if(req.file){
//         new_image = req.file.filename;
//         try{
//             fs.unlinkSync('./uploads/'+req.body.old_img);
//         }catch(err){
//             console.log(err);
//         }
//     }
//     else{
//         new_image = req.body.old_image;
//     }

//     User.findByIdAndUpdate(id, {
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         image: new_image,
//     },(err,result) =>{
//         if(err){
//             res.json({message:err.message, type:'danger'});
//         }else{
//             req.session.message ={
//                 type: "success",
//                 message: "User Updated Successfully",
//             };
//             res.redirect('/')
//         }
//     })

// });

const fs = require('fs').promises;

router.post('/update/:id', upload, async (req, res) => {
  try {
    const id = req.params.id;
    let newImage = '';

    if (req.file) {
      newImage = req.file.filename;
      if (req.body.old_image) {
        await fs.unlink('./uploads/' + req.body.old_image);
      }
    } else {
      newImage = req.body.old_image;
    }

    await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: newImage,
    });

    req.session.message = {
      type: "success",
      message: "User Updated Successfully",
    };
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message, type: 'danger' });
  }
});


// delete user route


router.get('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (user && user.image !== "") {
      await fs.unlink("./uploads/" + user.image);
    }

    req.session.message = {
      type: "info",
      message: "User deleted Successfully!"
    };
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.json({ message: err.message });
  }
});

// router.get('/delete/:id', (req, res) => {
//   let id = req.params.id;
//   User.findByIdAndDelete(id, (err, result) => {
//     if (result.image != "") {
//       try {
//         fs.unlinkSyn("./uploads/" + result.image);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     if (err) {
//       res.json({ message: err.message });
//     } else {
//       req.session.message = {
//         type: "info",
//         message: "User deleted Successfully!"
//       };
//       res.redirect('/')
//     }
//   });

// });


module.exports = router;
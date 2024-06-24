const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)


// 
router.get('/', (req, res) => {
  res.render('cardiology')
  // res.send("dipak")
}), 

router.get('/goutam', (req, res) => {
    res.sendFile("/templates/cardiology/goutam.html", {root: __dirname})
    
  
})

router.get('/mahuaroy', (req, res) => {
   res.sendFile("/templates/cardiology/mahuaroy.html", {root: __dirname})

})


router.get('/sampadkumar', (req, res) => {
  res.sendFile("/templates/cardiology/sampadkumar.html", {root: __dirname})

})

router.get('/sibnarayan', (req, res) => {
  res.sendFile("/templates/cardiology/sibnarayan.html", {root: __dirname})

})

router.get('/tanmoy', (req, res) => {
  res.sendFile("/templates/cardiology/tanmoy.html", {root: __dirname})

})


module.exports = router
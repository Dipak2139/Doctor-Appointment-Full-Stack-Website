const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.render('dentices')
  // res.send("dipak")
}), 

router.get('/kaushal', (req, res) => {
    res.sendFile("/templates/dentist/kaushal.html", {root: __dirname})
    
  
})

router.get('/mahadevi', (req, res) => {
   res.sendFile("/templates/dentist/mahadevi.html", {root: __dirname})

})


router.get('/nabanita', (req, res) => {
  res.sendFile("/templates/dentist/nabanita.html", {root: __dirname})

})

router.get('/pallab', (req, res) => {
  res.sendFile("/templates/dentist/pallab.html", {root: __dirname})

})

router.get('/swarnava', (req, res) => {
  res.sendFile("/templates/dentist/swarnava.html", {root: __dirname})

})

module.exports = router
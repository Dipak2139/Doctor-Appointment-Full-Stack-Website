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
  res.render('oncology')
  // res.send("dipak")
}), 

router.get('/dibendu', (req, res) => {
    res.sendFile("/templates/oncology/dibendu.html", {root: __dirname})
    
  
})

router.get('/jaydipbanerjee', (req, res) => {
   res.sendFile("/templates/oncology/jaydipbanerjee.html", {root: __dirname})

})


router.get('/palashde', (req, res) => {
  res.sendFile("/templates/oncology/palashde.html", {root: __dirname})

})

router.get('/prasenjit', (req, res) => {
  res.sendFile("/templates/oncology/prasenjit.html", {root: __dirname})

})

router.get('/sayani', (req, res) => {
  res.sendFile("/templates/oncology/sayani.html", {root: __dirname})

})

module.exports = router
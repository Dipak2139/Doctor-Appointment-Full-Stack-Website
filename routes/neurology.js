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
  res.render('neurology')
  // res.send("dipak")
}), 

router.get('/arghyadeb', (req, res) => {
    res.sendFile("/templates/neurology/arghyadeb.html", {root: __dirname})
    
  
})

router.get('/arindamdas', (req, res) => {
   res.sendFile("/templates/neurology/arindamdas.html", {root: __dirname})

})


router.get('/debabrta', (req, res) => {
  res.sendFile("/templates/neurology/debabrta.html", {root: __dirname})

})

router.get('/samar', (req, res) => {
  res.sendFile("/templates/neurology/samar.html", {root: __dirname})

})

router.get('/sumitava', (req, res) => {
  res.sendFile("/templates/neurology/sumitava.html", {root: __dirname})

})

module.exports = router
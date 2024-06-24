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
  res.render('dermotology')
  // res.send("dipak")
}), 

router.get('/arun', (req, res) => {
    res.sendFile("/templates/dermotology/arun.html", {root: __dirname})
    
  
})

router.get('/debopriya', (req, res) => {
   res.sendFile("/templates/dermotology/debopriya.html", {root: __dirname})

})


router.get('/joliset', (req, res) => {
  res.sendFile("/templates/dermotology/joliset.html", {root: __dirname})

})

router.get('/pritam', (req, res) => {
  res.sendFile("/templates/dermotology/pritam.html", {root: __dirname})

})

router.get('/soumili', (req, res) => {
  res.sendFile("/templates/dermotology/soumili.html", {root: __dirname})

})

module.exports = router
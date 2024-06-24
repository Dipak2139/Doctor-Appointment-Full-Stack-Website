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
  res.render('urology')
  // res.send("dipak")
}), 

router.get('/amitghosh', (req, res) => {
    res.sendFile("/templates/urology/amitghosh.html", {root: __dirname})
    
  
})

router.get('/avishek', (req, res) => {
   res.sendFile("/templates/urology/avishek.html", {root: __dirname})

})


router.get('/rimimandal', (req, res) => {
  res.sendFile("/templates/urology/rimimandal.html", {root: __dirname})

})

router.get('/sandip', (req, res) => {
  res.sendFile("/templates/urology/sandip.html", {root: __dirname})

})

router.get('/soumalya', (req, res) => {
  res.sendFile("/templates/urology/soumalya.html", {root: __dirname})

})

module.exports = router
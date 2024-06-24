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
  res.render('gastro')
  // res.send("dipak")
}), 

router.get('/debasish', (req, res) => {
    res.sendFile("/templates/gastroenterology/debashish.html", {root: __dirname})
    
  
})

router.get('/debottam', (req, res) => {
   res.sendFile("/templates/gastroenterology/debottam.html", {root: __dirname})

})


router.get('/jaydeep', (req, res) => {
  res.sendFile("/templates/gastroenterology/jaydeep.html", {root: __dirname})

})

router.get('/pradeepta', (req, res) => {
  res.sendFile("/templates/gastroenterology/pradeepta.html", {root: __dirname})

})

router.get('/sanjoy', (req, res) => {
  res.sendFile("/templates/gastroenterology/sanjoy.html", {root: __dirname})

})

module.exports = router
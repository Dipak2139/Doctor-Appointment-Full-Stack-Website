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
  res.render('generalsurgery')
  // res.send("dipak")
}), 

router.get('/aadriti', (req, res) => {
    res.sendFile("/templates/generalsurgery/aadriti.html", {root: __dirname})
    
  
})

router.get('/amrita', (req, res) => {
   res.sendFile("/templates/generalsurgery/amrita.html", {root: __dirname})

})


router.get('/goutamroy', (req, res) => {
  res.sendFile("/templates/generalsurgery/goutamroy.html", {root: __dirname})

})

router.get('/jana', (req, res) => {
  res.sendFile("/templates/generalsurgery/jana.html", {root: __dirname})

})

router.get('/nourinislam', (req, res) => {
  res.sendFile("/templates/generalsurgery/nourinislam.html", {root: __dirname})

})

module.exports = router
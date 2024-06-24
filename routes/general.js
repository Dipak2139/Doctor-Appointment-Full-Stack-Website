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
  res.render('general')
  // res.send("dipak")
}), 

router.get('/debkumar', (req, res) => {
    res.sendFile("/templates/generalphysician/debkumar.html", {root: __dirname})
    
  
})

router.get('/debrata', (req, res) => {
   res.sendFile("/templates/generalphysician/debrata.html", {root: __dirname})

})


router.get('/moumita', (req, res) => {
  res.sendFile("/templates/generalphysician/moumita.html", {root: __dirname})

})

router.get('/pradeep', (req, res) => {
  res.sendFile("/templates/generalphysician/pradeep.html", {root: __dirname})

})

router.get('/tuba', (req, res) => {
  res.sendFile("/templates/generalphysician/tuba.html", {root: __dirname})

})

module.exports = router
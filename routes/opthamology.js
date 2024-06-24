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
  res.render('opthamology')
  // res.send("dipak")
}), 

router.get('/arjun', (req, res) => {
    res.sendFile("/templates/opthamology/arjun.html", {root: __dirname})
    
  
})

router.get('/debalina', (req, res) => {
   res.sendFile("/templates/opthamology/debalina.html", {root: __dirname})

})


router.get('/joydip', (req, res) => {
  res.sendFile("/templates/opthamology/joydip.html", {root: __dirname})

})

router.get('/joyshree', (req, res) => {
  res.sendFile("/templates/opthamology/joyshree.html", {root: __dirname})

})

router.get('/soumimondal', (req, res) => {
  res.sendFile("/templates/opthamology/soumimondal.html", {root: __dirname})

})


module.exports = router
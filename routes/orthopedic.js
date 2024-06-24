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
  res.render('orthopedic')
  // res.send("dipak")
}), 

router.get('/gourab', (req, res) => {
    res.sendFile("/templates/orthopedic/gourab.html", {root: __dirname})
    
  
})

router.get('/mayetri', (req, res) => {
   res.sendFile("/templates/orthopedic/mayetri.html", {root: __dirname})
})


router.get('/rupalikar', (req, res) => {
  res.sendFile("/templates/orthopedic/rupalikar.html", {root: __dirname})

})

router.get('/rupankar', (req, res) => {
  res.sendFile("/templates/orthopedic/rupankar.html", {root: __dirname})

})

router.get('/spandhita', (req, res) => {
  res.sendFile("/templates/orthopedic/spandhita.html", {root: __dirname})

})


module.exports = router
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
  res.render('ent')
  // res.send("dipak")
}), 

router.get('/anirudha', (req, res) => {
    res.sendFile("/templates/ent/anirudha.html", {root: __dirname})
    
  
})

router.get('/asiskumar', (req, res) => {
   res.sendFile("/templates/ent/asiskumar.html", {root: __dirname})

})


router.get('/devroy', (req, res) => {
  res.sendFile("/templates/ent/devroy.html", {root: __dirname})

})

router.get('/sneha', (req, res) => {
  res.sendFile("/templates/ent/sneha.html", {root: __dirname})

})

router.get('/soumyarup', (req, res) => {
  res.sendFile("/templates/ent/soumyarup.html", {root: __dirname})

})

module.exports = router
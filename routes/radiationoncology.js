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
  res.render('radiationoncology')
  // res.send("dipak")
}), 

router.get('/ankanamondal', (req, res) => {
    res.sendFile("/templates/radiationoncology/ankanamondal.html", {root: __dirname})
    
  
})

router.get('/mdkayan', (req, res) => {
   res.sendFile("/templates/radiationoncology/mdkayan.html", {root: __dirname})

})


router.get('/ritwik', (req, res) => {
  res.sendFile("/templates/radiationoncology/ritwik.html", {root: __dirname})

})

router.get('/sanjanaraj', (req, res) => {
  res.sendFile("/templates/radiationoncology/sanjanaraj.html", {root: __dirname})

})

router.get('/shremoyee', (req, res) => {
  res.sendFile("/templates/radiationoncology/shremoyee.html", {root: __dirname})

})

module.exports = router
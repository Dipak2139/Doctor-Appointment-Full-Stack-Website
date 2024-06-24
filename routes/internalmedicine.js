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
  res.render('internalmedicine')
  // res.send("dipak")
}), 

router.get('/deblinaghosh', (req, res) => {
    res.sendFile("/templates/internalmedicine/deblinaghosh.html", {root: __dirname})
    
  
})

router.get('/mouroy', (req, res) => {
   res.sendFile("/templates/internalmedicine/mouroy.html", {root: __dirname})

})


router.get('/shuvankarpal', (req, res) => {
  res.sendFile("/templates/internalmedicine/shuvankarpal.html", {root: __dirname})

})

router.get('/tandrabanerjee', (req, res) => {
  res.sendFile("/templates/internalmedicine/tandrabanerjee.html", {root: __dirname})

})

router.get('/TNbanerjee', (req, res) => {
  res.sendFile("/templates/internalmedicine/TNbanerjee.html", {root: __dirname})

})


module.exports = router
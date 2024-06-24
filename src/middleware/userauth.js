const jwt = require("jsonwebtoken");
const collection = require("../config");

const authuser = (req,res,next)=>{

        
        let token = req.cookies.jwt
        let tokens = token.toString()
        const user = jwt.verify(tokens,"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper")
        // const user1 = collection.findOne({email:user.email})
        // console.log(user1)
        // console.log(user1.token)
        req.name = user.name;
        req.token=token;
        // console.log(user.name)
        next()
        

   
}

module.exports = authuser;
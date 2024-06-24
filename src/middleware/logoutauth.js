const jwt = require("jsonwebtoken");
const collection = require("../config");

const authuser = (req,res,next)=>{

    try{
        let token = req.cookies.jwt
        let tokens = token.toString();
        console.log("logout tokens")
        console.log(tokens)
        const user = jwt.verify(tokens,"hellodipakhereverysooniamgoingtobecomeasoftwaredeveloper")
        const user1 = collection.findOne({email:user.email})
        // console.log(user1)
        // console.log(user1.token)
        // req.name = user.name;
        req.name=user.name
        req.user=user1
        req.token=tokens
        // console.log(user.name)
        next();
    }
    catch{
        res.send("Unauthorized user")
    }
        

   
}

module.exports = authuser;
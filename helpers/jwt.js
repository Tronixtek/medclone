const jwt = require("jsonwebtoken");


module.exports = (req,res,next)=>{
         const bearerHeader = req.headers["authorization"];
         const token = bearerHeader && bearerHeader.split(" ")[1]

         if(token == null){
             return res.status(401).json({message:"Unauthorized"})
         }
         jwt.verify(token, "Secret",(err)=>{
             if(err){
                 return res.status(401).json({message:"Unauthorized"});
             }
             next()
         })
        }
const express=require('express');
const users=express.Router();
const User=require('../model/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');

 //Register user
 users.post('/register',async (req,res)=>{
   const user= User.findOne({where:{email:req.body.email}});
   if(user) return res.sendStatus(400).send('email alredy exist');
   try{
      const hashedPassword =await bcrypt.hash(req.body.password,10); //adding salt
      const user={email:req.body.email,password:hashedPassword,token:null};
      User.create(user).then(()=>res.status(200));

      }catch  {
         res.status(500);
      }
   });


 //User login
 users.post('/login',async (req,res)=>{
   //User Authentication  
   const user= User.findOne({where:{email:req.body.email}});
     if(!user) return res.status(400).send('wrong email address or email does not exist');
     try{
         if(await bcrypt.compare(req.body.password,user.password)){
            res.send('Success');
         }else{
            res.send('Wrong password');
         } 

     } catch{
         res.status(500);
     }

     //JWT-generate user access token
     generatedToekn=generateToken(); //indvidual token for per user per login
     const accessToken=jwt.sign(user,generateSecretAccessToken());
     user.token=accessToken;
     User.update(user,{where: {id:user.id}}); //update database with user's token
     res.json({accessToken:accessToken});

 });


  //User logout
  users.delete('/logout',(req,res)=>{
      User.findOne({where:{email:req.body.email}}).then((user)=>
      {user.token="";
      return user; 
      }).then((user)=>User.update(user,{where: {email:req.body.email}}).then(res.sendStatus(204)));
});

//middleware
function authenticateToken(req,res,next){
   const authHeader=req.headers['authorization'];
   const reqToken=authHeader && authHeader.split(' ')[1]; //check if token attached to header
   if(!reqToken) return res.sendStatus(401); //no access-token is missing
   const {token}=User.findOne({where:{email:req.body.email}});
   jwt.verify(reqToken,token,(err,user)=>{
      if(err) return res.sendStatus(403); //no access-token is not invalid
      req.user=user;
      next();
   });
}

function generateSecretAccessToken(){
   return crypto.randomBytes(64).toString('hex');
}


 module.exports.users=users;
 module.exports.authenticateToken=authenticateToken;
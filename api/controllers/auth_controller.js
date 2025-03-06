import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import errorHandling from '../utils/error.js';
import jwt from "jsonwebtoken"

export const signup = async(req,res,next)=>{
   const {username,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10)
   const newUser = new User({username,email,password:hashedPassword})
   try {
    await newUser.save();
   res.status(201).json({message:"User created successfully"})

   } catch (error) {
    next(errorHandling(500,"something went wrong"))
   } 
   }  

   export const signin = async(req,res,next)=>{
      const {email,password} = req.body;
      try {

         const validUser = await User.findOne({email:email})
         if(!validUser) return next(errorHandling(401,"User Not Found"));

         const validPassword =  bcryptjs.compareSync(password,validUser.password);
         if(!validPassword) return next(errorHandling(403,"Wrong credentials"))

         const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
              const {password:hashedPassword ,...rest} = validUser._doc;
              const expiryDate = new Date(Date.now() + 3600000)  
         res.cookie('access_token', token ,{httpOnly : true , expires : expiryDate}).status(200).json(rest)
         
      } catch (error) {
         next(error)
      }
   }
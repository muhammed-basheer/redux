import e from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("successfully connected to mongodb ");
    
}).catch((error)=>{
    console.log(error);
    
})
const app = e();

app.listen(3000,()=>{
    console.log("server listening on this 3000 port");
    
})
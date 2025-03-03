import e from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

import user_route from './routes/user_route.js';
import auth_route from './routes/auth_route.js'

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("successfully connected to mongodb ");
    
}).catch((error)=>{
    console.log(error);
    
}) 
const app = e();
    app.use(e.json());

app.listen(3000,()=>{
    console.log("server listening on this 3000 port");
    
})

app.use('/api/user',user_route)
app.use('/api/auth',auth_route)

import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"; 
dotenv.config();

import user_route from './routes/user_route.js';
import auth_route from './routes/auth_route.js';
import adminRoutes from './routes/adminRoutes.js'


const app = express();

app.use(express.json());  
app.use(cookieParser());  

app.use('/api/admin', adminRoutes);
app.use('/api/user', user_route);
app.use('/api/auth', auth_route);

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((error) => {
    console.log(error);
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

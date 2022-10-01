import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express"
import { startMiddleWare } from "./Controllers/Middleware.js";

//import {GetHealth} from "./Routes/GetHealth.js"

dotenv.config();

const app = express()   //holds all of the functionality that the express library has 
const uri = process.env.DB_URI
const port = process.env.PORT

//Middleware

startMiddleWare(app)

// app.use('/',(req,res,next) => {
//     GetHealth(req,res,next)
// })

//Backend 

console.log("Backend is starting up...")
mongoose.connect(uri)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(port)
    console.log("Listening on Port")
})
.catch((error) => console.log(error));

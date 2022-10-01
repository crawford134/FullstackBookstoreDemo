import express, { response } from "express"
import bodyParser from "body-parser";
import { GetHealth } from "../Routes/GetHealth.js"
import { GetBooks } from "../Routes/GetBooks.js";
import { GetBookbyId } from "../Routes/GetBookbyId.js";
import { CreateBook } from "../Routes/CreateBook.js";
import { UpdateBook } from "../Routes/UpdateBook.js";

function startMiddleWare(app){
    app.use(express.json());
    app.use(express.text());
    var urlencodedParser = bodyParser.urlencoded({ extended: false })  
    app.use(express.static('public')); 
    //Routes 
    app.get("/books/:BookId",(req,res,next)=>GetBookbyId(req,res,next));
    app.get("/books",(req,res)=>GetBooks(req,res));
    app.post("/books",urlencodedParser,(req,res)=>CreateBook(req,res));
    app.put("/books/:BookId",urlencodedParser,(req,res)=>UpdateBook(req,res));
    app.use('/',(req,res,next) => GetHealth(req,res,next))
}

export {
    startMiddleWare
};
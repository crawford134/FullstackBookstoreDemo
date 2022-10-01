import express from "express"
import bodyParser from "body-parser";
import { GetHealth } from "../Routes/GetHealth.js"
import { GetBooks } from "../Routes/BookRoutes/GetBooks.js";
import { GetBookbyId } from "../Routes/BookRoutes/GetBookbyId.js";
import { CreateBook } from "../Routes/BookRoutes/CreateBook.js";
import { DeleteBook } from "../Routes/BookRoutes/DeleteBook.js";
import { UpdateBook } from "../Routes/BookRoutes/UpdateBook.js";

function startMiddleWare(app){
    app.use(express.json());
    app.use(express.text());
    var urlencodedParser = bodyParser.urlencoded({ extended: false })  
    app.use(express.static('public')); 
    //Routes 
    app.get("/books",(req,res)=>GetBooks(req,res));
    app.post("/books",urlencodedParser,(req,res)=>CreateBook(req,res));
    app.get("/books/:BookId",(req,res,next)=>GetBookbyId(req,res,next));
    app.put("/books/:BookId",urlencodedParser,(req,res)=>UpdateBook(req,res));
    app.delete("/books/:BookId",(req,res)=>DeleteBook(req,res));
    app.get('/',(req,res,next) => GetHealth(req,res,next))
}

export {
    startMiddleWare
};
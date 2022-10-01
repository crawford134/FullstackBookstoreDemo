import { response } from "express";
import Book from "../Models/Book.js";

async function CreateBook(req,res){
    let book;

    const { title, author, description, price, available } = req.body;
    const genre = req.body ? req.body.genre : undefined;
    try {
        book = new Book({
            title,
            author,
            description,
            price,
            available,
            genre
        })
        await book.save()
    } catch(error){
        console.log(error);
    }

    if(!book){
        return res.status(500).json({message:"Unable to Add"})
    }
    var response = {
        id:book._id,
        title:book.title
    }
    return res.status(201).json(response)
}

export{
    CreateBook
}
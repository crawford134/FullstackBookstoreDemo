import Book from "../../Models/Book.js";
import isValidUrl from "../../Libs/isValidURL.js"
import isValidISBN from "../../Libs/isValidISBN.js"

async function UpdateBook(req,res){
    let book;
    const BookId = req.params.BookId.toString()
    if(BookId.length < 24){
        return res.status(400).json({error:"ID must be 24 characters long"})
    }
    const { title, author, description, available, genre } = req.body;
    const ISBN = isValidISBN(req.body.ISBN) ? req.body.ISBN : undefined;
    const image = isValidUrl(req.body.image) ? req.body.image : undefined;
    const price = req.body.price ? req.body.price.toFixed(2) : undefined;
    let qualities = {
        title:title,
        author:author,
        description:description,
        price:price,
        image:image,
        available:available,
        ISBN:ISBN,
        genre:genre
    }
    
    let updates = {}
    Object.keys(qualities).forEach(key => {
        if(qualities[key] != undefined){
            updates[key] = qualities[key]
        }
    });

    try {
        book = await Book.findByIdAndUpdate(
            BookId,
            updates
        )
        book = await book.save()
    } catch(error){
        console.log(error);
    }
    finally{
        if(!book){
            return res.status(500).json({error:"Unable to Update"})
        }
        return res.status(201).json({message: "Successfully Updated"})
    }
}

export{
    UpdateBook
}
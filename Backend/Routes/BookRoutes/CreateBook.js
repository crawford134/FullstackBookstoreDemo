import Book from "../../Models/Book.js";
import isValidUrl from "../../Libs/isValidURL.js"
import isValidISBN from "../../Libs/isValidISBN.js";

async function CreateBook(req,res){
    let book;
    const { title, author, description } = req.body;
    const price = req.body.price ? req.body.price.toFixed(2) : undefined;
    const image = isValidUrl(req.body.image) ? req.body.image : undefined;
    const ISBN = isValidISBN(req.body.ISBN) ? req.body.ISBN : undefined;
    const available = (req.body.available===undefined) ? undefined : req.body.available;
    if(!title || !author || !description || !price || !image || available===undefined){
        return res.status(400).json({error:"Missing Required Field"})   
    }
    const genre = req.body.genre ? req.body.genre : undefined;

    try {
        book = new Book({
            title,
            author,
            description,
            price,
            image,
            available,
            ISBN,
            genre
        })
        await book.save()
    } catch(error){
        console.log(error);
    }

    if(!book){
        return res.status(500).json({error:"Unable to Add"})
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
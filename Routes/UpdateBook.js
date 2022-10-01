import Book from "../Models/Book.js";

async function UpdateBook(req,res){
    let book;
    const BookId = req.params.BookId.toString()

    const title = req.body.title ? req.body.title : undefined;
    const author = req.body.author ? req.body.author : undefined;
    const description = req.body.description ? req.body.description : undefined;
    const price = req.body.price ? req.body.price : undefined;
    const available = req.body.available ? req.body.available : undefined;
    const genre = req.body.genre ? req.body.genre : undefined;

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
    UpdateBook
}
import Book from "../../Models/Book.js";

async function GetBooks(req,res,next){
    let books;
    
    try {
        books = await Book.find();
    }
    catch (error){
        console.log(error); 
    }
    
    if (!books || books.length === 0){
        return res.status(404).json({error:"Books Not Found"})
    }

    return res.status(200).json({
        message: (books.length > 1) ? `${books.length} Books Found` : `${books.length} Book Found`,
        body:books
    })
}

export{
    GetBooks
}
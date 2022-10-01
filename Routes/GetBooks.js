import Book from "../Models/Book.js";

async function GetBooks(req,res,next){
    let books;
    
    try {
        books = await Book.find();
    }
    catch (error){
        console.log(error); 
    }
    
    if (!books){
        return res.status(404).json({message:"Book Not Found"})
    }

    return res.status(200).json({
       message:"Books Found",
       body:{books:books}
    })
}

export{
    GetBooks
}
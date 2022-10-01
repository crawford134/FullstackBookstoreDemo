import Book from "../../Models/Book.js";

async function DeleteBook(req,res){
    console.log("Trying to Delete")
    let book;
    let BookId = req.params.BookId.toString()
    console.log("Book ",BookId)
    if(BookId.length < 24){
        return res.status(400).json({error:"ID must be 24 characters long"})
    }

    try {
        book = await Book.findByIdAndRemove(BookId);
    }
    catch (error){
        console.log(error); 
    }
    
    if (!book){
        return res.status(404).json({error:"ID Not Found"})
    }
    return res.status(200).json({ message:"Book Deleted"})
}

export{
    DeleteBook
}
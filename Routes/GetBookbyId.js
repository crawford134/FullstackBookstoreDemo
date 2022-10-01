import Book from "../Models/Book.js";

async function GetBookbyId(req,res){
    let book;
    let BookId = req.params.BookId.toString()
    if(BookId.length < 24){
        return res.status(400).json({error:"ID must be 24 characters long"})
    }

    try {
        book = await Book.findById(BookId);
    }
    catch (error){
        console.log(error); 
    }
    
    if (!book){
        return res.status(404).json({error:"ID Not Found"})
    }

    return res.status(200).json({
       message:"Books Found",
       body:book
    })
}

export{
    GetBookbyId
}
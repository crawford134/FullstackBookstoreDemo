import Book from "../Models/Book.js";

async function GetBookbyId(req,res){
    let book;
    let id = req.params.BookId.toString()
    console.log("Id:",id)
    if(id.length < 24){
        return res.status(400).json({message:"ID must be 24 characters long"})
    }

    try {
        book = await Book.findById(id);
    }
    catch (error){
        console.log(error); 
    }
    
    if (!book){
        return res.status(404).json({message:"ID Not Found"})
    }

    return res.status(200).json({
       message:"Books Found",
       body:book
    })
}

export{
    GetBookbyId
}
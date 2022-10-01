import Book from "../Models/Book.js";

async function GetBookbyId(req,res,next){
    let book;
    
    /*
    try {
        book = await Book.find();
    }
    catch (error){
        console.log(error); 
    }
    */
    
    if (!book){
        return res.status(404).json({message:"ID Not Found"})
    }

    return res.status(200).json({
       message:"Books Found",
       body:{books:books}
    })
}

export{
    GetBookbyId
}
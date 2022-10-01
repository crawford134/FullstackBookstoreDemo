import Book from "../Models/Book.js";

function GetBook(req,res,next){
    let books = "temp";
    try {
        //books = await Book.find();
    }
    catch (error){
        console.log(error); 
    }
    
    if (!books){
        return res.status(404).json({message:"Book Not Found"})
    }
    /*return res.status(200).json({
       message:""
       body:{
        books:books
       }
    })*/

    res.send("Books")
}

export{
    GetBook
}
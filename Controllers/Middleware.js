//import Router from "./Router.js";
import { GetHealth } from "../Routes/GetHealth.js"
import { GetBook } from "../Routes/GetBook.js"

function startMiddleWare(app){
    //app.use('/books', Router)
    app.use('/',(req,res,next) => GetHealth(req,res,next))
}

export {
    startMiddleWare
};
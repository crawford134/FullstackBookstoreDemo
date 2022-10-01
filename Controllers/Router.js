import express from "express"
import { GetBook } from "../Routes/GetBook.js";

const router = express.Router();

router.get("/",(req,res,next) => GetBook(req,res,next));
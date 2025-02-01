import { NextFunction, Request, Response } from "express";
import { CustomError } from "../config/customError";

export const errorHandler = async(err:CustomError,req:Request,res:Response,next:NextFunction)=>{
    res.status(err.HttpStatusCode).json(err.rawError)
    process.exit(1)
}
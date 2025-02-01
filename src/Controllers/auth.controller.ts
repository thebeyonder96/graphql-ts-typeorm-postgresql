import { NextFunction, Request, Response } from "express";
import { CustomError } from "../config/customError";

export const login = async(req:Request,res:Response,next:NextFunction)=>{
    const error = new CustomError(400,'test')
    next(error)
}
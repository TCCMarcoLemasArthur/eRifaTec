import { Request, Response, NextFunction, } from 'express';
import { request } from "http";

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
)
{
    console.log("Middleware isAuthenticated foi executado");
}
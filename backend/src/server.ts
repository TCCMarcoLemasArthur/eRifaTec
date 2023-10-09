import express, { Request, Response, NextFunction, Router} from "express";
// import 'express-async-errors';
import cors from 'cors';

import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//Middleware para Tratamento de Erro nas Rotas
app.use((err: Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //se o valor recebido for uma instância do tipo erro
        return res.status(400).json ({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })

})

app.listen(5000, () => console.log('SERVIDOR ONLINE'));

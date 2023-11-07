import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

// todo-- fazer o crud de premio
// todo -- criarPremio(), atualizarPremio(), listarPremio(), excluirPremio().

export const criarPremio = async (req: Request, res: Response, next: NextFunction) =>{
    const {nome, descricao, tipo} = req.body; 

    try {
        const premio = await prisma.premio.create({
            data: {
                nomepremio: nome,
                descpremio: descricao,
                tipopremio: tipo
            }
        })
        res.status(200).json(premio);
    } catch (error) {
        if(error instanceof Error){
            console.log("Erro no método CRIAR PREMIO")
        }
    }
}

export const atualizarPremio = async (req: Request, res:Response) => {
    const {nome, descricao, tipo} = req.body;

    try {
        const premio = await prisma.premio.update({
            where:{
                idpremio: Number(req.params.idpremio) //req.params.idpremio ou req.params.id ("TEMOS QUE TESTAR")
            },
            data: {
             nomepremio: nome,
             descpremio: descricao,
             tipopremio: tipo   
            }
        })
        res.status(200).json(premio);
    } catch (error) {
        if(error instanceof Error){
            console.log("Erro no método ATUALIZAR PREMIO")
        }
    }
}

export const listarPremio = async(req: Request, res:Response) => {

    try {
        const premio = await prisma.premio.findMany()
        res.status(200).json(premio);
    } catch (error) {
        if(error instanceof Error){
            console.log("Erro no método LISTAR PREMIO")
        }
    }

}

export const excluirPremio = async (req:Request, res:Response) => {
    try {
        const premio = await prisma.premio.delete({
            where:{
                idpremio: Number(req.params.id)
            }
        })
        res.status(200).json({msg: 'Premio deletado com Sucesso'});
    } catch (error) {
        if(error instanceof Error){
            console.log("Erro no método EXCLUIR PREMIO")
        }
    }
}
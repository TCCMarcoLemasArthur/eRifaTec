import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// todo -- fazer esses métodos: gerarBilhetes(), listarBilhetes(), selecionarNumeros().

export const gerarBilhetes = async (idrifa, quantidade, preco) => {
    try {
        for (let i=1;i <= quantidade; i++) {
            const bilhete = await prisma.bilhete.create({
                data:{
                    idrifa: idrifa,
                    numerobilhete: i,
                    statussorteiobilheto: true,
                    precobilhete: preco,
                    //foipremiado: false
                }
            })
                
        }
    } catch (error) {
        
    }

}

export const listarBilhetes = async() =>  {

    try {
        
    } catch (error) {
        
    }

}

export const selecionarNumeros = async() => {

    try {
        
    } catch (error) {
        
    }

}

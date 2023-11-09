import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
const prisma = new PrismaClient();
// todo -- fazer esses métodos: gerarBilhetes(), listarBilhetes(), selecionarNumeros().

    export const gerarBilhetes = async (idrifa, quantidade, preco) => {
        try {
            //const idrifa = (req.params.idrifa);
            for (let i=1;i <= quantidade; i++) {
                const bilhete = await prisma.bilhete.create({
                    data:{
                        idrifa: idrifa,
                        numerobilhete: i,
                        statusbilhete: true,
                        precobilhete: preco,
                        foipremiado: false,
                        
                    }
                });
                   //res.status(201).json(bilhete);
            }
        } catch (error) {
            if (error instanceof Error) {
               // res.status(500).json({ msg: error.message });
                console.log("Erro na geração de Bilhetes!")
              } 
        }

    }

export const listarBilhetes = async(idrifa, numerobilhete, quantidade, disponibilidade) =>  {

    try {
        const bilhete = await prisma.bilhete.findMany({
            where:{
                idrifa: idrifa,
            }
        })
    } catch (error) {
        if (error instanceof Error){
            console.log("Erro na listagem de bilhetes!")
        }
    }       
}

//esse método vai armazenar os números escolhidos por cada usuario em seus id's
//logo irá mostrar quais estão disponíveis e quais não estarão
export const selecionarNumeros = async(idrifa, idusuario) => {

    try {
        const bilehtes = await prisma.bilhete.findMany({
            where:{
                idrifa: idrifa
            }
        })    
    } catch (error) {
        if (error instanceof Error){
            console.log("Erro na listagem de bilhetes!")
        }
    }
}

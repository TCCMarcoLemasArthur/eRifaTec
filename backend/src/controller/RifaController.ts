import { Request, Response , NextFunction} from 'express';
import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//Insert 
export const criarRifa = async (req: Request, res: Response, next: NextFunction) => {
  const { titulo, quantbilhete, descricaorifa, senha, dataNasc, status, horasorteio, cep, estado, cidade, bairro, rua, numero, bilhete} = req.body
  try {
      const rifa = await prisma.rifa.create({
          data: {
            titulorifa: titulo,
            quantbilheterifa: quantbilhete,
            descrifa: descricaorifa,
            datasorteiorifa: senha,
            datainiciorifa: dataNasc,
            statusrifa: status,
            horasorteiorifa: horasorteio,
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            bilhete: bilhete
          },
      })
      res.status(201).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}

//Select * from Rifa
export const listarRifa = async (req: Request, res: Response) => {
  try {
      const response = await prisma.rifa.findMany()
      res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}

//Select para um registro
export const listarRifaPorId = async (req: Request, res: Response) => {
  try {
      const rifa = await prisma.rifa.findUnique({
          where: {
              idrifa: Number(req.query.id),
          },
      })
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


//update rifa
export const atualizarRifa = async (req: Request, res: Response) => {
  const { id, titulo, quantbilhete, descricaorifa, senha, dataNasc, status, horasorteio, cep, estado, cidade, bairro, rua, numero, bilhete} = req.body
  try {
      const rifa = await prisma.rifa.update({
          where: {
              idrifa: Number(id),
          },
          data: {
            titulorifa: titulo,
            quantbilheterifa: quantbilhete,
            descrifa: descricaorifa,
            datasorteiorifa: senha,
            datainiciorifa: dataNasc,
            statusrifa: status,
            horasorteiorifa: horasorteio,
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            bilhete: bilhete
          },
      })
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


//delete rifa
export const deletarRifa = async (req: Request, res: Response) => {
  try {
      const usuario = await prisma.usuario.delete({
          where: {
              idusuario: Number(req.query.id),
          },
      })
      res.status(200).json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}
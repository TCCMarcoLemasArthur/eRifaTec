import { Request, Response , NextFunction} from 'express';
import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//Insert 
export const criarRifa = async (req: Request, res: Response, next: NextFunction) => {
  const { titulo, quantBilhete, descricao, dataSorteio, horaSorteio, cep, estado, cidade, bairro, rua, numero } = req.body
  try {
      const rifa = await prisma.rifa.create({
          data: {
            titulorifa: titulo,
            quantbilheterifa: Number(quantBilhete),
            descrifa: descricao,
            datasorteiorifa: dataSorteio,
            datainiciorifa: '02-02-2022', //! Coloca o dia em que a rifa foi criada
            statusrifa: 'Em andamento', //! Começa automaticamente
            horasorteiorifa: horaSorteio, //! Precisa colocar o premio e criar os bilhetes
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero
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
              idrifa: Number(req.params.id),
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
  const { id, titulo, quantBilhete, descricaoRifa, dataSorteioRifa, dataInicioRifa, status, horaSorteio, cep, estado, cidade, bairro, rua, numero, bilhete } = req.body
  try {
      const rifa = await prisma.rifa.update({
          where: {
              idrifa: Number(id),
          },
          data: {
            titulorifa: titulo,
            quantbilheterifa: quantBilhete,
            descrifa: descricaoRifa,
            datasorteiorifa: dataSorteioRifa,
            datainiciorifa: dataInicioRifa,
            statusrifa: status,
            horasorteiorifa: horaSorteio,
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


export const _sortear = async (quantidade = 1, maximo=501) => {
  var numeros = [];
  
  console.time('Sorteando');

  // Preenche um array com os números de 1 ao maximo
  for (var numero = 1; numero <= maximo;  numero++) {
    numeros.push(numero);
  }
  
  numeros.sort(function randomizar(a, b) {
    return Math.random() * 2 - 1; // Ordena randomicamente
  });

  console.timeEnd('Sorteando');
  
  return numeros.splice(0, quantidade);
}
const quantidade = 1;
const maximo = 501;

const handleSorteio = async()=>{
  const resultado = await _sortear(quantidade, maximo)
console.log(resultado.join(','));
}

handleSorteio();
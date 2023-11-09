import { Request, Response , NextFunction} from 'express';
import {PrismaClient } from '@prisma/client'
import { gerarBilhetes } from './BilheteController.js';
import { strict } from 'assert';
const prisma = new PrismaClient()


//Insert 
export const criarRifa = async (req: Request, res: Response, next: NextFunction) => {
  const { titulo, quantBilhete, descricao, dataSorteio, horaSorteio, cep, estado, cidade, bairro, rua, numero} = req.body
  //select na tabela premio e pega o id do premio selecionado

  const { idpremio } = await prisma.premio.findFirst({
      select:{
        idpremio: true,
      }
  })

  try {
      const rifa = await prisma.rifa.create({
          data: {
            titulorifa: titulo,
            quantbilheterifa: Number(quantBilhete),
            descrifa: descricao,
            statusrifa: 'Em andamento',
            datainiciorifa: new Date(Date.now()).toISOString().split('T')[0],
            datasorteiorifa: dataSorteio,
            horasorteiorifa: horaSorteio,
            incluirrifafeed: false,
            ceprifa: cep,
            estadorifa: estado,
            cidaderifa: cidade,
            bairrorifa: bairro,
            ruarifa: rua,
            numerorifa: numero,
            idpremio: idpremio,
            idusuario: 1 // TODO -- PRECISAMOS DA AUTENTICAÇÃO
          },
          select:{
            quantbilheterifa: true,
            idrifa: true,
          }
      })
        .then(() => {
          //! Precisa criar os bilhetes
          gerarBilhetes(rifa.idrifa, rifa.quantBilhete, rifa.preco)
          return rifa
        })
      res.status(201).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}

//Select * from Rifa
export const listarRifa = async (req: Request, res: Response) => {
  try {
      const rifa = await prisma.rifa.findMany()
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}

//Select para um registro
export const selecionarRifaPorId = async (req: Request, res: Response) => {
  try {
      const rifa = await prisma.rifa.findUnique({
          where: {
              idrifa: Number(req.params.id),
          },
      })
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.message });
    } else {
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
            ceprifa: cep,
            estadorifa: estado,
            cidaderifa: cidade,
            bairrorifa: bairro,
            ruarifa: rua,
            numerorifa: numero,
            bilhete: bilhete
          },
      })
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


//delete rifa
export const deletarRifa = async (req: Request, res: Response) => {
  try {
      const rifa = await prisma.rifa.delete({
          where: {
              idrifa: Number(req.params.id),
          },
      })
      res.status(200).json(rifa)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


export const sortearNumero = async (quantidade = 1, maximo=501) => {
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
  const resultado = await sortearNumero(quantidade, maximo)
console.log(resultado.join(','));
}
//handleSorteio();

// todo -- fazer essa método. Para criá-lo precisa do JWT(Autenticação, para conseguir notificar o usuário específico)
export const notificarVencedor = async () => {


}


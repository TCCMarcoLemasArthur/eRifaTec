import { Request, Response , NextFunction} from 'express';
import axios from 'axios';

// ! Isso pode retornar pelo menos 3 erros
//erro no valor do cep (recebimento do json)
//erro "pendente" processamento, dados ainda nao foram enviados
//rejeitado 
export const consultarCep = async (req: Request, res: Response, next: NextFunction) => {
    const cep = req.query.value;
    const url = 'https://viacep.com.br/ws/' + cep + '/json/'
    const resultado = await axios.get(url)
    console.log('Estado da Promise:' + res.status)
    return resultado.data  
  }
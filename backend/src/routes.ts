import { Router } from 'express'; 


import { criarUsuario, listarUsuario, atualizarUsuario, deletarUsuario, loginUsuario} from "./controller/UserController.js";

import { criarRifa, listarRifa, listarRifaPorId, atualizarRifa, deletarRifa} from "./controller/RifaController.js";

import { consultarCep } from './controller/UtilsController.js'


const router = Router();

router.post('/cadastrarusuario', criarUsuario);
router.get('/listarusuario', listarUsuario);
//router.get('/listarusuarioid', listarUsuarioPorId);
router.put('/atualizarusuario', atualizarUsuario);
router.delete('/deletarusuario', deletarUsuario);
router.post('/loginusuario', loginUsuario);

router.post('/criarrifa',  criarRifa);
router.get('/listarrifa', listarRifa);
router.get('/listarrifaid', listarRifaPorId);
router.put('/atualizarrifa', atualizarRifa);
router.delete('/deletarrifa', deletarRifa);

router.get('/consultarcep', consultarCep)
// Exemplo de como enviar o ID do usuário para o frontend
router.get('/user/:id', async (req, res) => {
    const userId = req.params.id; // Suponha que você tenha o ID do usuário
  
    // Realize a lógica necessária para obter os dados do usuário com o ID fornecido
  
    // Envie o ID do usuário como resposta
    res.json({ userId: userId });
  });
  

export default router;



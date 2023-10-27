import { Router } from 'express'; 

import { criarUsuario, listarUsuario, atualizarUsuario, deletarUsuario, loginUsuario} from "./controller/UserController.js";

import { criarRifa, listarRifa, listarRifaPorId, atualizarRifa, deletarRifa} from "./controller/RifaController.js";

import { consultarCep } from './controller/UtilsController.js'


const router = Router();

router.post('/cadastrarusuario', criarUsuario);
router.get('/listarusuario', listarUsuario);
//router.get('/listarusuarioid', listarUsuarioPorId);
router.put('/atualizarusuario/:id', atualizarUsuario);
router.delete('/deletarusuario/:id', deletarUsuario);
router.post('/loginusuario', loginUsuario);

router.post('/cadastrarrifa',  criarRifa);
router.get('/listarrifa', listarRifa);
router.get('/listarrifaid', listarRifaPorId);
router.put('/atualizarrifa', atualizarRifa);
router.delete('/deletarrifa', deletarRifa);

router.get('/consultarcep', consultarCep)


  

export default router;



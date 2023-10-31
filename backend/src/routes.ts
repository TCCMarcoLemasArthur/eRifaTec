import { Router } from 'express'; 

import { criarUsuario, listarUsuario, selecionarUsuarioPorId, atualizarUsuario, deletarUsuario, loginUsuario} from "./controller/UserController.js";

import { criarRifa, listarRifa, selecionarRifaPorId, atualizarRifa, deletarRifa} from "./controller/RifaController.js";

import { consultarCep } from './controller/UtilsController.js'
import { AuthUserController } from './controller/AuthController.js';
import { DetailUserController } from './controller/DetailUserController.js';
import { isAuthenticated } from './middlewares/isAuthenticated.js';


const router = Router();

router.post('/cadastrarusuario', criarUsuario);
router.get('/listarusuario', listarUsuario);
router.get('/selecionarusuario/:id', selecionarUsuarioPorId);
router.put('/atualizarusuario/:id', atualizarUsuario);
router.delete('/deletarusuario/:id', deletarUsuario);
router.post('/loginusuario', loginUsuario);

router.post('/sessao', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

router.post('/criarrifa',  criarRifa);
router.get('/listarrifa', listarRifa);
router.get('/listarrifa/:id', selecionarRifaPorId);
router.put('/atualizarrifa', atualizarRifa);
router.delete('/deletarrifa', deletarRifa);

router.get('/consultarcep', consultarCep)


  

export default router;



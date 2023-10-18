import { Router } from 'express'; 

import { criarUsuario, listarUsuario, listarUsuarioPorId, atualizarUsuario, deletarUsuario} from "./controller/UserController.js";

import { criarRifa, listarRifa, listarRifaPorId, atualizarRifa, deletarRifa} from "./controller/RifaController.js";


const router = Router();

router.post('/cadastrarusuario', criarUsuario);
router.get('/listarusuario', listarUsuario);
router.get('/listarusuarioid', listarUsuarioPorId);
router.put('/atualizarusuario', atualizarUsuario);
router.delete('/deletarusuario', deletarUsuario);

router.post('/cadastrarrifa',  criarRifa);
router.get('/listarrifa', listarRifa);
router.get('/listarrifaid', listarRifaPorId);
router.put('/atualizarrifa', atualizarRifa);
router.delete('/deletarrifa', deletarRifa);

export default router;



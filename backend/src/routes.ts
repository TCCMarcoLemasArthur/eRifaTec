import { Router } from 'express'; 

import { criarUsuario, listarUsuario, listarUsuarioPorId, atualizarUsuario, deletarUsuario} from "./controller/UserController.js";


/*import { CreateRifaController } from "./controller/rifa/RifaController";
import { ReadRifaController } from "./controller/rifa/RifaController";
import { UpdateRifaController } from "./controller/rifa/RifaController";
import { DeleteRifaController } from "./controller/rifa/RifaController";*/


const router = Router();

router.post('/cadastrarusuario', criarUsuario);
router.get('/listarusuario', listarUsuario);
router.get('/listarusuario/:id', listarUsuarioPorId);
router.put('/atualizarusuario', atualizarUsuario);
router.delete('/deletarusuario', deletarUsuario);

/*router.post('/createrifa', new CreateRifaController().handle);
router.get('/listrifa', new ReadRifaController().handle);
router.put('/updaterifa', new UpdateRifaController().handle);
router.delete('/deleterifa', new DeleteRifaController().handle);
*/
export default router;



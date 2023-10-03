import {Router} from express; 

import { CreateUserController } from "./controller/user/UserController";
import { ReadUserController } from "./controller/user/UserController";
import { UpdateUserController } from "./controller/user/UserController";
import { DeleteUserController } from "./controller/user/UserController";

import { CreateRifaController } from "./controller/rifa/RifaController";
import { ReadRifaController } from "./controller/rifa/RifaController";
import { UpdateRifaController } from "./controller/rifa/RifaController";
import { DeleteRifaController } from "./controller/rifa/RifaController";


const router = Router();

router.post('/createuser', new CreateUserController().handle);
router.get('/listuser', new ReadUserController().handle);
router.put('/updateuser', new UpdateUserController().handle);
router.delete('/deleteuser', new DeleteUserController().handle);

router.post('/createrifa', new CreateRifaController().handle);
router.get('/listrifa', new ReadRifaController().handle);
router.put('/updaterifa', new UpdateRifaController().handle);
router.delete('/deleterifa', new DeleteRifaController().handle);

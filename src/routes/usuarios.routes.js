import {Router} from "express";
import { crearUsuario, login } from "../controllers/usuarios.controller.js";

const router = Router();

router.route("/registrar").post(crearUsuario)
router.route("/login").post(login)

export default router
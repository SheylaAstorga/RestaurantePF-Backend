import {Router} from "express";
import { crearUsuario, crearUsuarioAdmin, listarUsuarios, login } from "../controllers/usuarios.controller.js";

const router = Router();

router.route("/registrar").post(crearUsuario)
router.route("/login").post(login)
router.route("/registroAdmin").post(crearUsuarioAdmin)
router.route("/usuarios").get(listarUsuarios)

export default router
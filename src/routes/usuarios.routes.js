import {Router} from "express";
import { borrarUsuario, crearUsuario, crearUsuarioAdmin, listarUsuarios, login, suspenderUsuario } from "../controllers/usuarios.controller.js";

const router = Router();

router.route("/registrar").post(crearUsuario);
router.route("/login").post(login);
router.route("/registroAdmin").post(crearUsuarioAdmin);
router.route("/usuarios").get(listarUsuarios);
router.route("/suspenderUsuario").post(suspenderUsuario);
router.route("/borrarUsuario").post(borrarUsuario);

export default router
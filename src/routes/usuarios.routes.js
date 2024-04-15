import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  crearUsuarioAdmin,
  habilitarUsuario,
  isAdmin,
  listarUsuarios,
  login,
  logout,
  suspenderUsuario,
} from "../controllers/usuarios.controller.js";
import {
  validacionRegistroAdmin,
  validarEmail,
  validarUsuario,
} from "../helper/validarUsuarios.js";

const router = Router();

router.route("/registrar").post([validarUsuario], crearUsuario);
router.route("/login").post(login);
router
  .route("/registroAdmin")
  .post([validacionRegistroAdmin], crearUsuarioAdmin);
router.route("/usuarios").get(listarUsuarios);
router.route("/suspenderUsuario").post([validarEmail], suspenderUsuario);
router.route("/borrarUsuario").post([validarEmail], borrarUsuario);
router.route("/habilitarUsuario").post([validarEmail], habilitarUsuario);
router.route("/logout").post([validarEmail],logout);
router.route("/isAdmin").post([validarEmail],isAdmin);

export default router;

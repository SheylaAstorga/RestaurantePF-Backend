import { Usuario } from "../database/model/usuarios.js";
import bcrypt from "bcrypt";
import generarJWT from "../helper/generarJWT.js";

const isActive = (body, boolean) => {
    const usuario = body;
    usuario.isActive = boolean;
    return usuario;
}
export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailValidacion = await Usuario.findOne({ email });
    if (emailValidacion) {
      return res.status(400).json({
        mensaje: "Este correo ya se encuentra registrado.",
      });
    }
    const saltos = bcrypt.genSaltSync(12);
    const passEncriptada = bcrypt.hashSync(password, saltos);
    const usuario = isActive(req.body, true)
    const nuevoUsuario = new Usuario(usuario);
    nuevoUsuario.password = passEncriptada;
    nuevoUsuario.save();
    const token = await generarJWT(nuevoUsuario._id, nuevoUsuario.email);
    res.status(201).json({
      mensaje: "Usuario creado correctamente.",
      email: nuevoUsuario.email,
      nombreUsuario: nuevoUsuario.nombreUsuario,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al intentar crear un usuario.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioBuscado = await Usuario.findOne({ email });
    if (!usuarioBuscado) {
      return res.status(400).json({
        mensaje: "Correo incorrecto",
      });
    }
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioBuscado.password
    );
    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "password incorrecto",
      });
    }
    const token = await generarJWT(usuarioBuscado._id, usuarioBuscado.email);
    const usuario = isActive(usuarioBuscado, true);
    const nuevoUsuario = new Usuario(usuario);
    res.status(200).json({
      mensaje: "Los datos del usuario son correctos",
      email: email,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al intentar iniciar secion un usuario.",
    });
  }
};

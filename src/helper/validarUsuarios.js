import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validacionRegistroAdmin = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("el nombre del usuario es algo obligatorio")
    .isLength({ min: 4, max: 15 })
    .withMessage("el nombre del usuario debe tener entre 4 y 15 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("el email es obligatorio")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    )
    .withMessage("el email debe ser valido"),
  check("password")
    .notEmpty()
    .withMessage("la contraseña debe ser obligatoria")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "la contraseña debe tener por lo menos 8 caracteres y debe contener numeros, letras minusculas y letras mayusculas"
    ),
  check("rol")
    .notEmpty()
    .withMessage("la rol del usuario debe ser obligatorio")
    .isIn(["user", "admin"])
    .withMessage("el rol solo pueden ser: admin y user"),
  check("perfilRGB")
    .notEmpty()
    .withMessage("el color del usuario es obligatorio")
    .matches(/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*\d+(\.\d+)?\s*)?\)$/)
    .withMessage("el formato debe ser rgb"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export const validarEmail = [
  check("email")
    .notEmpty()
    .withMessage("el email es obligatorio")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export const validarUsuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("el nombre del usuario es algo obligatorio")
    .isLength({ min: 4, max: 15 })
    .withMessage("el nombre del usuario debe tener entre 4 y 15 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("el email es obligatorio")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    )
    .withMessage("el email debe ser valido"),
  check("password")
    .notEmpty()
    .withMessage("la contraseña debe ser obligatoria")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "la contraseña debe tener por lo menos 8 caracteres y debe contener numeros, letras minusculas y letras mayusculas"
    ),
  check("perfilRGB")
    .notEmpty()
    .withMessage("el color del usuario es obligatorio")
    .matches(/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*\d+(\.\d+)?\s*)?\)$/)
    .withMessage("el formato debe ser rgb"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];
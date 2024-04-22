import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProductos = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre del producto debe tener entre 2 y 50 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      if (value >= 50 && value <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $50 y $10000");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe tener un formato de URL valida y terminar en jpg|jpeg|gif|png"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn([
      "Entrada",
      "Desayuno",
      "Plato principal",
      "Postre",
      "Menu infantil",
      "Menu ejecutivo",
      "Vegano",
      "Vegetariano",
      "Celíaco",
    ])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones: 'Entrada','Desayuno','Plato principal','Postre','Menu infantil','Menu ejecutivo','Vegano','Vegetariano','Celíaco' "
    ),
  check("detalle")
    .notEmpty()
    .withMessage("el detalle es obligatorio")
    .isLength({ min: 10, max: 300 })
    .withMessage("el detalle debe tener entre 10 y 300 caracteres"),
  check("estado")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn([
      "Disponible",
      "Agotado",
      "En oferta",
      "Recomendado",
      "Especial del dia",
      "Proximamente",
    ])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones: 'Disponible','Agotado','En oferta','Recomendado','Especial del dia','Proximamente' "
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validacionProductos;

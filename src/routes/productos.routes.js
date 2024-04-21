import { Router } from "express";
import {borrarProducto, crearProducto, listarProductos, modificarProducto, obtenerProducto} from "../controllers/productos.controllers.js"
import validacionProductos from "../helper/validarProductos.js";


const router = Router();

router.route('/productos').get(listarProductos).post([validacionProductos],crearProducto)
router.route('/producto/:id').get(obtenerProducto).delete(borrarProducto).put([validacionProductos],modificarProducto)

export default router;
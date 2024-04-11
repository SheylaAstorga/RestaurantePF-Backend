import { Router } from "express";
import {borrarProducto, crearProducto, listarProductos, modificarProducto, obtenerProducto} from "../controllers/productos.controllers.js"


const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/producto/:id').get(obtenerProducto).delete(borrarProducto).put(modificarProducto)

export default router;
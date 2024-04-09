import { Router } from "express";
import {borrarProducto, crearProducto, listarProductos, obtenerProducto} from "../controllers/productos.controllers.js"


const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/producto/:id').get(obtenerProducto).delete(borrarProducto)

export default router;
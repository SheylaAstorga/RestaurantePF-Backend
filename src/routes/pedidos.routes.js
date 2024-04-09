import { Router } from "express";
import { listarPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();
router.route('/pedidos').get(listarPedidos);

export default router;
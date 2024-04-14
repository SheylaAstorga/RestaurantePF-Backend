import { Router } from 'express';
import { ModPedido, crearPedido, listarPedidos, obtenerPedido } from '../controllers/pedidos.controllers.js';

const router = Router();

router.route('/pedidos').get(listarPedidos).post(crearPedido);
router.route('/pedidos/:id').get(obtenerPedido).put(ModPedido).delete(borrarPedido)

export default router;
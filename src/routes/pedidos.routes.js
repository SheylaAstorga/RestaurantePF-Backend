import { Router } from 'express';
import { crearPedido, listarPedidos } from '../controllers/pedidos.controllers.js';

const router = Router();

router.route('/pedidos').get(listarPedidos).post(crearPedido);

export default router;
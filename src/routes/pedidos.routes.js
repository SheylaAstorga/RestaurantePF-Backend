import { Router } from 'express';
import { ModPedido, crearPedido, listarPedidos, obtenerPedido } from '../controllers/pedidos.controllers.js';
import validarJWT from '../helper/verificarJWT.js';


const router = Router();

router.route('/pedidos').get(listarPedidos).post([validarJWT],crearPedido);
router.route('/pedidos/:id').get(obtenerPedido).put(ModPedido);

export default router;
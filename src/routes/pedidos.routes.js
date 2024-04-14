import { Router } from 'express';
import validarJWT from '../helper/verificarJWT.js';
import { ModPedido, borrarPedido, crearPedido, listarPedidos, obtenerPedido } from '../controllers/pedidos.controllers.js';

const router = Router();

router.route('/pedidos').get(listarPedidos).post([validarJWT],crearPedido);
router.route('/pedidos/:id').get(obtenerPedido).put([validarJWT],ModPedido).delete([validarJWT],borrarPedido)

export default router;
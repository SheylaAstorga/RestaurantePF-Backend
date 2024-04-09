import Pedido from '../database/model/pedido.js';

export const listarPedidos = async (req, res) => {
    try {
      const pedidos = await Pedido.find().populate('productos.producto');
      res.status(200).json(pedidos);
    } catch (error) {
      console.log(error);
      res.status(404).json({ mensaje: 'No se pudo encontrar la lista de pedidos' });
    }
  };

export const crearPedido = async (req, res) => {
  try {
    const pedidoNuevo = new Pedido(req.body);
    await pedidoNuevo.save();
    res.status(201).json({
      mensaje: 'Pedido guardado'
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: 'No se pudo procesar la solicitud de crear pedido'
    });
  }
};
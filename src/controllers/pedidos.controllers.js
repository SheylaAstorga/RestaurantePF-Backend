import Pedido from '../database/model/pedido.js';

export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('producto').populate('usuario');
    res.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: 'No se pudo encontrar la lista de pedidos' });
  }
};

export const obtenerPedido = async (req, res) => {
  try {
    const pedidoIndividual = await Pedido.findById(req.params.id)
      .populate('producto')
      .populate('usuario');
    res.status(200).json(pedidoIndividual);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se encontró el pedido solicitado" });
  }
};

export const crearPedido = async (req, res) => {
  try {
    const pedidoNuevo = new Pedido({
      ...req.body,
      
    });
    console.log(pedidoNuevo);
    await pedidoNuevo.save();
    res.status(201).json({ mensaje: 'Pedido guardado' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: 'No se pudo procesar la solicitud de crear pedido' });
  }
};

export const ModPedido = async (req, res) => {
  try {
    const buscarPedido = await Pedido.findById(req.params.id);
    if (!buscarPedido) {
      return res
        .status(404)
        .json({
          mensaje: "error en el id del pedido",
        });
    }
    await Pedido.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "el pedido se modifico exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: 'no se pudo modificar el pedido' });
  }
}


export const borrarPedido = async (req, res) => {
  try {
    const buscarPedido = await Pedido.findById(req.params.id);
    if (!buscarPedido) {
      return res
        .status(404)
        .json({
          mensaje: "No se pudo eliminar el pedido, el id es incorrecto.",
        });
    }
    await Pedido.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({ mensaje: "El pedido fue eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar el pedido" });
  }
};
export const borrarTodosLosPedidos = async (req, res) => {
  try {
    const buscarPedido = await Pedido.findById(req.params.id);
    if (!buscarPedido) {
      return res
        .status(404)
        .json({
          mensaje: "No se pudo eliminar el pedido, el id es incorrecto.",
        });
    }
    await Pedido.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({ mensaje: "El pedido fue eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar el pedido" });
  }
};
import Pedido from '../database/model/pedido.js';
import {Usuario}  from '../database/model/usuarios.js';
import Producto from '../database/model/producto.js';

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

export async function crearPedido(req, res) {
  try {
      // Obtener los datos necesarios del cuerpo de la solicitud
      const { productoId, usuarioId, cantidad } = req.body;

      // Verificar si el producto y el usuario existen
      const producto = await Producto.findById(productoId);
      const usuario = await Usuario.findById(usuarioId);

      if (!producto) {
          return res.status(404).json({ error: 'Producto no encontrado' });
      }

      if (!usuario) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      // Crear el pedido
      const nuevoPedido = new Pedido({
          producto: productoId,
          usuario: usuarioId,
          cantidad: cantidad,
          estado: 'Pendiente'
      });

      // Guardar el pedido en la base de datos
      const pedidoGuardado = await nuevoPedido.save();

      // Devolver la respuesta con el pedido creado
      return res.status(201).json(pedidoGuardado);
  } catch (error) {
      // Manejar errores
      console.error('Error al crear el pedido:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

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
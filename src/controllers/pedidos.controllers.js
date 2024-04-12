import { Usuario } from '../database/model/usuarios.js';
import Pedido from '../database/model/pedido.js';
import jwt from 'jsonwebtoken';

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

// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  try {
    // Obtener el token de autenticación de los encabezados de la solicitud
    const token = req.headers.authorization.split(' ')[1];

    // Verificar y decodificar el token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findById(decoded.userId);

    // Agregar el usuario al objeto de la solicitud
    req.user = usuario;

    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token de autenticación inválido' });
  }
};

// Ruta para crear un pedido
export const crearPedido = [
  authMiddleware,
  async (req, res) => {
    try {
      // Verificar si el usuario está autenticado
      if (!req.user) {
        return res.status(401).json({ mensaje: 'Usuario no autenticado' });
      }

      const pedidoNuevo = new Pedido({
        ...req.body,
        usuario: req.user._id,
      });
      await pedidoNuevo.save();
      res.status(201).json({ mensaje: 'Pedido guardado' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ mensaje: 'No se pudo procesar la solicitud de crear pedido' });
    }
  },
];

export const ModPedido = async(req,res) =>{
  try{
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
  }catch(err){
    console.error(err);
    res.status(400).json({mensaje:'no se pudo modificar el pedido'})
  }
}
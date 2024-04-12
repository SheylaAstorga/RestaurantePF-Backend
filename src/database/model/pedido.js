import mongoose from "mongoose";
import Producto from "./producto.js"; // Importa el modelo de Producto
import {Usuario}  from "./usuarios.js";

mongoose.model("Producto", Producto.schema); // Registra el modelo de Producto
mongoose.model("Usuario", Usuario.schema); // Registra el modelo de Producto


const pedidoSchema = new mongoose.Schema({
  // Definición del esquema de Pedido

  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required:true,
  },
  cantidad: {
    type: Number,
    required: true,
    min: 1,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Cancelado", "Pendiente", "Preparado"],
  },
  // Otras propiedades del pedido
});


const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;

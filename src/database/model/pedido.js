import mongoose from "mongoose";
import Producto from "./producto.js";
import {Usuario}  from "./usuarios.js";

mongoose.model("Producto", Producto.schema);
mongoose.model("Usuario", Usuario.schema);


const pedidoSchema = new mongoose.Schema({

  // Definición del esquema de Pedido

  producto: { type: Array, require: true, ref:"Producto"},


  usuario: {
    type: String,
    ref: 'Usuario',
    required:true,
  },
  fecha: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Cancelado", "Pendiente", "Preparado"],
  }
});


const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;

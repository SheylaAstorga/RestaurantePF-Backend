import mongoose from "mongoose";
import Producto from "./producto.js";
import {Usuario}  from "./usuarios.js";

mongoose.model("Producto", Producto.schema);
mongoose.model("Usuario", Usuario.schema);


const pedidoSchema = new mongoose.Schema({
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producto",
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required:false,
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
  }
});


const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;

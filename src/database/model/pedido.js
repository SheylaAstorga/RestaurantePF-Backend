import mongoose from 'mongoose';
import Producto from './producto.js'; // Importa el modelo de Producto

mongoose.model('Producto', Producto.schema); // Registra el modelo de Producto

const pedidoSchema = new mongoose.Schema({
  // Definición del esquema de Pedido
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  // Otras propiedades del pedido
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;
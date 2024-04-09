import mongoose,{Schema} from "mongoose";

const pedidoSchema = new  Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1
      }
})

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;
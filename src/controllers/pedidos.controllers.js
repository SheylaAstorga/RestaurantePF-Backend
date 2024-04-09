import Pedido from "../database/model/pedido.js";

export const listarPedidos =(req,res)=>{
    console.log('desde listar  pedido');
    res.send('enviar pedidos')
}
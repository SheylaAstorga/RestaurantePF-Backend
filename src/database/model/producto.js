import mongoose,{Schema} from "mongoose";

const productoSchema = new Schema({
 nombre:{
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength:50
 },
 estado:{
    type: String,
    required:true,
    enum: ['Disponible','Agotado','En oferta','Recomendado','Especial del dia','Proximamente']
},
 precio:{
    type:Number,
    required: true,
    minLength:50,
    maxLength:10000
},
 detalle:{
    type: String,
    required:true,
    minLength:10,
    maxLength:300
},
categoria:{
    type: String,
    required:true,
    enum: ['Entrada','Desayuno','Plato principal','Postre','Menu infantil','Menu ejecutivo','Vegano','Vegetariano','Celíaco']
},
imagen:{
    type:String,
    required: true,
    match: [/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/]
}
})

const Producto = mongoose.model('producto',productoSchema);

export default Producto;
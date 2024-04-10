import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15
  },
  email: {
    type: String,
    trim: true,
    require: true,
    validate: {
        validator: (value)=>{
            const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
            return pattern.test(value)
        }
    }
  },
  password: {
    type: String,
    trim: true,
    require: true,
    validate: {
        validator: (value)=>{
            const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            return pattern.test(value)
        }
    }
  },
  role: {
    type: String,
    trim: true,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true
  }
});

export const Usuario = mongoose.model('usuario', usuarioSchema);
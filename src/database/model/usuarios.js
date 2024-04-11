import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 15,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return pattern.test(value);
      },
    },
  },
  password: {
    type: String,
    trim: true,
    require: true,
    validate: {
      validator: (value) => {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      },
    },
  },
  role: {
    type: String,
    require: true,
    enum: ["user", "admin"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  perfilRGB: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*\d+(\.\d+)?\s*)?\)$/;
        return pattern.test(value);
      },
    },
  },
});

export const Usuario = mongoose.model("usuario", usuarioSchema);

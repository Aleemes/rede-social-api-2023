import { Schema, model } from "mongoose";

const comentarioSchema = new Schema({
  texto: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    default: Date.now(),
  },

  idPost: {
    type: String,
    required: true,
  },

  idUsuario: {
    type: String,
    required: true,
  },
});

export const Comentario = model("Comentario", comentarioSchema);

import { Schema, model } from "mongoose";


const postSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  mensagem: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  curtidas: {
    type: Number,
    default: 0,
  },
  idUsuario: {
    type: String,
    required: true,
  },

});



export const Post = model("Post", postSchema);

import { Comentario } from "../models/Comentario.js";

const getAllComentariosByIdUsuario = async (idUsuario) => {
  return await Comentario.find({ idUsuario: idUsuario });
};

const getAllComentariosByIdPost = async (idPost) => {
  const comentario = await Comentario.find({
      idPost: idPost,
  });
  return comentario;
};

const createComentario = async (comentario) => {
  return await Comentario.create(comentario);
};

const updateComentario = async (idComentario, edicao, idUsuario) => {
  await Comentario.updateOne({ _id: idComentario, idUsuario: idUsuario }, edicao);
  return getComentarioById(idComentario, idUsuario);
};

const deleteComentarioById = async (id, idUsuario) => {
  await Comentario.deleteOne({ _id: id, idUsuario: idUsuario });
};

export default {
  getAllComentariosByIdPost,
  getAllComentariosByIdUsuario,
  createComentario,
  updateComentario,
  deleteComentarioById,
};




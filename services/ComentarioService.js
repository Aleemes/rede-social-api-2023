import { Comentario } from "../models/Comentario.js";

const getAllComentariosByIdUsuario = async (idUsuario) => {
  return await Comentario.find({ idUsuario: idUsuario });
};

const getComentarioByIdPost = async (idComentario, idUsuario, idPost) => {
  const Comentario = await Comentario.findOne({
    _id: idComentario,
    idUsuario: idUsuario,
    idPost: idPost,
  });
  return Comentario;
};

const createComentario = async (Comentario) => {
  return await Comentario.create(Comentario);
};

const updateComentario = async (idComentario, edicao, idUsuario) => {
  await Comentario.updateOne({ _id: idComentario, idUsuario: idUsuario }, edicao);
  return getComentarioById(idComentario, idUsuario);
};

const deleteComentarioById = async (id, idUsuario) => {
  await Comentario.deleteOne({ _id: id, idUsuario: idUsuario });
};

export default {
  getComentarioByIdPost,
  getAllComentariosByIdUsuario,
  createComentario,
  updateComentario,
  deleteComentarioById,
};




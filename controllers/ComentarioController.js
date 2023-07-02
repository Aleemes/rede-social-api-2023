import { StatusCodes } from "http-status-codes";
import ComentarioService from "../services/ComentarioService.js"; 

const returnError = (err, res) => {
  let statusCode = 500;
  res.status(statusCode).send({ error: err.message });
};

//TODO FAZER GET ALL COMENTARIOS 
export const getAllComentarios = async (req, res) => {
  try {
    const listaComentarios = await ComentarioService.getAllComentariosByIdUsuario(req.user._id);
} catch (err) {
  returnError(err, res);
}
};

export const getComentarioById = async (req, res) => {
  const idComentario = req.params.id;

  try {
    const Comentario = await ComentarioService.getComentarioById(
      idComentario,
      req.user._id
    );
    res.send(Comentario);
  } catch (err) {
    returnError(err, res);
  }
};

export const editarComentario = async (req, res) => {
  try {
    const edicao = req.body;
    const idComentario = req.params.id;
    if (!idComentario || idComentario == undefined) {
      returnError(err, res);
    }

    const Comentario = await ComentarioService.updateComentario(
      idComentario,
      edicao,
      req.user._id
    );
    res.send(Comentario);
  } catch (err) {
    returnError(err, res);
  }
};

export const createComentario = async (req, res) => {
  const Comentario = req.body;

  try {
    Comentario.idUsuario = req.user._id;
    const ComentarioRes = await ComentarioService.createComentario(Comentario);
    return res.send(ComentarioRes);
  } catch (err) {
    returnError(err, res);
  }
};

export const apagarComentario = async (req, res) => {
  const id = req.params.id;
  try {
    await ComentarioService.deleteComentarioById(id, req.user._id);
    res.send({});
  } catch (err) {
    returnError(err, res);
  }
};

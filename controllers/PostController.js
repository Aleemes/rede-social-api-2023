import { StatusCodes } from "http-status-codes";
import PostService from "../services/PostService.js";
import ComentarioService from "../services/ComentarioService.js";

const returnError = (err, res) => {
  let statusCode = 500;
  res.status(statusCode).send({ error: err.message });
};


const atualizaPost = async (post) => {
    
    const comentarios = await ComentarioService.getAllComentariosByIdPost(post._id);
    let novoPost = {...post._doc, comentarios: comentarios}  // TODO Verificar como fazer corretamente
    return novoPost;
}

export const getAllPosts = async (req, res) => {
  try {
    let listaPosts = await PostService.getAllPosts();
    listaPosts = await Promise.all(listaPosts.map(atualizaPost));
    res.send(listaPosts);
  } catch (err) {
    returnError(err, res);
  }
};

export const getPostById = async (req, res) => {
  const idPost = req.params.id;

  try {
    const post = await PostService.getPostById(idPost, req.user._id);
    res.send(post);
  } catch (err) {
    returnError(err, res);
  }
};

export const editarPost = async (req, res) => {
  try {
    const edicao = req.body;
    const idPost = req.params.id;
    if (!idPost || idPost === undefined) {
      throw new Error("ID do post inválido");
    }

    const post = await PostService.updatePost(idPost, edicao, req.user._id);
    res.send(post);
  } catch (err) {
    returnError(err, res);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    post.idUsuario = req.user._id;
    const postRes = await PostService.createPost(post);
    return res.send(postRes);
  } catch (err) {
    returnError(err, res);
  }
};

export const apagarPost = async (req, res) => {
  const id = req.params.id;
  try {
    await PostService.deletePostById(id, req.user._id);
    res.send({});
  } catch (err) {
    returnError(err, res);
  }
};
import { StatusCodes } from "http-status-codes";
import PostService from "../services/PostService.js"; 

const returnError = (err, res) => {
  let statusCode = 500;
  res.status(statusCode).send({ error: err.message });
};

export const getAllPosts = async (req, res) => {
  try {
    const listaPosts = await PostService.getAllPosts(req._id);
    for (post of listaPosts) {
      const comentarios = await ComentarioService.getAllComentariosByIdPost(req.post._id)
      post.comentarios = comentarios
    } 
    for (post of listaPosts) {
      const curtidas = await PostService.getAllCurtidasByIdPost(req.post._id)
      post.curtidas = curtidas
    }
    res.send(listaPosts);
  } catch (err) {
    returnError(err, res);
  }
};

export const getPostById = async (req, res) => {
  const idPost = req.params.id;

  try {
    const Post = await PostService.getPostById(idPost, req.user._id);
    res.send(Post);
  } catch (err) {
    returnError(err, res);
  }
};

export const editarPost = async (req, res) => {
  try {
    const edicao = req.body;
    const idPost = req.params.id;
    if (!idPost || idPost == undefined) {
      returnError(err, res);
    }

    const Post = await PostService.updatePost(idPost, edicao, req.user._id);
    res.send(Post);
  } catch (err) {
    returnError(err, res);
  }
};

export const createPost = async (req, res) => {
  const Post = req.body;

  try {
    Post.idUsuario = req.user._id;
    const PostRes = await PostService.createPost(Post);
    return res.send(PostRes);
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

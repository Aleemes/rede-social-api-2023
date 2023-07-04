import { Post } from "../models/Post.js";

const getAllPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const getAllPostsByIdUsuario = async (idUsuario) => {
  return await Post.find({ idUsuario: idUsuario });
};

const getAllComentariosByIdUsuario = async (idUsuario) => {
  return await Post.find({ idUsuario: idUsuario });
};

const getAllCurtidasByIdPost = async (idPost) => {
  return await Post.find({ _id: idPost });
};

const getPostById = async (idPost, idUsuario) => {
  const post = await Post.findOne({ _id: idPost, idUsuario: idUsuario });
  return post;
};

const createPost = async (postData) => {
  return await Post.create(postData);
};

const createPostTitulo = async (postData) => {
  return await Post.create(postData);
};

const updatePost = async (idPost, edicao, idUsuario) => {
  await Post.updateOne({ _id: idPost, idUsuario: idUsuario }, edicao);
  return getPostById(idPost, idUsuario);
};

const deletePostById = async (id, idUsuario) => {
  await Post.deleteOne({ _id: id, idUsuario: idUsuario });
};

export default {
  getAllPosts,
  getPostById,
  getAllPostsByIdUsuario,
  getAllComentariosByIdUsuario,
  getAllCurtidasByIdPost,
  createPostTitulo,
  createPost,
  updatePost,
  deletePostById,
};
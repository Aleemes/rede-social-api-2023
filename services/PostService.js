import { Post } from "../models/Post.js";

const getAllPosts = async (idPosts) => {
  const Posts = await Posts.find({ _id: idPosts });
  return Posts;
};

const getAllPostsByIdUsuario = async (idUsuario) => {
  return await Post.find({ idUsuario: idUsuario });
};


const getAllComentariosByIdUsuario = async (idUsuario) => {
  return await Post.find({ idUsuario: idUsuario });
};

const getAllCurtidasByIdPost = async (idUsuario) => {
  return await Post.find({ idUsuario: idUsuario });
};

const getPostById = async (idPost, idUsuario) => {
  const Post = await Post.findOne({ _id: idPost, idUsuario: idUsuario });
  return Post;
};

const createPost = async (Post) => {
  return await Post.create(Post);
};

const createPostTitulo = async (Post) => {
  return await Post.create(Post);
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

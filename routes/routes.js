import { Router } from "express";

import {
  getAllPosts,
  getPostById,
  createPost,
  editarPost,
  apagarPost,
} from "../controllers/PostController.js";

import {
  signup,
  login,
  validaToken,
} from "../controllers/AutenticacaoController.js";

import {
  apagarComentario,
  createComentario,
  editarComentario,
  getComentarioById,
  getAllComentarios,
} from "../controllers/ComentarioController.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";


const routes = Router();

//Rotas dos Posts
routes.get("/posts", getAllPosts);
routes.get("/posts/:id", getPostById);
routes.post("/posts", authMiddleware, createPost);
routes.patch("/posts/:id", authMiddleware, editarPost);
routes.delete("/posts/:id", authMiddleware, apagarPost);

//Rota dos Comentarios
routes.get("/posts/:idPost/comentarios", getComentarioById);
routes.post("/posts/:idPost/comentarios", authMiddleware, createComentario);
routes.patch("/posts/:idPost/comentarios/:id", authMiddleware, editarComentario);
routes.delete("/posts/:idPost/comentarios/:id", authMiddleware, apagarComentario);

//Rotas dos Usuarios
routes.post("/usuarios", signup);
routes.post("/usuarios/login", login);
routes.post("/usuarios/login/valid", validaToken);

export default routes;

import dotenv from "dotenv"

import express, { json } from 'express';
import path from 'path';
import routes from "./routes/routes.js";
import conectarAoDb from "./database/db.js";

import { serve, setup } from 'swagger-ui-express';
import swaggerFile from './swagger.json' assert { type: "json" };;

import cors from 'cors';

dotenv.config()

conectarAoDb();
const app = express()
const port = process.env.PORT || 3000;  //será alterado por meio de variáveis de ambiente depois 


app.use(json())
app.use(cors()) //é necessário para o front fazer a chamada da API

app.use(routes)

app.use('/doc', serve, setup(swaggerFile))

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
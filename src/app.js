import express from "express";
import ROUTER from "./routes.js";

const app = express();

// fazer com que o express entenda o body json caso venha no corpo das requisições
app.use(express.json());

// usar router
// deve ser chamado após o express.json pois impacta nas rotas de post e update que precisam fazer leitura de jsons
app.use(ROUTER);

export default app;
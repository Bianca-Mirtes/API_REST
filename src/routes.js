import { Router } from "express"
import SelecaoController from "./app/controllers/SelecaoController.js"

const ROUTER = Router()

// rotas
ROUTER.get('/selecoes', SelecaoController.index)

ROUTER.get('/selecoes/:id', SelecaoController.show)

// cria uma seleção nova
ROUTER.post('/selecoes', SelecaoController.store)

// deletar uma seleção por id
ROUTER.delete('/selecoes/:id', SelecaoController.delete)

// atualiza as selecoes
ROUTER.put('/selecoes/:id', SelecaoController.update)

export default ROUTER
import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
    // seleciona tudo
    async index(req, res) {
        const result = await SelecaoRepository.findAll;
        res.json(result)
    }

    // lista tudo por ID
    async show(req, res){
        const ID = req.params.id;
        const RESULT = await SelecaoRepository.findById(ID);
        res.json(RESULT);
    }

    // criar dados
    async store(req, res){
        const SELECAO = req.body
        const RESULT = await SelecaoRepository.create(SELECAO);
        res.json(RESULT);   
    }

    async update(req, res){
        const SELECAO = req.body;
        const ID = req.params.id;
        const RESULT = await SelecaoRepository.update(ID, SELECAO);
        res.json(RESULT);
    }

    async delete(req, res){
        const ID = req.params.id
        const RESULT = await SelecaoRepository.delete(ID);
        res.json(RESULT)
    }
}

// padrão singleton
export default new SelecaoController()
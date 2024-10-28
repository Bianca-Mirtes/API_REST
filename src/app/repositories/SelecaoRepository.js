import {consult} from "../database/connection.js"

class SelecaoRepository {
    create(selecao){
        const SQL = "INSERT INTO selecoes SET ?;"
        return consult(SQL, selecao)
    }

    findAll(){
        const SQL = "SELECT * FROM selecoes;"
        return consult(SQL)
    }

    findById(id){
        const SQL = "SELECT * FROM selecoes WHERE id=?;"
        return consult(SQL, id)
    }

    update(id, selecao){
        const SQL = "UPDATE selecoes SET ? WHERE id=?;"
        return consult(SQL, [selecao, id])
    }

    delete(id){
        const SQL = "DELETE FROM selecoes WHERE id=?;"
        return consult(SQL, id)
    }
}

export default new SelecaoRepository()
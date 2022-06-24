const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {            //get que retorna todos
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {        //get que retorna específico. :id é um parâmetro do valor que será retornado
        const id = parseInt(req.params.id)              //converter id de string para int

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alterar(id, valores, res)
    })
    // app.post('edit/atendimentos')

    //put = alteração de dados. objeto inteiro
    //patch = alteração de dados. algum atributo do objeto

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deletar(id, res)
    })
    //app.post('/delete/atendimentos/')
}
const moment = require('moment')       //Biblioteca responsável por converter o datetime em data
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(usuario, res) {
        const data_cad = moment().format('YYYY-MM-DD HH:MM:SS')       //Manipular data
        // const data = moment(usuario.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS') 

        const atendimentoDatado = {...usuario, data_cad}
        
        const sql = 'INSERT INTO cad_usuario SET ?'
        
        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(201).json(usuario)
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM cad_usuario'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM cad_usuario WHERE id_usuario=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json(atendimento)
            }
        })
    }

    alterar(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:MM:SS') 
        }

        const sql = 'UPDATE cad_usuario SET ? WHERE id_usuario=?'

        //O segundo parâmetro é o valor que será atribuído a ?, como são duas, um array com 2 valores é feito
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json({...valores, is})
            }
        })
    }

    deletar(id, res) {
        const sql = 'DELETE FROM cad_usuario WHERE id_usuario=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(200).json({id})
            }
        })

    }
}

module.exports = new Atendimento
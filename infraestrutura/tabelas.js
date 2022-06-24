class Tabelas {
    init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
    }
    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS cad_usuario (id_usuario int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, altura float, peso float, email varchar(50), senha varchar(10), data_nasc varchar(10), data_cad datetime, PRIMARY KEY(id_usuario))'        
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log('Tabela atendimentos criada com sucesso!')
            }
        })

    }
}

module.exports = new Tabelas

// const sql = 'CREATE TABLE IF NOT EXISTS cad_usuario (id_usuario int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
// const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

class Usuario {
    // constructor() {
    //     this.nomeDisciplina = document.querySelector('#nomeDisciplina').value
    //     this.pilares_id = Number(document.querySelector('#pilares_id').value)
    // }

    // Adicona dados

    static listar() {
        const info = new Usuario()          //Não recarrega a página

        // Requisição
        await fetch("http://localhost:3000/atendimentos", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        }).then(async (response) => {
            const dados = await response.json()
            console.log(dados.message);    
            document.innerHTML(dados);
        })

    }

}

Usuario.listar()

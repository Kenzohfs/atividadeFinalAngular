
inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);

        resposta({ ok: "Requisição efetuada com sucesso!" });
    });

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: "É necessário preencher o nome" });
    }

    if (!dados.nickname) {
        return resposta({ erro: "É necessário preencher o nickname" });
    }

    database(`INSERT INTO USER (NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.nickname}")`).then(result => {
        console.log("Usuario inserido com sucessso!");
        resposta({ message: "Usuario inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o usuário!");
        resposta({ erro: "Erro ao inserir o usuário!" });
    });
})

inserirRota('/criar_usuario', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM USER').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});
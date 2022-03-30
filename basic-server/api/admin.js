inserirRota("/adicionar-jogo", function (dados, resposta) {
    console.log(dados);
    database(`INSERT INTO JOGO (NOME, PRECO, DESCRICAO, IMAGEM_NOME, FAIXA_ETARIA) VALUES 
    ("${dados.nome}", "${dados.preco}", "${dados.descricao}","${dados.imagem_nome}", "${dados.faixa_etaria}")`).then(result => {
        console.log("Jogo inserido com sucessso!");
        resposta({ message: "Jogo inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o Jogo!");
        resposta({ erro: "Erro ao inserir o Jogo!" });
    });
})

inserirRota("/procurar-jogo", function (dados, resposta) {
    database(`SELECT * FROM JOGO WHERE NOME = "${dados.nome}" AND PRECO = "${dados.preco}" AND DESCRICAO = "${dados.descricao}" AND FAIXA_ETARIA = "${dados.faixa_etaria}" LIMIT 1`)
    .then(result => {
        resposta({ user: result[0] });
    }).catch(erro => {
        resposta({ erro: "Erro ao procurar o jogo" });
    })
})

inserirRota("/inserir-jogo-genero", function(dados, resposta) {
    database(`INSERT INTO JOGO_GENERO (JOGO_CODIGO, GENERO_CODIGO) VALUES ("${dados.jogo_codigo}", "${dados.genero_codigo}")`)
    .then(result => {
        resposta({ message: "Gênero do jogo inserido com sucessso!" });
    }).catch(erro => {
        resposta({ erro: "Erro ao inserir gênero do jogo" });
    })
})

inserirRota("/listar-jogos", function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM JOGO`).then(result => {
        console.log("Console, select");
        resposta(result);
    }).catch(erro => {
        console.log("Console, select erro");
        resposta({ erro: "Erro ao listar os jogos" });
    })
})

inserirRota("/listar-generos", function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM GENERO`).then(result => {
        console.log("Console, select");
        resposta(result);
    }).catch(erro => {
        console.log("Console, select erro");
        resposta({ erro: "Erro ao listar os gêneros" });
    })
})

inserirRota("/listar-jogo-genero", function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM JOGO_GENERO`).then(result => {
        console.log("Console, select");
        resposta(result);
    }).catch(erro => {
        console.log("Console, select erro");
        resposta({ erro: "Erro ao listar os jogos_gêneros" });
    })
})

inserirRota('/listar-jogo-palavra-chave', function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM JOGO WHERE NOME LIKE "%${dados.string}%"`).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ erro: "Erro ao listar os jogos" });
    });
})

inserirRota('/listar-jogo-nome-asc', function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM JOGO ORDER BY NOME ASC`).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ erro: "Erro ao listar os jogos" });
    });
})

inserirRota('/listar-jogo-nome-desc', function (dados, resposta) {
    console.log(dados);
    database(`SELECT * FROM JOGO ORDER BY NOME DESC`).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ erro: "Erro ao listar os jogos" });
    });
})
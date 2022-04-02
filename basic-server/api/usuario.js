
inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM USER').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/buscar_admin', function (dados, resposta) {
    console.log("Dados: ", dados);
    database('SELECT * FROM ADMINISTRADOR').then(result => {
        resposta({ list: result });
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar os admins!" });
    })
})

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados);

    database(`INSERT INTO USER (NOME, EMAIL, SENHA, TELEFONE) VALUES ("${dados.nome}", "${dados.email}", "${dados.senha}", "${dados.telefone}")`).then(result => {
        console.log("Usuario inserido com sucessso!");
        resposta({ message: "Usuario inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o usuário!");
        resposta({ erro: "Erro ao inserir o usuário!" });
    });
})

inserirRota('/login', function (dados, resposta) {
    console.log('teste', dados);

    database(`SELECT * FROM USER WHERE (nome = "${dados.id}" or email = "${dados.id}") AND senha = "${dados.senha}" LIMIT 1`)
        .then(result => {
            resposta({ user: result[0] });
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar os usuários!' });
        });
});

//*
inserirRota('/verificacao_signup',
    function (dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM USER where "${dados.nome}" = NOME or "${dados.email}" = EMAIL`).then(result => {
            resposta(result);
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/verificacao_admin', function (dados, resposta) {
    console.log("verificação admin: ", dados);
    database(`SELECT * FROM ADMINISTRADOR, USER WHERE ("${dados.id}" = USER.NOME OR "${dados.id}" = USER.EMAIL) AND USER.ID = ADMINISTRADOR.USER_ID`).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar o admin"});
    })
});
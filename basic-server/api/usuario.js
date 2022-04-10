
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

inserirRota('/inserir_pedido', function (dados, resposta) {
    database(`INSERT INTO PEDIDO_EFETUADO (VALOR, USER_ID) VALUES (${dados.valor}, ${dados.user_id})`).then(result => {
        console.log("Pedido inserido com sucessso!");
        resposta({ message: "Pedido inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o pedido!");
        resposta({ erro: "Erro ao inserir o pedido!" });
    });
})

inserirRota('/listar_pedidos', function (dados, resposta) {
    console.log("Listar pedidos: ", dados);
    database(`SELECT * FROM PEDIDO_EFETUADO`).then(result => {
        resposta(result);
    }).catch(erro => {
        resposta({ erro: "Erro ao buscar os usuários!" });
    });
})

inserirRota('/inserir_jogo_pedido', function  (dados, resposta) {
    database(`INSERT INTO JOGO_PEDIDO_EFETUADO (JOGO_CODIGO, PEDIDO_EFETUADO_CODIGO) VALUES (${dados.jogo_codigo}, ${dados.pedido_codigo})`).then(result => {
        console.log("Jogo-Pedido inserido com sucessso!");
        resposta({ message: "Jogo-Pedido inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o Jogo-Pedido!");
        resposta({ erro: "Erro ao inserir o pediJogo-Pedidodo!" });
    });
})

inserirRota('/listar_jogo_pedido',
    function (dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM JOGO_PEDIDO_EFETUADO`).then(result => {
            resposta(result);
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

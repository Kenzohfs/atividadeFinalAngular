
inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM USER').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/buscar_admin', function(dados, resposta) {
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

inserirRota('/verificacao_signup',
    function (dados, resposta) {
        console.log(dados);
        database(`SELECT * FROM USER where "${dados.nome}" = NOME or "${dados.email}" = EMAIL`).then(result => {
            resposta( result );
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

// fetch('/api/buscar_usuario', {
//     method: 'POST',
//     body: JSON.stringify(
//         {
//             nome: "bruno", nickname: "BRUNO", idade: 23
//         }
//     ),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(function (result) {
//     return result.json();
// }).then(function (dados) {
//     console.log(dados);
// }).catch(function (erro) {
//     console.log(erro);
// // });

// Select * from user:
// fetch('/api/buscar_usuario', { method: 'POST'});
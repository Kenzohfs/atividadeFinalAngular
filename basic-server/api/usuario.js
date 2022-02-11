
inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados);
        database('SELECT * FROM USER').then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
    });

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados);

    // if (!dados.nome) {
    //     return resposta({ erro: "É necessário preencher o nome" });
    // }

    // if (!dados.nickname) {
    //     return resposta({ erro: "É necessário preencher o nickname" });
    // }

    database(`INSERT INTO USER (NOME, EMAIL, SENHA, TELEFONE) VALUES ("${dados.nome}", "${dados.email}", "${dados.senha}", "${dados.telefone}")`).then(result => {
        console.log("Usuario inserido com sucessso!");
        resposta({ message: "Usuario inserido com sucessso!" });
    }).catch(erro => {
        console.log("Erro ao inserir o usuário!");
        resposta({ erro: "Erro ao inserir o usuário!" });
    });
})

inserirRota('/login', function (dados, resposta) {
    console.log(dados);

    database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" and password = "${dados.password}" limit 1`)
        .then(result => {
            console.log('result:', result);
            resposta({ user: result[0] });
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
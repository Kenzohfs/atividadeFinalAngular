inserirRota("/adicionar-jogo", function (dados, resposta) {
    console.log(dados);
    database(`INSERT INTO JOGO (NOME, PRECO, DESCRICAO, IMAGEM_NOME, FAIXA_ETARIA) VALUES 
    ("${dados.nome}", "${dados.preco}", "${dados.descricao}","${dados.imagem_nome}", "${dados.faixa_etaria}")`)
})
database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(45) not null,
    EMAIL varchar(45) not null,
    SENHA varchar(30) not null,
    TELEFONE char(11)
    )`).then(result => {
    console.log("Tabela User criada com sucesso");

    database(`SELECT * FROM USER`).then(resultado => {
        if (resultado.length == 0) {
            database(`INSERT INTO USER (NOME, EMAIL, SENHA) VALUES
                ('Kenzo', 'kenzo@gmail.com', '123'),
                ('Maria', 'maria@gmail.com', '123'),
                ('Admin', 'admin@gmail.com', '123')
            `).then(result => {
                console.log("Insert inserido com sucesso!");
            }).catch(erro => {
                console.log("Erro!");
            })
            console.log("if");
        } else {
            console.log("elseaaaaa");
        }
    }).catch(erro => {
        console.log("Erro: ", erro);
    })
}).catch(erro => {
    console.log("Erro ao criar tabela User");
});

database(`CREATE TABLE IF NOT EXISTS ADMINISTRADOR (
    matricula integer primary key autoincrement,
    cpf char(11) not null,
    salario double,
    user_id int not null,
    foreign key (user_id) references user (id)
    on delete cascade
    on update cascade
    )`).then(result => {
    console.log("Tabela Administrador criada com sucesso");

    database(`SELECT * FROM ADMINISTRADOR`).then(resultado => {
        if (resultado.length == 0) {
            database(`INSERT INTO ADMINISTRADOR (CPF, USER_ID) VALUES
            ('12595716964', 3)`).then(resultado => {
                console.log("Resultado: ", resultado);
            }).catch(erro => {
                console.log("erro: ", erro);
            });

            console.log("Entrou if");
        } else {
            console.log("Entrou else");
        }
    }).catch(error => {
        console.log("Error: ", error);
    })


}).catch(erro => {
    console.log("Erro ao criar tabela Administrador");
});

database(`CREATE TABLE IF NOT EXISTS JOGO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(45) NOT NULL,
    PRECO VARCHAR(45) NOT NULL,
    DESCRICAO VARCHAR(200),
    IMAGEM_NOME VARCHAR(100),
    FAIXA_ETARIA INTEGER NOT NULL
)`).then(result => {
    console.log("Tabela Jogo criada com sucesso!")
}).catch(erro => {
    console.log("Erro ao criar tabela Jogo!")
})

database(`CREATE TABLE IF NOT EXISTS GENERO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    GENERO VARCHAR(45) NOT NULL,
    TAG VARCHAR(45)
)`).then(result => {
    console.log("Tabela Gênero criada com sucesso!");
}).catch(erro => {
    console.log("Erro ao criar a tabela Gênero!");
})

database(`CREATE TABLE IF NOT EXISTS JOGO_GENERO(
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    GENERO_CODIGO INTEGER NOT NULL,
    JOGO_CODIGO INTEGER NOT NULL,
    FOREIGN KEY (GENERO_CODIGO) REFERENCES GENERO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log("Tabela Jogo_Genero criada com sucesso!");
}).catch(erro => {
    console.log("Erro ao criar a tabela Jogo_Genero!")
});

database(`CREATE TABLE IF NOT EXISTS PEDIDO_EFETUADO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    VALOR DOUBLE NOT NULL,
    JOGO_CODIGO INTEGER NOT NULL,
    USER_ID INTEGER NOT NULL,
    FOREIGN KEY (JOGO_CODIGO) REFERENCES JOGO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    FOREIGN KEY (USER_ID) REFERENCES USER (ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log("Tabela Pedido_efetuado criada com sucesso!");
}).catch(erro => {
    console.log("Erro ao criar a tabela Pedido_Efetuado");
})
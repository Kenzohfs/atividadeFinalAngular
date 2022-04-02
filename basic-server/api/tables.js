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

database(`CREATE TABLE IF NOT EXISTS GENERO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    GENERO VARCHAR(45) NOT NULL
)`).then(result => {
    console.log("Tabela Gênero criada com sucesso!");

    database(`SELECT * FROM GENERO`).then(resultado => {
        if (resultado.length == 0) {
            database(`INSERT INTO GENERO (GENERO) VALUES
            ('Ação'),
            ('Misterio'),
            ('RPG'),
            ('Mundo Aberto'),
            ('2D'),
            ('Plataforma'),
            ('Roguelike'),
            ('Battle Royale')`).then(resultado => {
                console.log("Resultado: ", resultado);
            }).catch(erro => {
                console.log("erro: ", erro);
            });
            console.log("Entrou genero");
        } else {
            console.log("Entrou else Genero");
        }
    }).catch(error => {
        console.log("Error: ", error);
    })

}).catch(erro => {
    console.log("Erro ao criar a tabela Gênero!");
})

database(`CREATE TABLE IF NOT EXISTS JOGO_GENERO(
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    GENERO_CODIGO INTEGER NOT NULL,
    JOGO_CODIGO INTEGER NOT NULL,
    FOREIGN KEY (GENERO_CODIGO) REFERENCES GENERO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (JOGO_CODIGO) REFERENCES JOGO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log("Tabela Jogo_Genero criada com sucesso!");
    database(`SELECT * FROM JOGO_GENERO`).then(resultado => {
        if (resultado.length == 0) {
            database(`INSERT INTO JOGO_GENERO (GENERO_CODIGO, JOGO_CODIGO) VALUES
            (1, 1),
            (3, 1),
            (4, 1),
            (1, 2),
            (3, 2),
            (4, 2),
            (4, 3),
            (5, 3),
            (6, 3)`).then(resultado => {
                console.log('Jogos_generos adicionados');
            }).catch(erro => {
                console.log('Erro ao adicionar jogos_generos: ', erro);
            })
        } else {
            console.log("Jogos_generos já foram adicionados previamente");
        }
    }).catch(erro => {
        console.log('Erro ao listar jogos_generos: ', erro);
    })
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

database(`CREATE TABLE IF NOT EXISTS JOGO_PEDIDO_EFETUADO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    JOGO_CODIGO INTEGER NOT NULL,
    PEDIDO_EFETUADO_CODIGO INTEGER NOT NULL,
    FOREIGN KEY (JOGO_CODIGO) REFERENCES JOGO (CODIGO) 
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PEDIDO_EFETUADO_CODIGO) REFERENCES PEDIDO_EFETUADO (CODIGO)
    ON DELETE CASCADE ON UPDATE CASCADE
)`) .then(result => {
    console.log("Tabela Jogo_Pedido_Efetuado criada com sucesso!");
}).catch(erro => {
    console.log("Erro ao criar a tabela Jogo_Pedido_Efetuado");
})
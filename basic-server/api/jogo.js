database(`CREATE TABLE IF NOT EXISTS JOGO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(45) NOT NULL,
    PRECO DOUBLE NOT NULL,
    DESCRICAO VARCHAR(200),
    IMAGEM_NOME VARCHAR(100),
    IMAGEM_PRINCIPAL VARCHAR(100),
    FAIXA_ETARIA INTEGER NOT NULL
)`).then(result => {
    console.log("Tabela Jogo criada com sucesso!")

    database('SELECT * FROM JOGO').then(resultado => {
        if (resultado.length == 0) {
            database(`INSERT INTO JOGO (NOME, PRECO, DESCRICAO, IMAGEM_NOME, IMAGEM_PRINCIPAL, FAIXA_ETARIA) VALUES
            (
                'Red Dead Redemption II', 
                119.50, 
                'Estados Unidos, 1899.
    
            Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.
            
            Agora com conteúdo adicional no Modo História e um Modo Foto repleto de recursos, Red Dead Redemption 2 também inclui acesso gratuito ao mundo compartilhado de Red Dead Online. Nele, os jogadores assumem uma diversidade de ofícios para construir suas próprias trajetórias na fronteira, seja perseguindo criminosos procurados como Caçador de Recompensa, estabelecendo um negócio como Mercador, escavando tesouros exóticos como Colecionador ou operando uma destilaria subterrânea como Moonshiner, e muito mais.',
                'RED DEAD REDEMPTION II',
                'RED DEAD REDEMPTION II PRINCIPAL',
                18
            ),
            (
                'The Witcher 3 Wild Hunt - GOTY',
                19.99,
                'The Witcher 3: Wild Hunt - Edição Jogo do Ano
                Agora disponível com todas as expansões e conteúdo adicional.
                Torne-se um caçador de monstros profissional e embarque em uma aventura de proporções épicas! Em seu lançamento, The Witcher 3: Wild Hunt logo se tornou um clássico, recebendo mais de 250 prêmios de Jogo do Ano. Agora você pode aproveitar essa gigantesca aventura de mundo aberto, com mais de 100 horas, juntamente com suas duas expansões narrativas que garantem mais 50 horas de jogo. Essa edição inclui todos os conteúdos adicionais – novas armas, armaduras, trajes de companheiros, novo modo de jogo e missões secundárias.',
                'THE WITCHER III WILD HUNT',
                'THE WITCHER III WILD HUNT PRINCIPAL',
                16
            ),
            (
                'Spiritfarer®: Farewell Edition',
                28.99,
                'Spiritfarer®: Farewell Edition é um jogo de gerenciamento reconfortante sobre a morte. Como uma barqueira do além, construa um barco para explorar o mundo, cuide de seus amigos espíritos e liberte suas almas para que sigam adiante. O que você vai deixar para trás?',
                'SPIRITFARER',
                'SPIRITFARER PRINCIPAL',
                10
            ),
            (
                'LEGO® Star Wars™: The Skywalker Saga',
                199.99,
                'Jogue todos os nove filmes da saga Skywalker em um jogo diferente de qualquer outro. Com mais de 300 personagens jogáveis, mais de 100 veículos e 23 planetas para explorar, essa galáxia muito, muito distante nunca foi tão divertida! *Inclui o Obi-Wan Kenobi clássico como personagem jogável',
                'LEGO STAR WARS THE SKYWALKER SAGA',
                'LEGO STAR WARS THE SKYWALKER SAGA PRINCIPAL',
                10
            ),
            (
                'Insurgency: Sandstorm', 
                79.9, 
                'Lute em ambientes dilacerados pela guerra de um conflito contemporâneo ao longo de uma série de modos multijogador intensos, cooperativo e JxJ. Sinta cada bala e tema cada impacto em ferozes combates aproximados enquanto sua equipe luta pela vitória.', 
                'INSURGENCY SANDSTORM', 
                'INSURGENCY SANDSTORM PRINCIPAL', 
                14
            );
            `).then(resultado => {
                console.log("inserts jogo resultado: ", resultado);
            }).catch(erro => {
                console.log('inserts jogo erro: ', erro);
            })
        }
    });
}).catch(erro => {
    console.log("Erro ao criar tabela Jogo!")
})
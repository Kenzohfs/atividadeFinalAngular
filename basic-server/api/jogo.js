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
            ),
            (
                'Amnesia: Rebirth', 
                57.99, 
                'Amnesia: Rebirth, uma nova incursão nas trevas dos criadores da icônica série Amnesia. Uma angustiante jornada pela desolação e pelo desespero, explorando os limites da resiliência humana.', 
                'AMNESIA REBIRTH', 
                'AMNESIA REBIRTH PRINCIPAL', 
                18
            ),
            (
                'Rocket League', 
                0.0, 
                'Rocket League é uma competição híbrida radical de futebol estilo arcade e destruição automotiva com controles fluidos e fáceis de entender baseada em física real. ', 
                'ROCKET LEAGUE', 
                'ROCKET LEAGUE PRINCIPAL', 
                0
            ),
            (
                'Grand Theft Auto V', 
                69.99, 
                'Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se veem encrencados, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade onde não podem confiar em ninguém, nem mesmo um no outro.', 
                'GRAND THEFT AUTO V', 
                'GRAND THEFT AUTO V PRINCIPAL', 
                18
            ),
            (
                'Dead by Daylight', 
                49.99, 
                'Dead by Daylight é um jogo de terror multijogador (4x1) no qual um jogador assume o papel de Assassino enquanto os demais jogadores, na pele de quatro Sobreviventes, tentam fugir e evitar uma morte cruel e violenta.', 
                'DEAD BY DAYLIGHT', 
                'DEAD BY DAYLIGHT PRINCIPAL', 
                18
            ),
            (
                'NBA 2K21', 
                249.9, 
                'O NBA 2K21 é o mais novo jogo da renomada franquia de sucesso mundial NBA 2K. Com empolgantes melhorias de jogabilidade, funcionalidades online competitivas e de comunidade, e contando com modos de jogos variados e aprofundados, o NBA 2K21 oferece uma imersão sem igual no mundo e na cultura do basquete da NBA —onde "Everything is Game", tudo é jogo.', 
                'NBA 2K21', 
                'NBA 2K21 PRINCIPAL', 
                0
            ),
            (
                'Shattered: Tale of the Forgotten King', 
                56.99, 
                'O velho mundo se foi, perdido com o desaparecimento do Rei. Recrie a realidade neste RPG de ação sombrio por meio de combate baseado em habilidade, plataformas em mundo aberto inovadoras e os testemunhos de sobreviventes... alguns mais confiáveis que outros. Você está preparado, Andarilho?', 
                'SHATTERED TALE OF THE FORGOTTEN KING', 
                'SHATTERED TALE OF THE FORGOTTEN KING PRINCIPAL', 
                14
            ),
            (
                'The Hunter: Call of the Wild', 
                37.99, 
                'Experimente um jogo de caça atmosférico sem igual em um mundo aberto realista e de visual deslumbrante. Entre de cabeça na campanha atmosférica para um jogador, ou compartilhe a experiência da caça com seus amigos.', 
                'THE HUNTER CALL OF THE WILD', 
                'THE HUNTER CALL OF THE WILD PRINCIPAL', 
                16
            ),
            (
                "Sid Meier s Civilization® VI", 
                129.0, 
                "Civilization VI oferece novas formas de interagir com o seu mundo, expandir seu império pelo mapa, avançar sua cultura e competir com os maiores líderes da história para criar uma civilização que resistirá ao tempo.", 
                "SID MEIER S CIVILIZATION® VI", 
                "SID MEIER S CIVILIZATION® VI PRINCIPAL", 
                10
            ),
            (
                'ARK: Survival Evolved', 
                56.99, 
                'Isolado na costa de uma ilha misteriosa, você precisa aprender a sobreviver. Use a sua astúcia para matar ou domar as criaturas primitivas que vagam pela área e encontre outros jogadores para sobreviver, dominar... e escapar!', 
                'ARK SURVIVAL EVOLVED', 
                'ARK SURVIVAL EVOLVED PRINCIPAL', 
                14
            ),
            (
                'League of Legends', 
                0.0, 
                'Vire uma lenda. Encontre seu Campeão, domine as habilidades dele e derrote seus oponentes em uma batalha 5v5 épica para destruir a base inimiga.', 
                'LEAGUE OF LEGENDS', 
                'LEAGUE OF LEGENDS PRINCIPAL', 
                10
            ),
            (
                'Farming Simulator 19', 
                69.9, 
                'A incrível simulação de fazenda está de volta com uma renovação total nos gráficos e a experiência agrícola mais completa que você já viu! Torne-se um fazendeiro moderno e desenvolva a sua fazenda em dois imensos ambientes nos Estados Unidos e na Europa, com novas atividades agrícolas e agropecuárias, plantações para colher e animais para cuidar.', 
                'FARMING SIMULATOR 19', 
                'FARMING SIMULATOR 19 PRINCIPAL', 
                0
            ),
            (
                'World War Z: Aftermath', 
                75.99, 
                'World War Z: Aftermath é o jogo de tiro cooperativo de zumbis definitivo, e a próxima evolução do sucesso original World War Z, que já cativou mais de 15 milhões de jogadores. Lute contra hordas de zumbis esfomeados em episódios intensos através de novos locais devastados por zumbis em todo o mundo.', 
                'WORLD WAR Z AFTERMATH', 
                'WORLD WAR Z AFTERMATH PRINCIPAL', 
                16
            ),
            (
                'XCOM® 2', 
                99.9, 
                'Os alienígenas dominam a Terra, mas escondem um plano secreto sinistro. Como líder de uma força de guerrilha, você deve iniciar uma resistência global para eliminar a ameaça alienígena e salvar a raça humana.', 
                'XCOM® 2', 
                'XCOM® 2 PRINCIPAL', 
                14
            ),
            (
                'Othercide', 
                109.9, 
                'Como a última esperança da Humanidade, lidere seu exército na luta contra chefes terríveis em uma dança de ações e reações baseadas no Sistema de Linha do Tempo Dinâmica.', 
                'OTHERCIDE', 
                'OTHERCIDE PRINCIPAL', 
                14
            ),
            (
                'DEATH STRANDING DIRECTOR S CUT', 
                161.99, 
                'Do lendário diretor Hideo Kojima, surge uma experiência que desafia gêneros, ainda maior em DIRECTOR S CUT. Jogando como Sam Bridges, sua missão é entregar esperança à humanidade ao conectar os sobreviventes de uma América devastada.', 
                'DEATH STRANDING DIRECTOR S CUT', 
                'DEATH STRANDING DIRECTOR S CUT PRINCIPAL', 
                14
            ),
            (
                'Ghostwire: Tokyo', 
                209.0, 
                'A população de Tóquio desapareceu e forças sobrenaturais mortais vagam pela cidade. Use um arsenal de habilidades elementais para descobrir a verdade por trás do desaparecimento e salvar a cidade.', 
                'GHOSTWIRE TOKYO', 
                'GHOSTWIRE TOKYO PRINCIPAL', 
                14
            ),
            (
                'Apex Legends™', 
                0.0, 
                'Apex Legends é o premiado jogo de tiro em primeira pessoa de heróis e heroínas da Respawn Entertainment. Domine um elenco cada vez mais amplo de personagens lendários com habilidades poderosas, experimente partidas estratégicas e a jogabilidade inovadora.', 
                'APEX LEGENDS™', 
                'APEX LEGENDS™ PRINCIPAL', 
                14
            );
            `
            ).then(resultado => {
                console.log("inserts jogo resultado: ", resultado);
            }).catch(erro => {
                console.log('inserts jogo erro: ', erro);
            })
        }
    });
}).catch(erro => {
    console.log("Erro ao criar tabela Jogo!")
})
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
            ),
            (
                'Hades', 
                47.49, 
                'Dos criadores de Bastion e Transistor, desafie o deus dos mortos enquanto corta e massacra todos no seu caminho para sair do Submundo neste dungeon crawler roguelike.', 
                'HADES', 
                'HADES PRINCIPAL', 
                10
            ),
            (
                'Neon Abyss', 
                59.99, 
                'O Neon Abyss é um jogo roguelike frenético, onde você corre e atira para entrar no Abismo como parte do "Grim Squad". Com sinergias ilimitadas de itens e um sistema único de masmorras que evoluem, cada partida diversifica a experiência e cada opção altera as regras.', 
                'NEON ABYSS', 
                'NEON ABYSS PRINCIPAL', 
                12
            ),
            (
                'Watch Dogs: Legion', 
                115.49, 
                'Monte uma resistência com praticamente qualquer pessoa que você vê enquanto hackeia, se infiltra e luta para retomar num futuro próximo uma Londres que está à beira do colapso. Boas-vindas à Resistência. Recrute e jogue com qualquer habitante da cidade. Todo mundo que você vê tem história, personalidade e conjunto de habilidades exclusivas.', 
                'WATCH DOGS LEGION', 
                'WATCH DOGS LEGION PRINCIPAL', 
                18
            ),
            (
                'Risk of Rain 2', 
                23.99, 
                'Lute contra legiões de monstros ferozes para escapar de um planeta alienígena caótico – com ajuda de seus amigos ou por conta própria. Combine espólios de guerra de maneiras surpreendentes e domine cada personagem até se tornar a destruição que temia em sua primeira aterrissagem de emergência.', 
                'RISK OF RAIN 2', 
                'RISK OF RAIN 2 PRINCIPAL', 
                14
            ),
            (
                'Rise of the Tomb Raider', 
                85.0, 
                'O Passe de Temporada do Rise of the Tomb Raider: aniversário de 20 anos inclui o jogo base e o Passe de Temporada que apresenta conteúdo totalmente novo. Explore a Mansão Croft na nova história “Laços de Sangue” e a defenda contra uma invasão zumbi em “Pesadelo de Lara”.', 
                'RISE OF THE TOMB RAIDER', 
                'RISE OF THE TOMB RAIDER PRINCIPAL', 
                18
            ),
            (
                'Shadow of the Tomb Raider', 
                145.9, 
                'Em Shadow of the Tomb Raider: Definitive Edition você vivenciará o último capítulo da origem de Lara, no qual ela cumprirá seu destino e se tornará a Tomb Raider. Ao combinar o jogo de base, todas as tumbas de desafios dos sete DLCs, bem como todas as armas, trajes e habilidades complementares, Shadow of the Tomb Raider: Definitive Edition é a forma definitiva de vivenciar o momento determinante de Lara.', 
                'SHADOW OF THE TOMB RAIDER', 
                'SHADOW OF THE TOMB RAIDER PRINCIPAL', 
                18
            ),
            (
                'Tomb Raider GOTY', 
                39.0, 
                'Tomb Raider é uma aventura de ação aclamada pela crítica que explora a história intensa e corajosa da origem de Lara Croft e sua transformação de jovem mulher em sobrevivente implacável. Armada apenas com um instinto brutal e a habilidade de ir além dos limites da resistência humana, Lara deve lutar para desvendar a história sombria de uma ilha esquecida a fim de escapar de seu domínio impiedoso. A Game of the Year Edition inclui Tomb of the Lost Adventurer, 6 trajes para Lara no modo para um jogador e 4 personagens.', 
                'TOMB RAIDER GOTY', 
                'TOMB RAIDER GOTY PRINCIPAL', 
                18
            ),
            (
                'Hollow Knight', 
                27.99, 
                'Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.', 
                'HOLLOW KNIGHT', 
                'HOLLOW KNIGHT PRINCIPAL', 
                14
            ),
            (
                'Pathfinder: Wrath of the Righteous', 
                97.49, 
                'Embarque em uma jornada para um reino tomado por demônios em um novo RPG épico dos mesmos criadores de Pathfinder: Kingmaker. Explore a natureza do bem e do mal, descubra o verdadeiro preço do poder e ascenda como um Herói Mítico capaz de realizar façanhas que vão além de qualquer expectativa mortal.', 
                'PATHFINDER WRATH OF THE RIGHTEOUS', 
                'PATHFINDER WRATH OF THE RIGHTEOUS PRINCIPAL', 
                16
            ),
            (
                'BioShock™ Remastered', 
                29.99, 
                'BioShock é um jogo de tiro diferente de qualquer outro que você já tenha jogado, cheio de armas e táticas nunca vistas. Você terá um arsenal completo à sua disposição que vai de revólveres simples até lançadores de granadas e de produtos químicos.', 
                'BIOSHOCK™ REMASTERED', 
                'BIOSHOCK™ REMASTERED PRINCIPAL', 
                18
            ),
            (
                'BioShock™ 2 Remastered', 
                29.99, 
                'BioShock 2 traz a premiada narrativa da série com um explosivo combate de tiro em primeira pessoa. Rapture novamente ecoa pecados do passado. Ao longo da costa do Atlântico, um monstro tem capturado garotinhas e as levado para a cidade submersa. Os jogadores assumem o papel de Big Daddy, e exploram a decrépita cidade atrás de um inimigo invisível, de respostas e da sua própria sobrevivência.', 
                'BIOSHOCK™ 2 REMASTERED', 
                'BIOSHOCK™ 2 REMASTERED PRINCIPAL', 
                18
            ),
            (
                'BioShock Infinite', 
                89.99, 
                'Em dívida com as pessoas erradas, com sua vida em jogo, veterano da Cavalaria dos EUA e agora contratado, Booker DeWitt tem apenas uma oportunidade de limpar sua lousa. Ele deve resgatar Elizabeth, uma garota misteriosa presa desde a infância e trancada na cidade voadora de Columbia.', 
                'BIOSHOCK INFINITE', 
                'BIOSHOCK INFINITE PRINCIPAL', 
                18
            ),
            (
                'Hood: Outlaws & Legends', 
                74.0, 
                'Em um mundo medieval violento, vença gangues rivais em assaltos multiplayer PvPvE intensos. Seja movimentando-se com furtividade para roubar tesouros sem ser visto(a), seja através de combate brutal e chamativo, apenas os melhores escapam com as riquezas conquistadas.', 
                'HOOD OUTLAWS & LEGENDS', 
                'HOOD OUTLAWS & LEGENDS PRINCIPAL', 
                16
            ),
            (
                'Among Us', 
                9.99, 
                'Jogue com 4 a 15 jogadores online ou na sua rede Wi-Fi enquanto prepara sua nave para decolar, mas cuidado! Um ou mais jogadores aleatórios da Tripulação são Impostores e estão doidos pra matar geral!', 
                'AMONG US', 
                'AMONG US PRINCIPAL', 
                0
            ),
            (
                'Cities: Skylines', 
                55.99, 
                'Cities: Skylines é uma versão moderna dos simuladores de cidade clássicos. O jogo introduz novos elementos de jogabilidade para que você sinta a emoção e a dificuldade de criar e manter uma cidade de verdade, além de aprimorar os elementos clássicos da construção de cidades.', 
                'CITIES SKYLINES', 
                'CITIES SKYLINES PRINCIPAL', 
                0
            ),
            (
                'Spirit of the North', 
                28.49, 
                'Spirit of the North é um jogo de aventura em terceira pessoa para um jogador inspirado nas paisagens de tirar o fôlego e misteriosas da Islândia. A história se enraíza em várias peças do folclore nórdico.', 
                'SPIRIT OF THE NORTH', 
                'SPIRIT OF THE NORTH PRINCIPAL', 
                10
            ),
            (
                'LEGO® Batman™: The Videogame', 
                36.99, 
                'Quando todos os vilões do Asilo Arkham se unem e fogem, apenas a Dupla Dinâmica é corajosa o suficiente para enfrentar todos eles e salvar Gotham City. A diversão de LEGO e o drama de Batman se unem em uma combinação singular, gerando a aventura divertida e animada de LEGO Batman: The Videogame.', 
                'LEGO® BATMAN™ THE VIDEOGAME', 
                'LEGO® BATMAN™ THE VIDEOGAME PRINCIPAL', 
                0
            ),
            (
                'LEGO® Batman™ 2: DC Super Heroes', 
                36.99, 
                'Lendas, uni-vos! A Dupla Dinâmica de Batman e Robin se unem a outros super-heróis famosos do Universo DC, como Super-Homem, Mulher Maravilha e Lanterna Verde, para salvar Gotham City da destruição pelas mãos de notórios vilões como Lex Luthor e Coringa.', 
                'LEGO® BATMAN™ 2 DC SUPER HEROES', 
                'LEGO® BATMAN™ 2 DC SUPER HEROES PRINCIPAL', 
                0
            ),
            (
                'LEGO® Batman™ 3: Beyond Gotham', 
                49.99, 
                'A franquia de games LEGO Batman mais vendida está de volta em uma aventura cheia de ação frenética! No LEGO Batman™ 3: Beyond Gotham, o Cruzado Encapuzado une forças com os super-heróis do universo da DC Comics e vai ao espaço para impedir o malvado Brainiac de destruir a Terra. Usando o poder dos Anéis dos Lanternas, Brainiac encolhe mundos para incrementar sua coleção doentia de cidades em miniatura do universo todo. Agora, os maiores super-heróis e os vilões mais perversos devem se unir e viajar aos Mundos dos Lanternas para colecionar os Anéis e deter Brainiac antes que seja tarde demais.', 
                'LEGO® BATMAN™ 3 BEYOND GOTHAM', 
                'LEGO® BATMAN™ 3 BEYOND GOTHAM PRINCIPAL', 
                0
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
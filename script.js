// ======================================================
// FUTEBOL DA VILA
// JAVASCRIPT
// ======================================================


// ======================================================
// CONFIGURAÇÃO DAS IMAGENS
// ======================================================

const imagemReserva =
    "https://placehold.co/600x600/111111/ffffff?text=Foto+indisponivel";


// ======================================================
// FUNÇÃO PARA CARREGAR IMAGEM
// ======================================================

async function carregarImagem(img, atleta) {

    if (!img || !atleta) {
        return;
    }

    img.src = imagemReserva;

    try {

        const url =
            "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(atleta.nome);

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Atleta não encontrado");
        }

        const dados = await resposta.json();

        if (
            dados.thumbnail &&
            dados.thumbnail.source
        ) {

            img.src = dados.thumbnail.source;

        }

    } catch (erro) {

        console.log(
            "Não foi possível carregar a imagem de:",
            atleta.nome
        );

        img.src = imagemReserva;

    }

}


// ======================================================
// ATLETAS
// ======================================================

const atletas = {

    // ==================================================
    // FUTEBOL
    // ==================================================

    futebol: [

        {
            nome: "Pelé",
            pais: "Brasil",
            numero: "10",
            nascimento: "23 de outubro de 1940",
            falecimento: "29 de dezembro de 2022",
            posicao: "Atacante",
            titulos: "3x Copa do Mundo",

            curiosidades:
                "Foi o único jogador da história a conquistar três Copas do Mundo.",

            biografia:
                "Edson Arantes do Nascimento, mundialmente conhecido como Pelé, é considerado um dos maiores jogadores de futebol de todos os tempos. Nascido em Três Corações, Minas Gerais, começou sua trajetória profissional muito jovem no Santos Futebol Clube e rapidamente chamou atenção pela habilidade, velocidade, inteligência e capacidade de marcar gols. Pelo Santos, conquistou diversos títulos nacionais e internacionais e ajudou o clube a ganhar reconhecimento mundial. Pela Seleção Brasileira, foi campeão das Copas do Mundo de 1958, 1962 e 1970, tornando-se o único jogador a conquistar três Mundiais. Sua carreira marcou profundamente a história do futebol e transformou Pelé em um dos maiores símbolos esportivos do Brasil."
        },

        {
            nome: "Diego Maradona",
            pais: "Argentina",
            numero: "10",
            nascimento: "30 de outubro de 1960",
            falecimento: "25 de novembro de 2020",
            posicao: "Meia-atacante",
            titulos: "1x Copa do Mundo",

            curiosidades:
                "Foi o grande destaque da Argentina na conquista da Copa do Mundo de 1986.",

            biografia:
                "Diego Armando Maradona foi um dos jogadores mais talentosos e influentes da história do futebol. Nascido em Lanús, na Argentina, começou a se destacar ainda muito jovem e construiu uma carreira marcada por habilidade, criatividade, controle de bola e uma enorme capacidade de decidir partidas. Atuou por clubes importantes como Boca Juniors, Barcelona e Napoli, tornando-se especialmente idolatrado pelos torcedores do clube italiano. Pela Seleção Argentina, viveu seu momento mais marcante na Copa do Mundo de 1986, quando liderou a equipe até o título mundial e foi protagonista de partidas históricas."
        },

        {
            nome: "Marco van Basten",
            pais: "Países Baixos",
            numero: "9",
            nascimento: "31 de outubro de 1964",
            posicao: "Atacante",
            titulos: "3x Bola de Ouro",

            curiosidades:
                "Seu gol na final da Eurocopa de 1988 é considerado um dos mais bonitos da história.",

            biografia:
                "Marco van Basten foi um dos grandes atacantes do futebol europeu. O jogador neerlandês ficou conhecido pela técnica refinada, inteligência dentro da área, precisão nas finalizações e capacidade de marcar gols de diferentes maneiras. Construiu sua principal trajetória no Milan, onde conquistou títulos nacionais e internacionais e formou um dos grandes times da história do clube. Pela seleção dos Países Baixos, foi campeão da Eurocopa de 1988 e marcou um gol inesquecível na final. Apesar de uma carreira encerrada precocemente por problemas físicos, deixou uma marca enorme no futebol."
        },

        {
            nome: "Zinedine Zidane",
            pais: "França",
            numero: "10",
            nascimento: "23 de junho de 1972",
            posicao: "Meia",
            titulos: "1x Copa do Mundo",

            curiosidades:
                "Foi eleito o melhor jogador da Copa do Mundo de 2006.",

            biografia:
                "Zinedine Zidane foi um dos maiores meio-campistas de sua geração. Nascido na França, destacou-se pelo controle de bola, visão de jogo, inteligência e elegância dentro de campo. Atuou por Bordeaux, Juventus e Real Madrid, onde conquistou importantes títulos. Pela seleção francesa, foi campeão da Copa do Mundo de 1998 e da Eurocopa de 2000. Após encerrar a carreira como jogador, Zidane também construiu uma trajetória de sucesso como treinador, conquistando três títulos consecutivos da Liga dos Campeões com o Real Madrid."
        },

        {
            nome: "Ronaldo Nazário",
            pais: "Brasil",
            numero: "9",
            nascimento: "18 de setembro de 1976",
            posicao: "Atacante",
            titulos: "2x Copa do Mundo",

            curiosidades:
                "Foi artilheiro da Copa do Mundo de 2002 com oito gols.",

            biografia:
                "Ronaldo Luís Nazário de Lima, conhecido mundialmente como Fenômeno, foi um dos atacantes mais completos da história do futebol. Revelado pelo Cruzeiro, rapidamente chamou atenção pela velocidade, força física, drible e capacidade de finalização. Atuou por grandes clubes europeus, incluindo PSV, Barcelona, Inter de Milão, Real Madrid e Milan. Pela Seleção Brasileira, conquistou as Copas do Mundo de 1994 e 2002. Na Copa de 2002, marcou oito gols e foi fundamental para a conquista do pentacampeonato mundial."
        },

        {
            nome: "Cristiano Ronaldo",
            pais: "Portugal",
            numero: "7",
            nascimento: "5 de fevereiro de 1985",
            posicao: "Atacante",
            titulos: "5x Bola de Ouro",

            curiosidades:
                "É um dos maiores artilheiros da história do futebol internacional.",

            biografia:
                "Cristiano Ronaldo é um dos jogadores mais importantes da história do futebol moderno. Nascido na Ilha da Madeira, iniciou sua carreira profissional no Sporting e ganhou destaque internacional após sua transferência para o Manchester United. No Real Madrid, viveu uma das fases mais marcantes de sua carreira, conquistando títulos nacionais e internacionais e estabelecendo diversos recordes de gols. Também atuou pela Juventus e continuou sendo protagonista pela Seleção Portuguesa, pela qual conquistou a Eurocopa de 2016 e a Liga das Nações. Sua disciplina, preparação física e longevidade fizeram dele uma referência mundial."
        },

        {
            nome: "Neymar",
            pais: "Brasil",
            numero: "10",
            nascimento: "5 de fevereiro de 1992",
            posicao: "Atacante",
            titulos: "1x Copa Libertadores",

            curiosidades:
                "Foi campeão olímpico com o Brasil em 2016.",

            biografia:
                "Neymar da Silva Santos Júnior é um dos principais jogadores brasileiros de sua geração. Revelado pelo Santos, ganhou destaque ainda jovem por seus dribles, criatividade, velocidade e capacidade de criar jogadas decisivas. Pelo Santos, conquistou títulos importantes, incluindo a Copa Libertadores de 2011. Depois, transferiu-se para o Barcelona, onde formou ao lado de Lionel Messi e Luis Suárez um dos ataques mais marcantes do futebol mundial. Também teve uma passagem de destaque pelo Paris Saint-Germain e se tornou uma das principais referências da Seleção Brasileira."
        },

        {
            nome: "Michel Platini",
            pais: "França",
            numero: "10",
            nascimento: "21 de junho de 1955",
            posicao: "Meia",
            titulos: "3x Bola de Ouro",

            curiosidades:
                "Foi o grande destaque da França na conquista da Eurocopa de 1984.",

            biografia:
                "Michel Platini foi um dos maiores meio-campistas da história do futebol europeu. O francês destacou-se pela visão de jogo, qualidade nos passes, precisão nas cobranças de falta e grande capacidade de marcar gols. Atuou por Nancy, Saint-Étienne e Juventus, clube pelo qual viveu o auge de sua carreira. Pela seleção francesa, foi campeão da Eurocopa de 1984 e se tornou uma das principais figuras do futebol internacional durante a década de 1980."
        },

        {
            nome: "Paolo Maldini",
            pais: "Itália",
            numero: "3",
            nascimento: "26 de junho de 1968",
            posicao: "Defensor",
            titulos: "5x Liga dos Campeões",

            curiosidades:
                "Passou praticamente toda sua carreira defendendo o Milan.",

            biografia:
                "Paolo Maldini é considerado um dos maiores defensores da história do futebol. Italiano, passou toda a sua carreira profissional no Milan, clube pelo qual se tornou um dos maiores símbolos. Atuou como lateral-esquerdo e zagueiro, destacando-se pelo posicionamento, técnica, inteligência e liderança. Ao longo de mais de duas décadas, conquistou diversos títulos nacionais e internacionais, incluindo cinco Ligas dos Campeões. Sua longevidade e regularidade fizeram dele uma referência entre os grandes defensores do futebol mundial."
        }

    ],


    // ==================================================
    // BASQUETE
    // ==================================================

    basquete: [

        {
            nome: "Michael Jordan",
            pais: "Estados Unidos",
            numero: "23",
            nascimento: "17 de fevereiro de 1963",
            posicao: "Ala-armador",
            titulos: "6x NBA",

            curiosidades:
                "Conquistou seis títulos da NBA pelo Chicago Bulls.",

            biografia:
                "Michael Jordan é considerado por muitos especialistas um dos maiores jogadores de basquete de todos os tempos. Durante sua carreira na NBA, tornou-se o principal símbolo do Chicago Bulls e conquistou seis títulos da liga. Conhecido pela capacidade de pontuar, defender e decidir partidas importantes, Jordan também foi uma das principais figuras da seleção dos Estados Unidos. Sua participação no Dream Team de 1992 ajudou a transformar o basquete em um fenômeno ainda mais popular no mundo."
        },

        {
            nome: "Kobe Bryant",
            pais: "Estados Unidos",
            numero: "24",
            nascimento: "23 de agosto de 1978",
            falecimento: "26 de janeiro de 2020",
            posicao: "Ala-armador",
            titulos: "5x NBA",

            curiosidades:
                "Toda sua carreira na NBA foi construída no Los Angeles Lakers.",

            biografia:
                "Kobe Bryant foi uma das maiores estrelas da história da NBA. Durante toda sua carreira profissional, defendeu o Los Angeles Lakers e conquistou cinco títulos da liga. Conhecido pela enorme competitividade, habilidade ofensiva e capacidade de decidir partidas, Kobe também conquistou duas medalhas de ouro olímpicas com os Estados Unidos. Sua mentalidade de trabalho e dedicação fizeram dele uma inspiração para milhões de fãs e atletas."
        },

        {
            nome: "LeBron James",
            pais: "Estados Unidos",
            numero: "23",
            nascimento: "30 de dezembro de 1984",
            posicao: "Ala",
            titulos: "4x NBA",

            curiosidades:
                "Conquistou títulos da NBA por três franquias diferentes.",

            biografia:
                "LeBron James é um dos maiores jogadores da história da NBA e uma das principais figuras esportivas do século XXI. Desde o início da carreira, destacou-se pela combinação de força física, velocidade, visão de jogo e capacidade de pontuação. Atuou por Cleveland Cavaliers, Miami Heat e Los Angeles Lakers. Além dos títulos da NBA, também conquistou medalhas olímpicas com a seleção dos Estados Unidos e acumulou inúmeros recordes individuais."
        },

        {
            nome: "Magic Johnson",
            pais: "Estados Unidos",
            numero: "32",
            nascimento: "14 de agosto de 1959",
            posicao: "Armador",
            titulos: "5x NBA",

            curiosidades:
                "É lembrado por seus passes criativos e visão de jogo extraordinária.",

            biografia:
                "Earvin Magic Johnson foi um dos maiores armadores da história do basquete. Durante sua trajetória no Los Angeles Lakers, tornou-se uma das principais estrelas da era Showtime. Sua altura, visão de jogo, habilidade nos passes e liderança fizeram dele um jogador diferente para sua posição. Magic conquistou cinco títulos da NBA e foi uma das figuras mais importantes do basquete durante as décadas de 1980 e 1990."
        },

        {
            nome: "Larry Bird",
            pais: "Estados Unidos",
            numero: "33",
            nascimento: "7 de dezembro de 1956",
            posicao: "Ala",
            titulos: "3x NBA",

            curiosidades:
                "Foi eleito MVP da NBA três vezes.",

            biografia:
                "Larry Bird foi uma das maiores estrelas da história do basquete norte-americano. Ídolo do Boston Celtics, destacou-se pela inteligência, precisão nos arremessos, visão de jogo e enorme competitividade. Conquistou três títulos da NBA e três prêmios de MVP. Sua rivalidade com Magic Johnson também marcou uma das eras mais importantes da história da liga."
        },

        {
            nome: "Shaquille O'Neal",
            pais: "Estados Unidos",
            numero: "34",
            nascimento: "6 de março de 1972",
            posicao: "Pivô",
            titulos: "4x NBA",

            curiosidades:
                "Foi campeão três vezes consecutivas com o Los Angeles Lakers.",

            biografia:
                "Shaquille O'Neal foi um dos pivôs mais dominantes da história da NBA. Sua combinação de tamanho, força física e habilidade próxima à cesta fez dele uma das maiores ameaças ofensivas de sua geração. Conquistou quatro títulos da NBA e foi eleito MVP da temporada em 2000. Sua passagem pelo Los Angeles Lakers marcou uma das eras mais vitoriosas da equipe."
        },

        {
            nome: "Stephen Curry",
            pais: "Estados Unidos",
            numero: "30",
            nascimento: "14 de março de 1988",
            posicao: "Armador",
            titulos: "4x NBA",

            curiosidades:
                "É considerado um dos maiores arremessadores de três pontos da história.",

            biografia:
                "Stephen Curry revolucionou o basquete moderno com sua capacidade de arremessar de longa distância. Principal estrela do Golden State Warriors, tornou-se uma das figuras mais importantes da NBA contemporânea. Sua movimentação sem a bola, controle de jogo e precisão nos arremessos de três pontos mudaram a maneira como muitas equipes passaram a jogar. Curry conquistou quatro títulos da NBA e se tornou referência para uma nova geração."
        },

        {
            nome: "Kareem Abdul-Jabbar",
            pais: "Estados Unidos",
            numero: "33",
            nascimento: "16 de abril de 1947",
            posicao: "Pivô",
            titulos: "6x NBA",

            curiosidades:
                "Seu famoso Skyhook se tornou uma das jogadas mais marcantes do basquete.",

            biografia:
                "Kareem Abdul-Jabbar foi um dos jogadores mais dominantes da história do basquete. Conhecido principalmente pelo famoso Skyhook, construiu uma carreira extremamente vitoriosa na NBA. Atuou pelo Milwaukee Bucks e pelo Los Angeles Lakers, conquistando seis títulos e seis prêmios de MVP. Sua longevidade, técnica e consistência fizeram dele uma referência histórica da modalidade."
        }

    ],


    // ==================================================
    // FÓRMULA 1
    // ==================================================

    formula1: [

        {
            nome: "Ayrton Senna",
            pais: "Brasil",
            numero: "1",
            nascimento: "21 de março de 1960",
            falecimento: "1 de maio de 1994",
            posicao: "Piloto",
            titulos: "3x Campeão Mundial",

            curiosidades:
                "É lembrado como um dos maiores especialistas em corridas sob chuva.",

            biografia:
                "Ayrton Senna foi um dos maiores pilotos da história da Fórmula 1 e um dos maiores ídolos esportivos do Brasil. Conhecido por sua velocidade, concentração e desempenho excepcional em condições difíceis, conquistou três campeonatos mundiais. Sua trajetória pela McLaren ficou marcada por grandes vitórias e pela rivalidade histórica com Alain Prost. Senna também ficou conhecido por seu forte envolvimento com o Brasil e pelo impacto que causou fora das pistas."
        },

        {
            nome: "Michael Schumacher",
            pais: "Alemanha",
            numero: "1",
            nascimento: "3 de janeiro de 1969",
            posicao: "Piloto",
            titulos: "7x Campeão Mundial",

            curiosidades:
                "Conquistou cinco campeonatos consecutivos entre 2000 e 2004.",

            biografia:
                "Michael Schumacher é um dos maiores campeões da história da Fórmula 1. O piloto alemão construiu uma carreira marcada por velocidade, preparação técnica e grande consistência. Após conquistar dois campeonatos pela Benetton, viveu uma era de domínio com a Ferrari, vencendo cinco títulos consecutivos entre 2000 e 2004. Schumacher estabeleceu diversos recordes e ajudou a transformar a Ferrari em uma das equipes mais dominantes da Fórmula 1."
        },

        {
            nome: "Lewis Hamilton",
            pais: "Reino Unido",
            numero: "44",
            nascimento: "7 de janeiro de 1985",
            posicao: "Piloto",
            titulos: "7x Campeão Mundial",

            curiosidades:
                "É um dos pilotos com maior número de vitórias e poles na história da Fórmula 1.",

            biografia:
                "Lewis Hamilton é um dos pilotos mais bem-sucedidos da história da Fórmula 1. O britânico estreou na categoria em 2007 e rapidamente se tornou protagonista. Depois de conquistar seu primeiro campeonato com a McLaren, viveu uma era de grande domínio com a Mercedes. Hamilton se destacou pela velocidade, consistência e capacidade de adaptação, além de ter se tornado uma das figuras mais conhecidas do automobilismo mundial."
        },

        {
            nome: "Alain Prost",
            pais: "França",
            numero: "2",
            nascimento: "24 de fevereiro de 1955",
            posicao: "Piloto",
            titulos: "4x Campeão Mundial",

            curiosidades:
                "Sua rivalidade com Ayrton Senna marcou uma geração da Fórmula 1.",

            biografia:
                "Alain Prost foi um dos grandes pilotos franceses da Fórmula 1. Conhecido pelo apelido de Professor, destacava-se pela inteligência, estratégia e capacidade de administrar corridas. Conquistou quatro campeonatos mundiais e disputou grandes temporadas contra pilotos como Ayrton Senna, Nigel Mansell e Nelson Piquet. Sua rivalidade com Senna se tornou uma das mais famosas da história do automobilismo."
        },

        {
            nome: "Fernando Alonso",
            pais: "Espanha",
            numero: "14",
            nascimento: "29 de julho de 1981",
            posicao: "Piloto",
            titulos: "2x Campeão Mundial",

            curiosidades:
                "Também venceu as 24 Horas de Le Mans.",

            biografia:
                "Fernando Alonso é um dos pilotos mais experientes e talentosos da história da Fórmula 1. O espanhol conquistou dois campeonatos mundiais no início dos anos 2000 pela Renault e posteriormente competiu por equipes como McLaren, Ferrari e Aston Martin. Além da Fórmula 1, Alonso também teve sucesso em outras categorias do automobilismo, mostrando grande capacidade de adaptação e competitividade."
        },

        {
            nome: "Max Verstappen",
            pais: "Países Baixos",
            numero: "33",
            nascimento: "30 de setembro de 1997",
            posicao: "Piloto",
            titulos: "Campeão Mundial de F1",

            curiosidades:
                "Foi o mais jovem piloto a disputar uma corrida de Fórmula 1.",

            biografia:
                "Max Verstappen é um dos principais pilotos da Fórmula 1 contemporânea. O holandês chegou à categoria muito jovem e rapidamente chamou atenção pela velocidade, agressividade e capacidade de ultrapassagem. Pela Red Bull Racing, tornou-se protagonista e conquistou campeonatos mundiais. Sua disputa pelo título e seu estilo de pilotagem ajudaram a construir uma nova geração de fãs da Fórmula 1."
        },

        {
            nome: "Juan Manuel Fangio",
            pais: "Argentina",
            numero: "1",
            nascimento: "24 de junho de 1911",
            falecimento: "17 de julho de 1995",
            posicao: "Piloto",
            titulos: "5x Campeão Mundial",

            curiosidades:
                "Foi campeão mundial cinco vezes durante a década de 1950.",

            biografia:
                "Juan Manuel Fangio foi uma das primeiras grandes lendas da Fórmula 1. O piloto argentino competiu durante os primeiros anos da categoria e conquistou cinco campeonatos mundiais. Sua carreira foi marcada por técnica, experiência e grande capacidade de pilotagem. Durante décadas, Fangio foi considerado o principal recordista da Fórmula 1 e se tornou uma referência histórica do automobilismo."
        },

        {
            nome: "Niki Lauda",
            pais: "Áustria",
            numero: "1",
            nascimento: "22 de fevereiro de 1949",
            falecimento: "20 de maio de 2019",
            posicao: "Piloto",
            titulos: "3x Campeão Mundial",

            curiosidades:
                "Retornou às corridas poucas semanas após sofrer um grave acidente em 1976.",

            biografia:
                "Niki Lauda foi um dos maiores pilotos austríacos da história da Fórmula 1. Conquistou três campeonatos mundiais e ficou conhecido tanto por seu talento quanto por sua determinação. Em 1976, sofreu um grave acidente no circuito de Nürburgring, mas surpreendeu o mundo ao retornar às pistas poucas semanas depois. Sua rivalidade com James Hunt também marcou uma das temporadas mais lembradas da Fórmula 1."
        }

    ],


    // ==================================================
    // VÔLEI
    // ==================================================

    volei: [

        {
            nome: "Giba",
            pais: "Brasil",
            numero: "7",
            nascimento: "23 de dezembro de 1976",
            posicao: "Ponteiro",
            titulos: "1x Ouro Olímpico",

            curiosidades:
                "Foi campeão olímpico com o Brasil em 2004.",

            biografia:
                "Gilberto Amauri de Godoy Filho, conhecido como Giba, é um dos maiores jogadores da história do voleibol brasileiro. Durante sua carreira, destacou-se pela habilidade ofensiva, recepção, liderança e capacidade de decidir pontos importantes. Pela seleção brasileira, conquistou títulos mundiais e a medalha de ouro nos Jogos Olímpicos de Atenas em 2004. Giba também teve uma carreira de sucesso em clubes brasileiros e internacionais."
        },

        {
            nome: "Karch Kiraly",
            pais: "Estados Unidos",
            numero: "1",
            nascimento: "3 de novembro de 1960",
            posicao: "Ponteiro",
            titulos: "3x Ouro Olímpico",

            curiosidades:
                "Conquistou ouro olímpico no vôlei de quadra e no vôlei de praia.",

            biografia:
                "Karch Kiraly é uma das maiores figuras da história do voleibol mundial. O norte-americano conquistou medalhas de ouro olímpicas tanto no vôlei de quadra quanto no vôlei de praia. Sua técnica, inteligência e consistência fizeram dele um atleta único. Depois da carreira como jogador, também passou a trabalhar como treinador, continuando ligado ao desenvolvimento do esporte."
        },

        {
            nome: "Kerri Walsh Jennings",
            pais: "Estados Unidos",
            numero: "1",
            nascimento: "15 de agosto de 1978",
            posicao: "Vôlei de praia",
            titulos: "3x Ouro Olímpico",

            curiosidades:
                "Conquistou três ouros olímpicos consecutivos no vôlei de praia.",

            biografia:
                "Kerri Walsh Jennings é uma das maiores atletas da história do vôlei de praia. A norte-americana conquistou três medalhas de ouro olímpicas consecutivas ao lado de Misty May-Treanor. Conhecida pela força, técnica, regularidade e inteligência tática, tornou-se uma das principais referências femininas da modalidade."
        },

        {
            nome: "Sheilla Castro",
            pais: "Brasil",
            numero: "13",
            nascimento: "1 de julho de 1983",
            posicao: "Oposta",
            titulos: "2x Ouro Olímpico",

            curiosidades:
                "Foi bicampeã olímpica com a seleção brasileira.",

            biografia:
                "Sheilla Castro foi uma das principais atacantes do voleibol feminino brasileiro. Pela seleção brasileira, conquistou duas medalhas de ouro olímpicas, em Pequim 2008 e Londres 2012. Conhecida pela força de seus ataques e eficiência ofensiva, Sheilla também teve uma carreira de destaque em clubes brasileiros e internacionais, tornando-se uma das jogadoras mais importantes de sua geração."
        },

        {
            nome: "Fabiana Oliveira",
            pais: "Brasil",
            numero: "1",
            nascimento: "7 de março de 1980",
            posicao: "Líbero",
            titulos: "2x Ouro Olímpico",

            curiosidades:
                "Foi bicampeã olímpica com a seleção brasileira.",

            biografia:
                "Fabiana Oliveira, conhecida como Fabi, foi uma das principais líberos da história do voleibol brasileiro. Durante sua carreira pela seleção, destacou-se pela qualidade na recepção, defesa e organização do sistema defensivo. Fabi foi bicampeã olímpica e fez parte de uma das gerações mais vitoriosas do voleibol feminino brasileiro."
        }

    ]

};


// ======================================================
// INFORMAÇÕES DOS ESPORTES
// ======================================================

const esportes = {

    futebol: {
        nome: "Futebol",
        descricao:
            "O futebol reúne técnica, estratégia, velocidade e muita emoção."
    },

    basquete: {
        nome: "Basquete",
        descricao:
            "O basquete combina velocidade, precisão, estratégia e decisões rápidas."
    },

    formula1: {
        nome: "Fórmula 1",
        descricao:
            "A Fórmula 1 reúne velocidade, tecnologia, estratégia e habilidade."
    },

    volei: {
        nome: "Vôlei",
        descricao:
            "O vôlei exige técnica, comunicação, concentração e trabalho em equipe."
    }

};


// ======================================================
// ELEMENTOS DA PÁGINA
// ======================================================

const botao =
    document.getElementById("botao");

const botaoSorteio =
    document.getElementById("botaoSorteio");

const informacoes =
    document.getElementById("informacoes");


// ======================================================
// BOTÃO EXPLORAR ESPORTES
// ======================================================

if (botao) {

    botao.addEventListener("click", function () {

        const esportesSection =
            document.getElementById("esportes");

        if (esportesSection) {

            esportesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ======================================================
// BOTÕES DOS ESPORTES
// ======================================================

document
    .querySelectorAll(".btn-info")
    .forEach(function (botaoInfo) {

        botaoInfo.addEventListener(
            "click",
            function () {

                const card =
                    botaoInfo.closest(".sport-card");

                if (!card) {
                    return;
                }

                const esporte =
                    card.dataset.esporte;

                abrirEsporte(esporte);

            }
        );

    });


// ======================================================
// ABRIR ESPORTE
// ======================================================

function abrirEsporte(esporte) {

    const dados =
        esportes[esporte];

    const lista =
        atletas[esporte];

    if (!dados || !lista || !informacoes) {
        return;
    }


    let html = `

        <div class="info-box">

            <button
                class="fechar-info"
                type="button"
            >
                ×
            </button>

            <div class="info-cabecalho">

                <span>
                    ${dados.nome}
                </span>

                <h2>
                    Grandes nomes do ${dados.nome}
                </h2>

                <p>
                    ${dados.descricao}
                </p>

            </div>

            <div class="atletas-grid">

    `;


    lista.forEach(function (atleta, indice) {

        html += `

            <article class="atleta-card">

                <div class="atleta-imagem-container">

                    <img
                        class="atleta-imagem"
                        alt="Foto de ${atleta.nome}"
                        loading="lazy"
                    >

                    <span class="atleta-numero">
                        ${atleta.numero}
                    </span>

                </div>


                <div class="atleta-conteudo">

                    <span class="atleta-pais">
                        ${atleta.pais}
                    </span>

                    <h3>
                        ${atleta.nome}
                    </h3>

                    <p>
                        ${atleta.posicao}
                    </p>

                    <button
                        class="btn-atleta"
                        type="button"
                        data-indice="${indice}"
                    >
                        Conhecer história →
                    </button>

                </div>

            </article>

        `;

    });


    html += `

            </div>

        </div>

    `;


    informacoes.innerHTML = html;


    const imagens =
        informacoes.querySelectorAll(
            ".atleta-imagem"
        );


    imagens.forEach(function (img, indice) {

        carregarImagem(
            img,
            lista[indice]
        );

    });


    informacoes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    adicionarEventosInternos(esporte);

}


// ======================================================
// EVENTOS INTERNOS
// ======================================================

function adicionarEventosInternos(esporte) {

    if (!informacoes) {
        return;
    }


    const fechar =
        informacoes.querySelector(
            ".fechar-info"
        );


    if (fechar) {

        fechar.addEventListener(
            "click",
            fecharInformacoes
        );

    }


    informacoes
        .querySelectorAll(".btn-atleta")
        .forEach(function (botaoAtleta) {

            botaoAtleta.addEventListener(
                "click",
                function () {

                    const indice =
                        Number(
                            botaoAtleta.dataset.indice
                        );

                    abrirAtleta(
                        esporte,
                        indice
                    );

                }
            );

        });

}


// ======================================================
// ABRIR PERFIL COMPLETO DO ATLETA
// ======================================================

function abrirAtleta(esporte, indice) {

    const atleta =
        atletas[esporte][indice];

    if (!atleta || !informacoes) {
        return;
    }


    let falecimento = "";


    if (atleta.falecimento) {

        falecimento = `

            <div class="detalhe-box">

                <span>
                    Falecimento
                </span>

                <strong>
                    ${atleta.falecimento}
                </strong>

            </div>

        `;

    }


    informacoes.innerHTML = `

        <div class="info-box perfil-atleta">

            <button
                class="fechar-info"
                type="button"
            >
                ×
            </button>


            <div class="perfil-atleta-grid">


                <div class="perfil-imagem-container">

                    <img
                        class="perfil-imagem"
                        alt="Foto de ${atleta.nome}"
                    >

                </div>


                <div class="perfil-conteudo">

                    <span class="perfil-tag">
                        GRANDE NOME DO ESPORTE
                    </span>


                    <h2>
                        ${atleta.nome}
                    </h2>


                    <p class="perfil-pais">
                        ${atleta.pais}
                        •
                        ${atleta.posicao}
                    </p>


                    <div class="dados-atleta">

                        <div class="detalhe-box">

                            <span>
                                Nascimento
                            </span>

                            <strong>
                                ${atleta.nascimento}
                            </strong>

                        </div>


                        ${falecimento}


                        <div class="detalhe-box">

                            <span>
                                Principal conquista
                            </span>

                            <strong>
                                ${atleta.titulos}
                            </strong>

                        </div>

                    </div>


                    <div class="biografia">

                        <h3>
                            Biografia
                        </h3>

                        <p class="texto-biografia">
                            ${atleta.biografia}
                        </p>

                    </div>


                    <div class="perfil-detalhes">

                        <span>
                            Curiosidade
                        </span>

                        <p>
                            ${atleta.curiosidades}
                        </p>

                    </div>


                    <button
                        class="btn-voltar"
                        type="button"
                    >
                        ← Voltar para os atletas
                    </button>

                </div>

            </div>

        </div>

    `;


    const imagemPerfil =
        informacoes.querySelector(
            ".perfil-imagem"
        );


    carregarImagem(
        imagemPerfil,
        atleta
    );


    informacoes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const fechar =
        informacoes.querySelector(
            ".fechar-info"
        );


    if (fechar) {

        fechar.addEventListener(
            "click",
            fecharInformacoes
        );

    }


    const voltar =
        informacoes.querySelector(
            ".btn-voltar"
        );


    if (voltar) {

        voltar.addEventListener(
            "click",
            function () {

                abrirEsporte(esporte);

            }
        );

    }

}


// ======================================================
// FECHAR INFORMAÇÕES
// ======================================================

function fecharInformacoes() {

    if (informacoes) {

        informacoes.innerHTML = "";

    }

}


// ======================================================
// SORTEIO DE CRAQUE
// ======================================================

if (botaoSorteio) {

    botaoSorteio.addEventListener(
        "click",
        sortearCraque
    );

}


function sortearCraque() {

    if (!informacoes) {
        return;
    }


    const todos = [];


    Object.keys(atletas)
        .forEach(function (esporte) {

            atletas[esporte]
                .forEach(function (atleta, indice) {

                    todos.push({

                        atleta: atleta,

                        esporte: esporte,

                        indice: indice

                    });

                });

        });


    if (todos.length === 0) {
        return;
    }


    const sorteado =
        todos[
            Math.floor(
                Math.random() *
                todos.length
            )
        ];


    const atleta =
        sorteado.atleta;


    informacoes.innerHTML = `

        <div class="sorteio-box">


            <div class="sorteio-imagem">

                <img
                    class="imagem-sorteio"
                    alt="Foto de ${atleta.nome}"
                >

            </div>


            <div class="sorteio-conteudo">

                <span class="sorteio-tag">
                    🎲 CRAQUE SORTEADO
                </span>


                <h2>
                    ${atleta.nome}
                </h2>


                <p class="sorteio-texto">
                    ${esportes[sorteado.esporte].nome}
                    •
                    ${atleta.pais}
                </p>


                <p>
                    ${atleta.biografia}
                </p>


                <button
                    class="btn-voltar"
                    type="button"
                    id="verCraque"
                >
                    Conhecer perfil completo →
                </button>

            </div>

        </div>

    `;


    const imagemSorteio =
        informacoes.querySelector(
            ".imagem-sorteio"
        );


    carregarImagem(
        imagemSorteio,
        atleta
    );


    informacoes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    const verCraque =
        document.getElementById(
            "verCraque"
        );


    if (verCraque) {

        verCraque.addEventListener(
            "click",
            function () {

                abrirAtleta(
                    sorteado.esporte,
                    sorteado.indice
                );

            }
        );

    }

}


// ======================================================
// HEADER AO ROLAR A PÁGINA
// ======================================================

const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.classList.add(
                "header-scroll"
            );

        } else {

            header.classList.remove(
                "header-scroll"
            );

        }

    }
);


// ======================================================
// CONTADOR NO CONSOLE
// ======================================================

let totalAtletas = 0;


Object.values(atletas)
    .forEach(function (lista) {

        totalAtletas += lista.length;

    });


console.log(
    "Futebol da Vila carregado com " +
    totalAtletas +
    " atletas."
);
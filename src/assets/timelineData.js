const timelineData = [
	{
		year: "1910",
		title: "A fundação",
		text: "Às 20h30 do dia 1º de setembro, à luz de um lampião, na esquina das ruas José Paulino e Cônego Martins, no bairro do Bom Retiro, o grupo de operários formado por Anselmo Corrêa, Antônio Pereira, Carlos Silva, Joaquim Ambrósio e Raphael Perrone fundaram o Sport Club Corinthians Paulista. Com mais oito rapazes, foi formada a reunião dos primeiros integrantes e sócio fundadores do Timão, que teve seu nome inspirado na equipe inglesa Corinthian Football Club, que fazia excursão pelo Brasil. O presidente escolhido por eles foi o alfaiate Miguel Battaglia, que, já no primeiro momento, afirmou: “O Corinthians vai ser o time do povo e o povo é quem vai fazer o time”. Um terreno alugado na Rua José Paulino foi aplainado, virou campo e foi lá que, já no dia 14 de setembro, o primeiro treino foi realizado diante de uma plateia entusiasmada, que garantiu: “Este veio para ficar!”.",
	},
	{
		year: "1911",
		title: "Fora de casa",
		text: "Primeiro jogo do Timão fora da cidade de São Paulo. Na manhã de 17 de setembro, vitória sobre a Ponte Preta em Campinas por 1 a 0.",
	},
	{
		year: "1912",
		title: "Jogos na várzea",
		text: "Registro de jogos na várzea cujos resultados não foram encontrados. Os adversários foram Paulista, Concórdia, Botafogo, Minas Gerais, Maranhão e Vila Mariana.",
	},
	{
		year: "1913",
		title: "Estreia no Paulista",
		text: "Pela primeira vez, o Corinthians participou do campeonato da Liga Paulista de Futebol. O Alvinegro terminou em quarto lugar entre cinco equipes.",
	},
	{
		year: "1914",
		title: "O primeiro título",
		text: "Primeiro título do Sport Club Corinthians Paulista. Com 10 vitórias em 10 jogos disputados, o Timão marcou 37 gols e venceu a última partida por 3 a 0, contra o Lusitano, no Parque Antártica. O atacante Neco foi o artilheiro do torneio com 12 gols. O Alvinegro conquistou o Campeonato Paulista com uma rodada de antecedência. No dia 08 de novembro, a equipe derrotou o Campos Elyseos por 4 a 0 e sagrou-se campeã com a seguinte escalação: Aristides, Fúlvio e Casemiro González; Police, Bianco e César Nunes; Américo, Peres, Amílcar, Apparício e Neco.",
	},
	{
		year: "1915",
		title: "Ano discreto",
		text: "O Alvinegro deixou a Liga Paulista de Futebol por conta de uma vaga desejada no campeonato da Associação Paulista de Esportes Atléticos, onde jogavam os grandes times da época. Porém, ficou de fora das duas competições.",
	},
	{
		year: "1916",
		title: "Campeão",
		text: "De volta ao campeonato da Liga Paulista de Futebol, o Timão foi novamente campeão com 100% de aproveitamento: nove vitórias em nove jogos. Apparício foi o artilheiro do torneio com sete gols.",
	},
	{
		year: "1917",
		title: "Rivalidades antigas",
		text: "O Corinthians disputou pela primeira vez o Campeonato Paulista ao lado de seus maiores rivais na época. Terminou em quarto lugar, atrás do Paulistano (campeão), do Palestra Itália (vice) e do Santos (terceiro).",
	},
	{
		year: "1918",
		title: "O primeiro estádio",
		text: "Em suas horas de folga, os jogadores alvinegros construíram o gramado do primeiro estádio oficial corinthiano. Nomeado como Ponte Grande, a casa do Timão ficava onde hoje é a Ponte das Bandeiras, na Marginal Tietê.",
	},
	{
		year: "1919",
		title: "Torneio Início",
		text: "Campeão do primeiro Torneio Início da história do futebol de São Paulo. No mesmo ano, o Alvinegro conquistou a primeira vitória sobre o Palestra Itália em jogos de campeonato. No Parque Antártica, o ponta-direita Américo marcou o gol que definiu o resultado da partida: 1 a 0.",
	},
	{
		year: "1920",
		title: "O artilheiro Neco",
		text: "O Corinthians foi bicampeão do Torneio Início. Com 24 gols, Neco foi novamente o artilheiro do Campeonato Paulista. O ataque alvinegro atingiu a marca de 75 gols em 17 jogos.",
	},
	{
		year: "1921",
		title: "Ficou no quase",
		text: "No Natal, o Timão precisava vencer o Palestra para ser campeão. O adversário, porém, levou a melhor e tirou o título do Alvinegro.",
	},
	{
		year: "1922",
		title: "Centenário da Independência",
		text: "O Corinthians foi campeão paulista no ano do Centenário da Independência do Brasil. O jogo, disputado em fevereiro do ano seguinte, terminou em 2 a 0 sobre o Paulistano no campo da Floresta.",
	},
	{
		year: "1923",
		title: "Bicampeonato Paulista",
		text: "Pela primeira vez, o clube foi bicampeão paulista. Líder do turno inicial, o time começou o segundo com seis pontos de vantagem e só precisaria vencer três dos sete jogos restantes para levar o caneco.",
	},
	{
		year: "1924",
		title: "O primeiro tri",
		text: "Mantendo a hegemonia no estadual, o Alvinegro conquistou o primeiro tricampeonato paulista. A Revolução Tenentista fez o torneio ser interrompido, mas, na volta, o título foi garantido com uma vitória sobre o Paulistano por 1 a 0.",
	},
	{
		year: "1925",
		title: "Por pouco",
		text: "O Timão quase chegou ao tetra. O Paulistano se retirou do campeonato, mas os resultados de seus jogos não foram descontados. Caso tivessem sido, o clube terminaria à frente do campeão A. A. São Bento.",
	},
	{
		year: "1926",
		title: "Parque São Jorge",
		text: "O Corinthians comprou o terreno do Parque São Jorge, cujo campo seria reformado e reinaugurado dois anos depois.",
	},
	{
		year: "1927",
		title: "Ano de participações",
		text: "A equipe alvinegra não levantou nenhuma taça no ano, mas participou de dois campeonatos paulistas diferentes: o da Liga dos Amadores de Futebol (LAF) e o da Associação Paulista de Esportes Atléticos (Apea).",
	},
	{
		year: "1928",
		title: "A Fazendinha",
		text: "No dia 22 de julho, o Parque São Jorge foi reinaugurado no empate em 2 a 2 contra o América‑RJ. Com a ilustre defesa formada por Tuffy, Grané e Del Debbio, o clube voltou a conquistar o Paulista no final do ano.",
	},
	{
		year: "1929",
		title: "Mosqueteiro",
		text: "O Alvinegro foi bicampeão do Campeonato Paulista novamente e, dessa vez, com 100% de aproveitamento: sete vitórias em sete jogos. No mesmo ano, a equipe venceu sua primeira partida internacional. Na ocasião, o Corinthians venceu o Barracas (ARG) por 3 a 1 no Parque São Jorge. Apparício, Rato e Rodrigues marcaram os gols da virada. No dia seguinte, o jornalista Thomaz Mazzoni, do impresso A Gazeta, relatou a partida destacando a “fibra de mosqueteiro” demonstrada pelos jogadores. Nesse mesmo ano, a Gazeta criou diversos mascotes aos times e, consequentemente, atribuiu o Mosqueteiro ao Timão.",
	},
	{
		year: "1930",
		title: "O campeão dos campeões",
		text: "Em 1930, o Timão fechou a década com seis conquistas do Campeonato Paulista em 10 disputados. Foi o segundo tricampeonato alvinegro. Logo depois, o Corinthians venceu o Vasco, campeão carioca, por 3 a 2. Por conta desse resultado, passou a ser chamado de “Campeão dos Campeões”.",
	},
	{
		year: "1931",
		title: "Venda de estrelas",
		text: "Devido ao ótimo desempenho do clube, quatro titulares da equipe tricampeã foram vendidos para a Lazio, da Itália. Sem Del Debbio, Filó, Rato e De Maria, o Alvinegro ficou enfraquecido e não passou do sexto lugar no Paulista.",
	},
	{
		year: "1932",
		title: "Estadual fraco",
		text: "Com uma campanha discreta, o Corinthians terminou o campeonato estadual em quarto lugar. Em meio à Revolução Constitucionalista, a competição foi disputada em somente um turno, vencido pelo Palestra.",
	},
	{
		year: "1933",
		title: "Técnico do Uruguai",
		text: "O Timão contratou seu primeiro técnico de futebol remunerado, o uruguaio Pedro Mazzulo. A campanha no Paulista foi novamente o quarto lugar.",
	},
	{
		year: "1934",
		title: "O futuro ídolo Teleco",
		text: "No final do ano, o Corinthians ganhou um grande reforço: Teleco. O centroavante paranaense viria a se tornar um dos maiores artilheiros do clube.",
	},
	{
		year: "1935",
		title: "Não deu",
		text: "O Alvinegro brigou pelo título paulista até o fim com os reforços de Jaú, De Maria e Brandão, mas terminou em terceiro lugar. Teleco foi o artilheiro da competição com nove gols.",
	},
	{
		year: "1936",
		title: "Invicto",
		text: "Invicto! Durante o ano inteiro, o Corinthians não perdeu nenhum jogo. Foram 28 vitórias e três empates, incluindo as partidas amistosas. O Timão venceu o primeiro turno do Paulista, mas perdeu a final para o Palestra, campeão do returno, já em 1937.",
	},
	{
		year: "1937",
		title: "Mais um Paulistão",
		text: "No campeonato estadual daquele ano, o clube do Parque São Jorge levou o caneco. O duelo mais marcante foi o da vitória sobre o Palestra por 1 a 0 na antepenúltima rodada, com gol de Teleco.",
	},
	{
		year: "1938",
		title: "Nenhuma derrota",
		text: "Com gol de Carlito, o alvinegro do Parque São Jorge empatou em 1 a 1 com o São Paulo e levou, de forma invicta, o bicampeonato paulista.",
	},
	{
		year: "1939",
		title: "É tri!",
		text: "Pela terceira vez, o Coringão conquistou o tricampeonato estadual. Até hoje, nenhum clube venceu mais de três vezes seguidas o Campeonato Paulista.",
	},
	{
		year: "1940",
		title: "Pacaembu",
		text: "No dia 28 de abril, o Timão inaugurou o estádio do Pacaembu, vencendo o Atlético‑MG por 4 a 2.",
	},
	{
		year: "1941",
		title: "Artilharia e título",
		text: "Pela quinta vez, Teleco foi artilheiro do Paulistão. O atacante marcou 26 gols e foi um dos grandes nomes da conquista da competição. O Corinthians conquistou o campeonato com duas rodadas de antecedência ao derrotar o Santos por 3 a 2 na Vila Belmiro.",
	},
	{
		year: "1942",
		title: "Dois campeonatos",
		text: "Naquele ano, o Timão conquistou dois títulos. O primeiro deles foi a I Taça Cidade de São Paulo, triangular com os três primeiros colocados do Paulista do ano anterior. Logo depois, venceu a Quinela de Ouro, disputada por Corinthians, Palestra, São Paulo, Flamengo e Fluminense.",
	},
	{
		year: "1943",
		title: "Taça Paulista",
		text: "Além de ser bicampeão da Taça Paulista, a equipe fez novamente o artilheiro do estadual (Hércules, com 19 gols). Apesar disso, o título ficou com o São Paulo.",
	},
	{
		year: "1944",
		title: "Torneio Início",
		text: "Naquele ano, o Timão contratou o zagueiro Domingos da Guia, venceu o Torneio Início e ficou em terceiro lugar no Paulista.",
	},
	{
		year: "1945",
		title: "O artilheiro Servílio",
		text: "Apesar de não ter faturado nenhum título, o Coringão novamente foi dono do artilheiro do Paulista: Servílio, com 17 gols.",
	},
	{
		year: "1946",
		title: "Chegou perto",
		text: "Mesmo com 18 vitórias e apenas duas derrotas em 20 jogos, o Alvinegro ficou com o segundo lugar no estadual.",
	},
	{
		year: "1947",
		title: "Sempre na final",
		text: "O Corinthians levou o título da Taça Cidade de São Paulo e o vice‑campeonato no Paulistão.",
	},
	{
		year: "1948",
		title: "Vitórias internacionais",
		text: "Além de vencer novamente a Taça Cidade de São Paulo, o clube conquistou grandes vitórias em amistosos internacionais, realizados no Brasil, contra o River Plate (ARG) e o Torino (ITA).",
	},
	{
		year: "1949",
		title: "Ídolos contratados",
		text: "Após ficar somente em quinto lugar no Campeonato Paulista, a equipe do Parque São Jorge passou por uma renovação com a contratação de futuros ídolos do time, como Cabeção, Idário, Roberto e Luizinho.",
	},
	{
		year: "1950",
		title: "O primeiro Rio‑São Paulo",
		text: "Com 20 gols em sete jogos, o Timão conquistou o primeiro Torneio Rio‑São Paulo de sua história. O último jogo terminou no empate em 1 a 1 com o Botafogo no Pacaembu. A escalação do duelo foi Bino, Newton e Belfare; Idário, Touguinha e Hélio; Cláudio, Luizinho, Baltazar, Nelsinho e Noronha.",
	},
	{
		year: "1951",
		title: "O ataque dos 100 gols",
		text: "Após 10 anos, o Alvinegro foi campeão paulista novamente. O ataque formado por Cláudio, Luizinho, Baltazar, Carbone e Mário fez 103 gols em apenas 30 jogos. No mesmo ano, o Corinthians disputou sua primeira partida fora do Brasil. No Torneio Internacional/Quadrangular de Montevidéu, o clube derrotou o Combinado Uruguaio por 4 a 1 no estádio de Montevidéu.",
	},
	{
		year: "1952",
		title: "Timão internacional",
		text: "Baltazar foi o artilheiro do Paulista, com 27 gols, e um dos destaques do bicampeonato. O Timão também fez sua primeira excursão à Europa, com 12 vitórias, três empates e apenas uma derrota em duelos realizados na Suécia, Turquia, Dinamarca e Finlândia.",
	},
	{
		year: "1953",
		title: "Ano de glórias",
		text: "O Coringão venceu pela segunda vez o Rio‑São Paulo e levou também a Pequena Taça do Mundo, jogando contra Barcelona (ESP), Roma (ITA) e a Seleção de Caracas, na Venezuela.",
	},
	{
		year: "1954",
		title: "IV Centenário",
		text: "O Alvinegro foi campeão de três competições naquele ano. Além de vencer o Torneio Rio‑São Paulo e o Torneio Charles Miller, o time levou o caneco do Paulista. Ano do quarto centenário desde a fundação da cidade de São Paulo, o campeonato de 1954 era muito desejado por todos os clubes. O Corinthians o conquistou tendo em seu último jogo a seguinte escalação: Gilmar, Rafael, Goiano, Homero, Idário, Alan, Nonô, Roberto, Simão, Luizinho e Cláudio.",
	},
	{
		year: "1955",
		title: "Em cima dos lusos",
		text: "Com uma vitória por 2 a 1 em cima do Benfica (POR) no Pacaembu, o Timão conquistou o Torneio Internacional Charles Miller.",
	},
	{
		year: "1956",
		title: "Taça dos Invictos",
		text: "Pela primeira vez, o Corinthians levou a cobiçada Taça dos Invictos, por conta de seus 25 jogos sem derrota no Paulista. Foram 17 vitórias e oito empates. Apesar disso, o Alvinegro terminou o campeonato apenas na terceira posição.",
	},
	{
		year: "1957",
		title: "Dono definitivo",
		text: "O Coringão ficou com o segundo lugar no Campeonato Paulista, mas tornou‑se dono definitivo da Taça dos Invictos. Foram 35 jogos sem perder na competição, com 25 vitórias e 10 empates.",
	},
	{
		year: "1958",
		title: "Timão no Mundial",
		text: "Além de ter vencido o Troféu Charles Miller e o Torneio Brasília, o clube do Parque São Jorge teve grande importância no primeiro título da Seleção Brasileira da Copa do Mundo. Na Suécia, o goleiro Gilmar e o lateral esquerdo Oreco representaram o país e o Corinthians na conquista inédita.",
	},
	{
		year: "1959",
		title: "Inesquecível",
		text: "Vicente Matheus foi eleito presidente do Sport Club Corinthians Paulista. Ficou no Timão durante oito mandatos.",
	},
	{
		year: "1960",
		title: "Sem conquistas",
		text: "O Timão contratou Almir, o “Pelé Branco”, pela quantia recorde de 8 milhões de cruzeiros. Mas a equipe não foi tão bem no Paulista e ficou somente com o terceiro lugar.",
	},
	{
		year: "1961",
		title: "Campanha fraca",
		text: "Com uma campanha discreta, o Alvinegro terminou o Paulista na sexta posição.",
	},
	{
		year: "1962",
		title: "I Taça São Paulo",
		text: "Naquele ano, o clube foi campeão da I Taça São Paulo, torneio eliminatório envolvendo equipes de todas as divisões de SP.",
	},
	{
		year: "1963",
		title: "Três comandantes",
		text: "O Corinthians foi comandado por três técnicos em 1963: Fleitas Solich, Rato e Del Debbio. Porém, foi somente o nono colocado entre os 16 participantes do Paulistão.",
	},
	{
		year: "1964",
		title: "Luta até o fim",
		text: "Com a volta do ídolo Luizinho, o Timão lutou pelo título estadual até o fim, mas não levou.",
	},
	{
		year: "1965",
		title: "Rivellino",
		text: "Com Rivellino na equipe, o Timão venceu o Torneio Pentagonal do Recife. Além disso, tornou‑se o primeiro clube a vestir a camisa da Seleção no exterior, mas saiu derrotado pelo Arsenal por 2 a 0 em Londres.",
	},
	{
		year: "1966",
		title: "Rio‑São Paulo dividido",
		text: "O Corinthians foi campeão do Torneio Rio‑São Paulo ao lado de Botafogo, Santos e Vasco por falta de datas para disputar os desempates. Naquele ano, o clube havia contratado Ditão, Nair e Garrincha, que formavam um time fortíssimo.",
	},
	{
		year: "1967",
		title: "Não foi longe",
		text: "Liderou a primeira fase do torneio Robertão, mas não teve bons resultados no quadrangular final.",
	},
	{
		year: "1968",
		title: "A quebra do tabu",
		text: "Com gols de Paulo Borges e Flávio, o Coringão venceu o Santos por 2 a 0 e quebrou um tabu de 11 anos sem derrotar a equipe do litoral paulista. Na noite de 06 de março, a equipe alvinegra entrou no Pacaembu com a seguinte escalação: Diogo, Osvaldo Cunha, Ditão, Luís Carlos e Maciel; Édson Cegonha e Rivelino; Buião, Paulo Borges, Flávio e Eduardo.",
	},
	{
		year: "1969",
		title: "Ano triste",
		text: "Com o falecimento do lateral Lidu e do ponta Eduardo, o Timão perdeu a liderança do Paulista e não conquistou a competição.",
	},
	{
		year: "1970",
		title: "Corinthians é Brasil",
		text: "Naquele ano, o Corinthians contava com três jogadores da Seleção Brasileira: o goleiro Ado, o meia Rivellino e o lateral Zé Maria. Foi em 70 que o Brasil conquistou o tricampeonato Mundial.",
	},
	{
		year: "1971",
		title: "O primeiro Brasileirão",
		text: "No primeiro Campeonato Brasileiro da história, o Alvinegro dominou a primeira fase e foi líder, mas não teve um bom desempenho no final da competição.",
	},
	{
		year: "1972",
		title: "Passou perto",
		text: "Semifinalista no Brasileiro, o clube perdeu para o Botafogo a chance de decidir o título contra o Palmeiras.",
	},
	{
		year: "1973",
		title: "Ano discreto",
		text: "Com o técnico “linha‑dura” Yustrich, o time do Parque São Jorge teve uma campanha discreta no Paulista (quarto lugar) e no Brasileiro (12º lugar).",
	},
	{
		year: "1974",
		title: "Final complicada",
		text: "O Timão voltou a disputar o título paulista diretamente em um jogo após 17 anos. A derrota para o Palmeiras na decisão resultou na saída de Rivellino para o Fluminense.",
	},
	{
		year: "1975",
		title: "Desempenho baixo",
		text: "Basílio e Cesar Maluco foram os reforços da temporada, mas o Alvinegro ficou apenas com o quarto lugar no estadual e em sexto no nacional.",
	},
	{
		year: "1976",
		title: "Invasão Corinthiana",
		text: "Calcula‑se que cerca de 80 mil corinthianos tenham viajado até o Rio de Janeiro para assistir ao jogo em que o Corinthians empatou com o Fluminense por 1 a 1, ganhou nos pênaltis (4 a 1) e classificou‑se para a decisão do Campeonato Brasileiro de 1976 contra o Internacional. É, até hoje, um dos maiores deslocamentos pacíficos do homem no mundo.",
	},
	{
		year: "1977",
		title: "Fim do Jejum",
		text: "Depois de 22 anos, oito meses e sete dias, o Corinthians era novamente campeão paulista. O gol foi marcado por Basílio na final do Campeonato Paulista na vitória por 1 a 0 sobre a Ponte Preta, realizada no Morumbi no dia 13 de outubro. Quatro dias antes, o estádio registrou seu maior público: 146.072 pessoas acompanharam um dos jogos da final entre as equipes. O Timão terminou a competição com 72 gols marcados em 48 partidas. No time do técnico Oswaldo Brandão, o artilheiro do torneio foi Geraldão, com 25 gols.",
	},
	{
		year: "1978",
		title: "Chegada de ídolos",
		text: "Já com Sócrates, Amaral e Biro‑Biro, o Alvinegro ganhou o primeiro turno do Campeonato Paulista, mas não se consagrou campeão.",
	},
	{
		year: "1979",
		title: "Mais um Paulistão",
		text: "A decisão do Paulista foi disputada no ano seguinte, tendo o Corinthians como vencedor. Na semifinal, o clube do Parque São Jorge bateu o rival Palmeiras, considerado o melhor time do torneio.",
	},
	{
		year: "1980",
		title: "Bateu na trave",
		text: "O Timão tinha tudo para levar o bicampeonato estadual, mas perdeu as semifinais do returno para a Ponte Preta.",
	},
	{
		year: "1981",
		title: "Campanha ruim",
		text: "O Alvinegro não realizou boas campanhas no Paulista e no Brasileiro. O oitavo lugar no estadual levaram a equipe a disputar a Taça de Prata.",
	},
	{
		year: "1982",
		title: "Democracia Corinthiana",
		text: "Embalado pelos ideais da Democracia Corinthiana, o Timão foi campeão paulista naquele ano. O movimento visava maior participação dos jogadores e demais empregados do clube nas decisões do Departamento de Futebol. Durou até 1985 e contou com um grupo de jogadores talentosos e únicos, como Sócrates, Casagrande, Zenon, Biro‑Biro, Zé Maria e Wladimir, entre outros.",
	},
	{
		year: "1983",
		title: "Goleada histórica",
		text: "Depois de 30 anos, a equipe do Parque São Jorge foi bicampeã paulista novamente. Assim como no ano anterior, o clube venceu o São Paulo: 1 a 0 no primeiro jogo e 1 a 1 no segundo. Ainda em 83, o Corinthians aplicou a maior goleada de todos os tempos no Campeonato Brasileiro: 10 a 1 no Tiradentes‑PI.",
	},
	{
		year: "1984",
		title: "Sócrates na Europa",
		text: "O tri paulista escapou na última rodada com a derrota para o Santos por 1 a 0. Sócrates foi vendido para a Fiorentina (ITA).",
	},
	{
		year: "1985",
		title: "Não brilharam",
		text: "Apesar de ter montado um time considerado excelente, a temporada não foi boa para o Corinthians, que não chegou às semifinais nem no Brasileiro nem no Paulista.",
	},
	{
		year: "1986",
		title: "Rivalidade maior",
		text: "O Timão chegou às semifinais do Paulista, mas não passou do Palmeiras. No nacional, foi até as quartas.",
	},
	{
		year: "1987",
		title: "Campanha memorável",
		text: "No Campeonato Paulista, o Corinthians saiu da penúltima colocação no primeiro turno para um histórico vice‑campeonato.",
	},
	{
		year: "1988",
		title: "O 20º Paulistão",
		text: "No ano do centenário da abolição da escravatura, Viola marcou na prorrogação, garantiu a vitória alvinegra sobre o Guarani por 1 a 0 e o 20º título paulista do clube.",
	},
	{
		year: "1989",
		title: "Neto neles!",
		text: "O Corinthians não conquistou nenhum título, mas contratou o futuro ídolo Neto naquele ano.",
	},
	{
		year: "1990",
		title: "Campeão brasileiro",
		text: "No dia 16 de dezembro, o Timão levantou o troféu de campeão brasileiro pela primeira vez na história. Com 23 gols marcados em 25 partidas, a equipe do técnico Nelsinho Baptista venceu o São Paulo por 1 a 0 no último jogo, realizado no Morumbi. Neto marcou nove dos 23 gols, cinco em venenosas cobranças de falta. A escalação do time no dia da grande final foi: Ronaldo, Giba, Marcelo, Guinei e Jacenir; Márcio, Wilson Mano e Tupãzinho; Neto, Fabinho e Mauro.",
	},
	{
		year: "1991",
		title: "Vice‑campeão",
		text: "O Corinthians voltou a disputar a Libertadores depois de 14 anos, mas caiu nas oitavas de final diante do Boca Juniors (ARG). No Paulistão, ficou com o vice‑campeonato.",
	},
	{
		year: "1992",
		title: "Desempenho médio",
		text: "O Alvinegro ficou com a terceira posição no estadual e com o quinto lugar no Brasileiro.",
	},
	{
		year: "1993",
		title: "Fora da final",
		text: "No Campeonato Brasileiro, mesmo tendo perdido somente para o Vitória, em Salvador, o time ficou de fora da decisão.",
	},
	{
		year: "1994",
		title: "Troféu Bandeirantes",
		text: "A equipe do Parque São Jorge conquistou o Troféu Bandeirantes em cima do Santos, que garantiu vaga na Copa do Brasil do ano seguinte.",
	},
	{
		year: "1995",
		title: "Campeão de tudo",
		text: "Em um ano espetacular, o Corinthians foi campeão da Copa São Paulo de Juniores, do Campeonato Paulista e da Copa do Brasil. Nesse último, o Alvinegro venceu oito das 10 partidas disputadas. Os jogos da final foram disputados com o Grêmio. Tanto no Pacaembu quanto no Olímpico, vitórias corinthianas: 2 a 1 em casa e 1 a 0 em Porto Alegre.",
	},
	{
		year: "1996",
		title: "Até na Espanha",
		text: "A equipe do Parque São Jorge faturou o troféu Ramón de Carranza, disputado em Cádiz, na Espanha.",
	},
	{
		year: "1997",
		title: "O rei do estadual",
		text: "Com jogadores como Antônio Carlos, Túlio e Donizete, o Alvinegro venceu mais um Paulista.",
	},
	{
		year: "1998",
		title: "O Brasil é alvinegro",
		text: "Após os empates em 2 a 2 e 1 a 1 nos primeiros jogos, o Timão venceu o Cruzeiro por 2 a 0 na última partida com gols de Edílson e Marcelinho Carioca, sagrando‑se bicampeão Brasileiro. No dia 23 de dezembro, a escalação da equipe foi: Nei, Índio, Batata, Gamarra e Silvinho; Ricardinho, Vampeta, Rincón e Marcelinho; Edílson e Mirandinha. A equipe de Vanderlei Luxemburgo marcou 57 gols em 32 duelos, sendo que 19 deles foram do artilheiro Marcelinho Carioca.",
	},
	{
		year: "1999",
		title: "Dono do país de novo",
		text: "O Corinthians levou mais um Paulista e, pelo segundo ano consecutivo, o Brasileiro. Como havia acontecido no ano anterior, o Alvinegro dominou o nacional de ponta a ponta em 1999. Os resultados dos três jogos finais foram: Atlético‑MG 3 x 2 Corinthians, Corinthians 2 x 0 Atlético‑MG e Corinthians 0 x 0 Atlético‑MG. A escalação na última partida foi: Dida, Índio, Márcio Costa, João Carlos e Kléber; Gilmar, Rincón, Vampeta e Ricardinho; Edílson e Marcelinho. Dessa vez, o técnico era Oswaldo de Oliveira. Luizão marcou 21 dos 61 gols que o Alvinegro fez durante as 29 rodadas.",
	},
	{
		year: "2000",
		title: "O primeiro Mundial",
		text: "O primeiro título mundial de clubes reconhecido pela Fifa veio com uma vitória nos pênaltis contra o Vasco depois do empate sem gols no tempo normal. A escalação da final foi: Dida, Índio, Adílson, Fábio Luciano e Kléber; Rincón, Vampeta, Ricardinho e Marcelinho; Edílson e Luizão. O Alvinegro fez seis gols em quatro jogos disputados. O segundo tento de Edílson no empate em 2 a 2 contra o Real Madrid é considerado um dos mais marcantes da história corinthiana.",
	},
	{
		year: "2001",
		title: "Gol inesquecível",
		text: "O Coringão faturou mais uma vez o título do Campeonato Paulista. Porém, a cena que vai ficar marcada para sempre na memória da Fiel é o gol de Ricardinho contra o Santos na semifinal. Nos últimos segundos do jogo decisivo, o meia fez 2 a 1 para o Alvinegro e garantiu a equipe na final.",
	},
	{
		year: "2002",
		title: "Ano fantástico",
		text: "Sob o comando do técnico Carlos Alberto Parreira, o Timão teve um ano glorioso. No dia 12 de maio, foi campeão do Rio‑São Paulo em cima do tricolor paulista com a vitória por 3 a 2 na primeira partida da final e com o empate em 1 a 1 no segundo jogo. Três dias depois, o Corinthians levantou mais um troféu. Contra o Brasiliense, o Alvinegro faturou a Copa do Brasil pela segunda vez. No duelo de ida, 2 a 1 para o time paulista. Já na volta, a partida terminou com um gol para cada equipe.",
	},
	{
		year: "2003",
		title: "Título sobre o rival",
		text: "Com duas vitórias por 3 a 2 sobre o São Paulo, o Coringão levou o Campeonato Paulista mais uma vez. Rogério, Fábio Luciano e Gil marcaram no primeiro duelo. Na partida final, Liédson e Jorge Wágner (2) balançaram as redes para delírio da Fiel. O clube também aplicou uma goleada histórica naquele ano: 6 a 1 em cima do Paysandu pelo Brasileirão.",
	},
	{
		year: "2004",
		title: "Preparação para o tetra",
		text: "O Timão teve uma campanha discreta no Brasileiro, ficando apenas com o quinto lugar.",
	},
	{
		year: "2005",
		title: "Campeão galático",
		text: "Com um elenco de estrelas, o Corinthians conquistou o tetracampeonato brasileiro. Sob o comando do atacante argentino Carlitos Tevez, que marcou 20 gols no torneio, o clube venceu 24 partidas e empatou nove, mesmo número de derrotas. Um dos duelos mais memoráveis foi o 7 a 1 em cima do rival Santos. A equipe do técnico Antônio Lopes marcou 87 gols e sofreu 29. A escalação da última partida foi: Fábio Costa, Marinho, Wendel, Coelho e Gustavo Nery; Marcelo Mattos, Rosinei, Bruno Octávio e Carlos Alberto; Nilmar e Tevez.",
	},
	{
		year: "2006",
		title: "Campanha fraca",
		text: "Com o desmanche do elenco, o Alvinegro foi mal no Brasileiro e se esforçou para continuar na série A.",
	},
	{
		year: "2007",
		title: "O pior episódio da história",
		text: "No pior ano da história do clube, o Timão foi rebaixado para a série B do Campeonato Brasileiro.",
	},
	{
		year: "2008",
		title: "O Coringão voltou!",
		text: "Sob a liderança do técnico Mano Menezes, o Corinthians teve uma ótima campanha na série B e conquistou o título com quatro rodadas de antecedência. Foram 79 gols marcados em 38 duelos. A última partida foi realizada no Pacaembu, com vitória corinthiana por 3 a 2 sobre o Avaí. Os atacantes Dentinho e Herrera foram os artilheiros da equipe, com 14 gols cada.",
	},
	{
		year: "2009",
		title: "Ano fenomenal",
		text: "Um dos maiores ídolos do futebol de todos os tempos foi o principal nome daquele ano no Corinthians. Ronaldo, o Fenômeno, marcou o gol mais bonito de sua carreira no primeiro jogo da final do Paulistão contra o Santos. Com a vitória por 3 a 1, bastou um empate em 1 a 1 na volta para o Alvinegro levar o caneco de forma invicta. Dois meses depois, em julho, o Timão venceu o Internacional em casa por 2 a 0 no primeiro duelo da final da Copa do Brasil. Em Porto Alegre, o resultado de 2 a 2 garantiu mais um título ao Coringão.",
	},
	{
		year: "2010",
		title: "Centenário Corinthiano",
		text: "Apesar de não ter levado nenhum título em 2010, o ano foi de muita festa para a Fiel Torcida por conta do Centenário Corinthiano. No dia 1º de setembro, mais de 100 mil loucos do bando lotaram o Anhangabaú para as comemorações de aniversário do Timão. Em novembro, Ronaldo Fenômeno marcou o último gol de sua carreira como profissional. De pênalti, o eterno camisa 9 fez o gol da vitória por 1 a 0 sobre o Cruzeiro.",
	},
	{
		year: "2011",
		title: "Pentacampeonato brasileiro",
		text: "Em um empate sem gols contra o seu maior rival, o Timão conquistou, pela quinta vez, o Campeonato Brasileiro. A campanha do Alvinegro foi de 21 vitórias, oito empates e nove derrotas. A equipe de 2011 ficou conhecida pela regularidade dentro e fora de casa, além de uma excelente defesa. Liédson foi o artilheiro corinthiano com 12 gols. A escalação no último jogo foi: Júlio César, Alessandro, Paulo André, Leandro Castán e Fábio Santos; Wallace, Paulinho e Alex; Willian, Jorge Henrique e Liédson. No mesmo ano, o estádio do Corinthians, em construção, foi nomeado oficialmente a sede da abertura da Copa do Mundo 2014.",
	},
	{
		year: "2012",
		title: "O ano inesquecível!",
		text: "Pela primeira vez na história, o Corinthians foi campeão da Libertadores. E, para ser perfeito, de forma invicta! Foram 22 gols marcados e apenas quatro sofridos em oito vitórias e seis empates. O atacante Emerson marcou os gols da vitória por 2 a 0 contra o Boca Juniors (ARG) no jogo de volta da grande final. A escalação da partida foi: Cássio, Alessandro, Chicão, Leandro Castán e Fábio Santos; Ralf, Paulinho, Danilo e Alex; Jorge Henrique e Emerson. O gol de cabeça Paulinho contra o Vasco, que levou o Corinthians às semifinais da Libertadores, já é considerado por muitos o mais marcante da história do clube. Além disso, o Timão conquistou a Copinha também de forma invicta e teve um atleta medalhista olímpico em Londres. O nadador Thiago Pereira ficou com a prata nos 400m medley. Em dezembro, o Bando de Loucos invadiu o Japão e viu o Corinthians conquistar o Mundial de Clubes da Fifa pela segunda vez. Guerrero marcou de cabeça e garantiu o título contra o Chelsea no ano que se tornou inesquecível para a Fiel Torcida.",
	},
	{
		year: "2013",
		title: "Dois títulos em sequência",
		text: "Após um ano inesquecível, o Timão conquistou mais dois títulos em 2013. O primeiro foi contra o rival Santos. Pelo Paulistão, o Corinthians venceu a primeira partida da final por 2 a 1, no Pacaembu, e empatou o segundo jogo em 1 a 1, na Vila Belmiro, levantando a taça pela 27ª e mantendo o título de maior campeão estadual de SP. Em julho, o Alvinegro enfrentou o São Paulo nas finais da Recopa Sul‑Americana. Com gols de Guerrero e Renato Augusto, a equipe do Parque São Jorge venceu o primeiro duelo por 2 a 1, fora de casa. No confronto final, Romarinho e Danilo garantiram a conquista corinthiana com a vitória de 2 a 0.",
	},
	{
		year: "2014",
		title: "Inauguração da Arena Corinthians",
		text: "Comandado pelo técnico Mano Menezes, o Corinthians embalou na segunda metade da temporada e terminou o Brasileirão daquele ano na 4ª colocação, garantindo classificação para a Copa Libertadores do ano seguinte. No dia 19 de maio, em partida entre Corinthians e Figueirense, pelo Campeonato Brasileiro, aconteceu a inauguração da Arena Corinthians, casa da fiel desde então.",
	},
	{
		year: "2015",
		title: "Sexto título brasileiro",
		text: "Com a volta do técnico Tite, o Corinthians conquistou o sexto título brasileiro de sua história. Com 81 pontos conquistados, o Timão teve a melhor campanha da história do Campeonato Brasileiro em pontos corridos com 20 clubes. Foram 24 vitórias, nove empates e cinco derrotas, melhor ataque (71), melhor defesa (31), melhor equipe mandante e melhor visitante. O título foi confirmado em partida contra o Vasco, em São Januário, válida pela 35ª rodada. Vagner Love marcou o gol do empate em 1 a 1 que deu a taça ao Corinthians. Na rodada seguinte, na Arena Corinthians, a equipe corinthiana goleou o rival São Paulo por 6 a 1 no jogo da entrega da taça.",
	},
	{
		year: "2016",
		title: "Ano discreto",
		text: "O Corinthians teve uma campanha discreta no Campeonato Brasileiro, terminando na sétima colocação. No meio do ano, a Arena Corinthians recebeu jogos do torneio de futebol dos Jogos Olímpicos do Rio de Janeiro.",
	},
	{
		year: "2017",
		title: "Paulistão e Brasileirão",
		text: "Na primeira temporada de Fábio Carille como treinador corinthiano, o Timão conquistou o 28º título paulista e o 7º Brasileirão de sua história. Apontado como uma das equipes mais frágeis entre os grandes no início da temporada, o Timão venceu o torneio estadual após eliminar o São Paulo nas semifinais e bater a Ponte Preta na decisão. No Brasileirão, o Corinthians deu continuidade ao grande momento da equipe e alcançou a segunda maior série invicta da história do clube. Foram 34 jogos sem perder num intervalo de tempo de cinco meses: do 19 de março a 19 de agosto. No fim do ano, o Corinthians confirmou o título do Brasileirão em vitória sobre o Fluminense, na Arena Corinthians.",
	},
	{
		year: "2018",
		title: "Bicampeonato paulista",
		text: "No ano de 2018, o Corinthians voltou a conquistar o bicampeonato paulista após 35 anos. Na final, o Timão bateu o arquirrival Palmeiras, em pleno Allianz Parque.",
	},
	{
		year: "2019",
		title: "Tricampeão estadual após 80 anos",
		text: "Este ano, o Timão voltou a ser tricampeão paulista, após 80 anos (o último Tri havia sido em 1937, 1938 e 1939). Na decisão, o Alvinegro venceu o São Paulo, na Arena Corinthians, e levantou o seu 30º campeonato estadual.",
	},
	{
		year: "2025",
		title: "O título do Derby em casa",
		text: "Em 2025, o Corinthians voltou a conquistar o Estadual em sua casa, diante da Fiel! Com recorde de público na Neo Química Arena, o Timão empatou por 0 a 0 com o Palmeiras e, com a vantagem da vitória no jogo de ida, como visitante, levantou o 31º título do Paulistão em sua história!",
	},
];

export default timelineData;
const map = document.querySelector('svg');
const regionInfo = document.getElementById('info');

const regions = {
  "IT23": {
    name:"Valle d'Aosta",
    info: `
    <h1>Valle d'Aosta</h1>
    <br>
    <p>O Valle d’Aosta é a <b>menor região da Itália,</b> seja em território, <b>com 3.200 km² de superfície,</b> como também em população, com <b>123.360 habitantes.</b> Localiza-se no <b>norte</b> da Itália e faz fronteira ao <b>norte com a Suíça e a oeste com a França,</b> que exerce forte influência na região. Alguns de seus principais patrimônios são:</p>
    <br>
    <p><b>O Parque Nacional Gran Paradiso:</b> é o parque nacional da Itália <b>mais antigo,</b> sendo uma área protegida pelo Estado para preservar os ecossistemas do Vale de Aosta.</p>
    <br>
    <p><b>A semana branca:</b> também praticada em outras regiões, é um período de férias de sete dias para passar na neve e praticar esportes de inverno, ver a paisagem e fazer caminhadas.</p>
    <br>
    <p>Seus castelos, como o <b>Castelo de Issogne,</b> que apesar de seu exterior simples, o interior possui <b>séculos de história, decorações, afrescos e uma fonte de romã.</b> </p>
    <br>
    <p><b>O caffè à Valdostana,</b> que é feito de uma maneira diferente: Café, açúcar, cascas de limão e laranja, grappa ou licor são adicionados à <b>xícara da amizade.</b> As pessoas bebem um após o outro dos diferentes bicos da xícara.</p>
    <br>
    <p><b>As esculturas de lenha,</b> símbolos do artesanato regional.</p>
`
  },
  "IT21": {
    name:"Piemonte",
    info: `
    <h1>Piemonte</h1>
    <br>
    <p>O Piemonte faz fronteira a <b>oeste com a França e ao norte com a Suíça.</b> Também faz fronteira com as regiões italianas da <b>Lombardia, Ligúria, Vale de Aosta e Emilia-Romagna.</b></p>
    <br>
    <p>A região é caracterizada pelos <b>Alpes</b> ao norte e a oeste, pelas <b>colinas de Langhe, Roero e Monferrato,</b> e pela <b>vasta planície do rio Pó.</b></p>
    <br>
    <p>O Piemonte tem uma rica história que remonta ao <b>período romano.</b> Foi uma região importante durante o <b>Reino da Sardenha</b> e desempenhou um papel crucial na <b>unificação da Itália.</b></p>
    <br>
    <p><b>Turim</b> é a capital do Piemonte. É uma cidade conhecida por sua <b>arquitetura barroca</b> e pela sua importância na <b>indústria automobilística,</b> sendo a sede da <b>FIAT.</b><p>
    <br>
    <p><b>As colinas de Langhe, Roero e Monferrato</b> são reconhecidas como <b>Patrimônio Mundial da UNESCO</b> pelo seu paisagem vinícola e a cultura do vinho.</p>
    <br>
    <p>O Piemonte é um importante <b>centro industrial,</b> com uma forte presença nos setores <b>automotivo (FIAT), aeroespacial, eletrônico e de design.</b></p>
    <br>
    <p>A região é famosa pela produção de <b>vinhos de alta qualidade,</b> incluindo Barolo, Barbaresco e Asti. Também é conhecida pela <b>trufa branca de Alba,</b> considerada uma das mais preciosas do mundo.</p>
    <br>
    <p>A cozinha piemontesa é rica e variada, famosa por pratos como <b>bagna càuda</b> (um molho quente de alho e anchovas), <b>vitello tonnato</b> (vitela com molho de atum) e <b>risotto.</b> A região também é conhecida pelos seus queijos e chocolates, especialmente o <b>gianduja.</b></p>
    <br>
    <p>Piemonte hospeda muitos eventos culturais e festivais, como o <b>Festival Internacional de Cinema de Turim, a Feira Internacional da Trufa Branca de Alba e o Salone del Gusto,</b> um importante evento gastronômico organizado pelo Slow Food.</p>
`
  },

  "IT42": {
    name: "Liguria",
    info: `
    <h1>Liguria</h1>
    <br>
    <p>A Ligúria é uma região montanhosa do <b>noroeste</b> da Itália, com <b>1,7 milhão de habitantes,</b> onde se encontram os <b>Alpes</b> e cuja capital é <b>Gênova.</b> Tem limites ao <b>sul com o mar Lígure, a oeste com a França, a norte com o Piemonte e com a Emília-Romanha, e a leste com a Toscana.</b> Suas principais fontes de atração e interesses são:</p>
    <br>
    <p><b>Cinque Terre:</b> é um conjunto de vilas centenárias à beira-mar na acidentada costa da Riviera Italiana. Em cada uma das 5 cidades, <b>casas coloridas e vinhedos agarram-se aos terraços íngremes</b> e os portos estão repletos de barcos de pesca, e é um <b>patrimônio UNESCO;</b><p>
    <br>
    <p><b>Festival de Sanremo:</b> é considerado <b>um dos mais importantes eventos musicais do mundo</b> e talvez o mais importante da Europa, reunindo e revelando muitos nomes famosos no meio musical;</p>
    <br>
    <p><b>A Procissão da Sexta-feira Santa em Savona:</b> é um evento que envolve <b>cultura e devoção popular.</b> Organizado pelo Priorado Geral das Irmandades de Savona desde o século XIII;</p>
    <br>
    <p><b>Batalha das Flores:</b> em Ventimiglia, na segunda quinzena de junho, acontece a Batalha das Flores, que é um <b>desfile de carros alegóricos floridos.</b> Na verdade, a floricultura representa um grande capítulo na economia e na história da Ligúria: <b>verdadeiras obras de arte desfilam pelas ruas da cidade desde o início do século XX para contar um tema, um tema que muda de ano para ano.</b></p>
`
  },

  "IT25": {
    name: "Lombardia",
    info: `
    <h1>Lombardia</h1>
    <br>
    <p>É uma região ao <b>norte</b> da Itália, com <b>10 milhões de pessoas, sendo a mais populosa do país.</b> A Lombardia abrange os Alpes e os Pré-alpes no norte, e planícies relativamente planas no sul ao longo do rio Pó e seus afluentes. Alguns de seus principais patrimônios são:</p>
    <br>
    <p>É conhecida como a <b>região dos lagos italiana.</b> Cinco dos maiores lagos estão (alguns parcialmente) em território lombardo. São eles: <b>Lago di Garda:</b> é o maior dos lagos italianos, <b>Lago Maggiore:</b> segundo maior lago do país, <b>Lago di Como:</b> o terceiro lago em tamanho, mas o primeiro em profundidade, <b>Lago Lugano:</b> a maior parte desse lago está localizada na Suíça e o <b>Lago Iseo:</b> o menor dos cinco lagos.</p>
    <br>
    <p>Uma das iguarias de natal mais conhecida e consumida no mundo, o <b>panetone foi criado na Lombardia.</b> A história exata de sua criação não é conhecida, mas não faltam lendas falando a respeito. Tem também a receita do famoso <b>sorvete de flocos</b> criado em 1961 por Enrico Panattoni na cidade de Bérgamo. Chamado na Itália de <b>stracciatella,</b> o sorvete é feito com uma base de leite e creme de leite, e finalizado com pedaços de chocolate.</p>
    <br>
    <p>Terra do famoso <b>violino Stradivarius</b> considerado <b>o melhor violino do mundo.</b> E também da obra <b>“A Última Ceia”, de Leonardo da Vinci.</b></p>
    <br>
    <p><b>A igreja dos ossos localizada na Piazzale Santo Stefano,</b> em Milão, a Igreja de San Bernardino alle Osse foi <b>construída em 1269</b> para abrigar as vítimas da doença. A decoração principal <b>é feita de ossos e crânios humanos</b> e, dentro dela, estão as relíquias de vários presidiários da morte.</p>
`
  },

  "IT32": {
    name:"Trentino-Alto Adige",
    info: `
    <h1>Trentino-Alto Adige</h1>
    <br>
    <p>O Trentino-Alto Ádige é uma <b>região autônoma</b> no <b>norte</b> da Itália, composta por duas províncias: <b>Trento(Trentino)</b> e <b>Bolzano (Alto Ádige/Südtirol).</b> A região tem uma população de <b>1,1 milhão de pessoas,</b> das quais <b>62% falam italiano como língua materna e 30% falam alemão do Tirol do Sul.</b></p>
    <br>
    <p><b>Rovereto:</b> Conhecida pelo Museu de Arte Moderna e Contemporânea (MART) e pelo Castelo de Rovereto.</p>
    <br>
    <p><b>Dolomitas:</b> Uma cadeia montanhosa declarada <b>Patrimônio da Humanidade pela UNESCO.</b></p>
    <br>
    <p><b>Museu Arqueológico do Alto Ádige:</b> Situado em Bolzano, onde está exposto o famoso <b>Ötzi, o Homem do Gelo.</b></p>
    <br>
    <p><b>Nova Trento:</b> é um <b>município do Brasil,</b> no Estado de Santa Catarina. A cidade foi fundada em 1875 por imigrantes originários do <b>Tirol italiano.</b></p>`
    
  },

  "IT34": {
    name: "Veneto",
    info: `
    <h1>Veneto</h1>
    <br>
    <p>Vêneto é uma região do <b>nordeste</b> da Itália que se estende <b>das montanhas Dolomitas ao mar Adriático.</b> A região possui cerca de <b>4,906 milhões de habitantes</b> e é composta por sete províncias, sendo <b>Veneza a sua capital.</b> Metade do território do Vêneto é composto por planícies enquanto a outra metade é composta por colinas e montanhas. Alguns de seus principais patrimônios são:</p>
    <br>
    <p><b>O carnaval mais tradicional da Itália:</b> Uma das principais atrações da região, o carnaval de Veneza é <b>o mais antigo e famoso da Itália.</b> As origens da festa remontam ao século XI, e sua principal característica é o <b>uso de máscaras.</b> Diz-se que a nobreza da cidade queria participar na festa sem ser reconhecida pela multidão, por isso usavam máscaras. O uso das máscaras acabou por se tornar uma <b>tradição</b> neste evento, que é marcado pelos desfiles que percorrem a cidade toda ao longo dos seus dez dias de duração.</p>
    <br>
    <p><b>A segunda universidade mais antiga da Itália:</b> A Universidade de Pádua foi <b>fundada em 1222</b> e só não é mais antiga do que a Universidade de Bolonha, fundada em 1088 e considerada a mais antiga do mundo.</p>
    <br>
    <p><b>A “cidade flutuante”:</b> A região do Vêneto abriga uma das cidades mais incríveis do mundo. Capital e maior cidade da região, <b>Veneza, também conhecida como La Sereníssima,</b> recebe aproximadamente <b>3 milhões de turistas todos os anos.</b> Formada por mais de <b>100 ilhas</b> ligadas por inúmeros canais e pontes, a cidade tem uma história riquíssima, uma belíssima arquitetura, e os famosos e românticos passeios de <b>gôndola.</b></p>
    <br>
    <p><b>Romeu e Julieta:</b> Escrita entre 1591 e 1595 por William Shakespeare, Romeu e Julieta (em italiano Romeo e Giulietta) é <b>um dos romances mais famosos e lidos do mundo.</b> A trágica história de amor dos protagonistas, que já foi diversas vezes retratada no teatro e no cinema, <b>se passa na bela cidade de Verona,</b> a segunda maior do Vêneto.</p>
`
  },

  "IT36": {
    name: "Friuli-Venezia Giulia",
    info: `
    <h1>Friuli-Venezia Giulia</h1>
    <br>
    <p>Friuli-Venezia Giulia é uma região com uma história complexa, influenciada por diferentes culturas. Com <b>1,3 milhão de habitantes,</b> faz fronteira ao <b>norte com a Áustria, a leste com a Eslovênia, ao sul com o Mar Adriático e a oeste com o Vêneto.</b> A cultura de Friuli-Venezia Giulia é uma fusão de influências: a <b>Basílica Patriarcal de Aquileia</b> é conhecida por seus primeiros <b>mosaicos cristãos.</b> O <b>Templo Lombardo</b> é um monumento instalado em La Cividale del Friuli, <b>cidade fundada por Júlio César.</b></p>
    <br>
    <p>A culinária de Friuli-Venezia Giulia reflete a sua posição de fronteiras e as <b>tradições italiana, austríaca e eslava.</b> Com produtos típicos como o <b>Prosciutto di San Daniele,</b> um presunto cru doce e delicado produzido na zona de San Daniele del Friuli, e o <b>queijo Montasio.</b></p>
    <br>
    <p>As atrações turísticas da região são:</p>
    <br>
    <p><b>Trieste:</b></p>
      <p>Piazza Unità d'Italia, Castelo Miramare, Grotta Gigante</p>
    <br>
   <p><b>Udine:</b></p>
      <p>Castelo de Udine, Piazza della Libertà</p>
    <br>
    <p><b>Cidade do Friuli:</b></p>
      <p>Templo Lombardo, Ponte do Diabo</p>
    <br>
    <p><b>Aquiléia:</b></p>
      <p>Basílica Patriarcal, Área arqueológica</p>
    <br>
    <p><b>Gorizia:</b></p>
      <p>Castelo Gorizia</p>
`

  },

  "IT52": {
    name: "Toscana",
    info: `
    <h1>Toscana</h1>
    <br>
    <p>A região possui <b>3,66 milhões de habitantes</b> e está localizada no <b>centro</b> da Itália. Alguns de seus principais patrimônios são:</p>
    <br>
    <p><b>Centro histórico de Florença:</b> é um museu a céu aberto da cultura europeia e italiana e foi <b>uma das primeiras localidades italianas a receber o título de Patrimônio Mundial da Unesco</b> em 1982.</p>
    <br>
    <p><b>Torre de Pisa:</b> encontra-se na Praça dos Milagres (Piazza del Duomo). A Torre é famosa por sua <b>característica inclinação.</b></p>
    <br>
    <p><b>San Gimignano:</b> é um dos muitos lugares interessantes da Toscana. Ficou conhecida no mundo todo graças à sua impressionante <b>arquitetura medieval</b> e às suas <b>torres.</b></p>
        `
  },

  "IT55": {
    name: "Umbria",
    info: `
    <h1>Umbria</h1>
    <br>
    <p>A região cuja capital é Perugia possui aproximadamente <b>880.000 habitantes</b> e está localizada na região <b>central</b> da Itália. É conhecida como o <b>“coração verde”</b> da Itália por causa de suas colinas e paisagens montanhosas, sendo também famosa por suas trufas e vinhos. Alguns dos seus principais patrimônios são:</p>
    <br>
    <p><b>Basílica de São Francisco (Assis):</b> um dos locais de peregrinação <b>mais importantes do mundo,</b> dedicada a São Francisco de Assis. A basílica é famosa por seus afrescos de <b>Giotto e Cimabue;</b></p>
    <br>
    <p><b>Centro Histórico de Perugia:</b> uma cidade medieval com ruas estreitas, praças encantadoras e edifícios históricos, como o <b>Palazzo dei Priori e a Fonte Maggiore;</b></p>
    <br>
    <p><b>Duomo (Orvieto):</b> uma das mais belas catedrais da Itália, conhecida por sua fachada gótica e pelo interior com impressionantes afrescos;</p>
    <br>
    <p><b>Festival dei Due Mondi (Spoleto):</b> Spoleto é famosa por sua catedral e pelo Festival dei Due Mondi, um evento anual que celebra a música, a dança e o teatro;</p>
    <br>
    <p><b>Lago Trasimeno:</b> um dos maiores lagos da Itália, cercado por colinas verdes e pequenas cidades pitorescas, ideal para atividades ao ar livre e relaxamento;</p>
    <br>
    <p><b>Parque Nacional dos Montes Sibilinos:</b> uma área protegida, com montanhas, vales e uma rica biodiversidade, perfeita para caminhadas e exploração da natureza.</p>
    `
  },

  "IT62": {
    name: "Lazio",
    info: `
    <h1>Lazio</h1>
    <br>
    <p>O Lazio é uma região no <b>centro</b> da Itália, na costa do Mar Tirreno. Sua cidade principal, </b>Roma, é a capital da Itália,</b> onde se localiza o <b>Vaticano,</b> e foi o centro do antigo <b>Império Romano.</b> Suas famosas ruínas incluem o <b>Coliseu e o Panteão.</b> No interior estão as florestas dos Montes Apeninos, com reservas naturais, lagos e aldeias construídas sobre rocha. Sua população é de <b>5,879 milhões</b> e sua área é de <b>17.203 km².</b> Seus principais patrimônios são:</p>
    <br>
    <p><b>O Vaticano:</b> A cidade-Estado Vaticano é a morada do Papa e a <b>sede da Igreja Católica.</b> Cercado por Roma, o Vaticano abriga construções como a <b>Capela Sistina e a Basílica de São Pedro.</b></p>
    <br>
    <p><b>O Coliseu:</b> o famoso anfiteatro romano foi palco de muitas lutas sangrentas e apresentações grandiosas.</p>
    <br>
    <p><b>A Carbonara:</b> que consiste em macarrão ao molho de bacon, queijo de ovelha e ovos.</p> 
`
  },

  "IT65": {
    name: "Abruzzo",
    info: `
    <h1>Abruzzo</h1>
    <br>
    <p> A região possui <b>1,312 milhão de habitantes</b> e está localizada no <b>centro</b> da Itália, tendo <b>influência espanhola e árabe.</b> Alguns de seus principais patrimônios são: </p>
    <br> 
    <p> A criação de ovelhas é feita através da <b>transumância.</b></p>
    <br>
    <p> Depois do terremoto de 2009, L’Aquila (capital de Abruzzo) foi nomeada a <b>capital da cultura de 2026.</b></p>
    <br>
    <p> Os Arrosticini di Pecora são pequenos <b>espetos de carne de ovelha,</b> tradicionalmente grelhados em carvão em brasa e temperados com sal.</p>
    <br>
    <p> Abruzzo é conhecida como <b>a região mais verde da Europa.</b> Mais da <b>metade</b> da região é composta por parques nacionais e reservas naturais protegidas. </p>
    <br>
    <p> Roccaraso é uma das estações de esqui <b>mais conhecidas e equipadas.</b> Fica localizada em L’Aquila.</p>
    <br>
    <p> A festa dei Serpari é um evento tradicional em honra a São Domingos Abade. Durante a procissão, sua estátua é decorada com <b>cobras não venenosas.</b></p>
  `
    },

  "IT75": {
    name: "Puglia",
    info: `
    <h1>Puglia</h1>
    <br>
    <p>A Apúlia é o “salto da bota”, a região mais ao <b>sudeste</b> da Itália. Faz fronteira com Molise, Campania e Basilicata e é banhada pelo Mar Adriático ao leste e ao norte e pelo Mar Jônico ao sul. Sua área de superfície é de <b>19.540,9 km²</b> e nela há <b>3.907.683 habitantes.</b> Alguns de seus principais patrimônios são: </p>
    <br>
    <p><b>Os Trulli de Alberobello:</b> patrimônio da UNESCO, são habitações rurais construídas por agricultores usando uma técnica que remonta aos <b>tempos pré-históricos.</b> Essas construções são feitas de pedras brancas dispostas em formas retangulares com um telhado cônico. </p>
    <br>
    <p><b>A Floresta Umbra:</b> localizada no coração do Parque Nacional do Gargano, é outro <b>patrimônio da UNESCO</b> pela presença de <b>Faggete Vetuste, um tipo de árvore antiga.</b> No parque, que também protege grande parte da biodiversidade da Itália, também podem ser observadas árvores com o fenômeno do <b>macrossomatismo.</b> </p>
    <br>
    <p><b>O Castel del Monte:</b> com sua forma octogonal, possui oito torres octogonais, um labirinto de oito salas e oito janelas em cada andar, é objeto de inúmeras lendas sobre sua construção e finalidade.</p> 
    <br>
    <p><b>Baia delle Zagare:</b> considerada <b>uma das praias mais bonitas do mundo</b> de acordo com a National Geographic, é caracterizada por <b>falésias brancas</b> e duas pilhas de <b>calcário</b> que se localizam sobre suas águas cristalinas. </p>
    <br>
    <p><b>Cartellate:</b> um doce autêntico dessa região que é preparado por ocasião dos principais festivais anuais, como o Natal.</p>
`
  },

  "IT72": {
    name: "Campania",
    info: `
    <h1>Campania</h1>
    <br>
    <p>A Campania é uma região do <b>sul</b> da Itália, com uma população de <b>5,6 milhões de habitantes,</b> cuja capital é <b>Nápoles.</b> É delimitada a <b>oeste e sudoeste pelo Mar Tirreno, a noroeste pelo Lazio, ao norte pelo Molise, ao nordeste pela Apúlia e a leste pela Basilicata.</b> Alguns de seus principais patrimônios são:</p>
    <br>
    <p><b>Pompéia:</b> a impressionante cidade antiga de Pompéia, destruída pela <b>erupção do Vesúvio em 79 d.C.</b> e preservada sob cinzas e lama por séculos. Descoberta no <b>século 16,</b> Pompéia é famosa por seus edifícios e objetos bem preservados, bem como pelos corpos das vítimas, <b>conservados nas posições em que foram atingidos pela erupção.</b></p>
    <br>
    <p><b>Vesúvio:</b> localizado a cerca de <b>9 quilômetros de Nápoles,</b> é uma das atrações naturais mais importantes da região. Apesar de atualmente estar inativo, é <b>o vulcão europeu mais famoso</b> e considerado <b>um dos mais perigosos do mundo.</b></p>
    <br>
    <p><b>Pizza Napolitana:</b> a primeira pizzaria do mundo, a <b>Antica Pizzeria Port'Alba,</b> foi <b>fundada em 1738</b> em Nápoles e <b>ainda está em atividade</b> sob a direção de Gennaro Luciano Maestro. <b>Mais de 5.000 anos atrás</b> o pão turco foi trazido para o porto de Nápoles, onde os napolitanos se apaixonaram por esse petisco e o aprimoraram, adicionando tomate e orégano à massa, que era <b>tradicionalmente dobrada e comida como um sanduíche.</b></p>
`
  },

  "IT67": {
    name: "Molise",
    info: `
    <h1>Molise</h1>
    <br>
    <p>É a <b>segunda menor região da Itália</b> localizada no <b>sul</b> entre os <b>Apeninos e o Mar Adriático,</b> com uma população de aproximadamente <b>290.636 habitantes.</b> É a região <b>mais nova da Itália.</b> Alguns de seus principais patrimônios são:</p>
    <br>
    <p><b>Pontifíicia Fonderia di Campane Marinelli,</b> uma antiga fábrica familiar de <b>sinos</b> que está em funcionamento <b>até os dias de hoje</b> e é a principal <b>fornecedora de sinos ao Vaticano.</b></p>
    <br>
    <p>As massas frescas, queijos e embutidos artesanais, azeite de oliva extra virgem e vinhos locais. Pratos típicos incluem <b>cavatelli, orecchiette e sagne,</b> além de queijos, como <b>caciocavallo e pecorino,</b> e embutidos como <b>soppressa e lonza.</b></p>
    <br>
    <p>A cidade também abriga <b>a rua mais estreita da Itália, A Rejecelle, que tem 34 cm de largura</b> e pela qual os pedestres precisam <b>segurar a respiração e encolher a barriga para conseguir passar.</b></p>
    <br>
    <p>O isolamento geográfico e a fraca presença midiática têm contribuído para a piada de que <b>“Molise não existe”,</b> que os próprios moradores usam com bom humor para promover a região.</p>
    `

  },

  "IT77": {
    name: "Basilicata",
    info: `
    <h1>Basilicata</h1>
    <br>
    <p>A Basilicata é uma região no <b>sul</b> da Itália, situada <b>entre a Campânia, a Puglia e a Calábria.</b> Tem uma pequena faixa costeira no Mar Tirreno e uma costa mais extensa no Golfo de Taranto, no Mar Jônico.</p>
    <br>
    <p>Conhecida em todo o mundo por seus <b>"Sassi", antigos bairros feitos de cavernas,</b> que são Patrimônio Mundial da UNESCO.</p>
    <br>
    <p><b>Craco:</b> uma <b>cidade fantasma abandonada,</b> conhecida por suas paisagens <b>desoladas</b> e uma atmosfera única.</p>
    <br>
    <p>A Basilicata foi escolhida como local para diversos <b>filmes</b> nas últimas décadas. Graças ao seu aspecto único, Matera foi a locação mais desejada.</p>
`
  },

"IT78": {
  name: "Calabria",
  info: `
  <h1>Calabria</h1>
  <br>
  <p>A Calabria é uma região localizada no <b>sul</b> da Itália (a ponta da “bota”), sua capital é <b>Catanzaro,</b> possui <b>2,09 milhões de habitantes</b> e <b>15,079 km2.</b> Alguns de seus patrimônios são:</p>
  <br> 
  <p><b>Festival católico Varia de Palmi:</b> é um patrimônio UNESCO da região que ocorre na cidade de Palmi anualmente, <b>em homenagem a Maria Santíssima dela Sacra Lettera.</b></p>
  <br>
  <p><b>Parque Arqueológico de Sybaris:</b> está localizado em Cassano all'Ionio, no distrito de Sybaris. É o local de <b>uma das cidades gregas mais ricas e importantes da Magna Grécia.</b></p>
  <br>
  <p><b>Torre Ruggero (ou Capo Rocchi):</b> remonta provavelmente ao <b>século XV ou XVI,</b> a Torre era um posto de vigia para a defesa da costa dos <b>ataques turcos.</b></p>
  <br>
  <p><b>Catedral de Reggio Calabria:</b> é uma catedral católica romana em Reggio Calabria, é dedicada à <b>Assunção da Virgem Maria.</b> Anteriormente sede arquiepiscopal da Arquidiocese de Reggio Calabria, agora é a da Arquidiocese de Reggio Calabria-Bova.</p>
  <br>
  <p><b>Cidade de Reggio Calabria:</b> possui uma rica história que data até a colonização grega da região.</p>
`
},

"IT82": {
  name: "Sicilia",
  info: `
  <h1>Sicilia</h1>
  <br>
  <p><b>Capital:</b> Palermo</p>
  <br>
  <p><b>Área:</b> 25.700 km²</p>
  <br>
  <p><b>Relevo:</b> Montanhoso com vulcões ativos, o mais famoso é o Etna, <b>o vulcão mais alto da Europa.</b></p>
  <br>
  <p>A Sicília tem um rico patrimônio arqueológico e histórico, com sítios antigos como o <b>Vale dos Templos</b> em Agrigento e <b>teatros gregos</b> em Siracusa e Taormina. A ilha desempenhou um papel crucial em várias épocas históricas, <b>desde a Magna Grécia até a Segunda Guerra Mundial.</b></p>
  <br>
  <p>A Sicília é famosa por sua culinária, que inclui pratos como <b>arancini (bolinhos de arroz), cannoli e caponata.</b></p>
  <br>
  <p>As festividades tradicionais e religiosas são abundantes, destacando-se a <b>Festa de Sant'Agata em Catânia.</b></p>
  <br>
  <p>A economia da Sicília baseia-se principalmente na agricultura (cítricos, azeitonas, uvas), pesca, turismo e, em menor medida, na indústria. A região enfrenta desafios econômicos, incluindo <b>altas taxas de desemprego e desenvolvimento industrial limitado.</b></p>
`
},

"IT88": {
  name: "Sardegna",
  info:`
  <h1>Sardegna</h1>
  <br>
  <p>Localizada numa <b>ilha no mar Mediterrâneo, a oeste da península itálica,</b> a Sardenha é conhecida por sua paisagem costeira e montanhosa, com suas praias de águas cristalinas e os famosos <b>nuragos, construções em pedra, da Idade do Bronze, em forma de colmeias.</b> A região possui cerca de <b>1.640.000 habitantes</b> e a sua capital é <b>Cagliari.</b> Seus principais patrimônios são:</p>
  <br>
  <p><b>O sítio arqueológico Su Nuraxi di Barumini:</b> um complexo de torres de pedra construído pela <b>civilização nurágica,</b> considerado <b>Patrimônio Mundial da UNESCO;</b></p>
  <br>
  <p><b>A Costa Esmeralda:</b> conhecida por suas praias de areia branca e águas cristalinas, rota de transatlânticos e de turismo de luxo;</p>
  <br>
  <p><b>Centro Histórico de Alghero:</b> uma cidade antiga e fortificada com ruas estreitas e edifícios medievais. <b>A influência catalã</b> é visível na arquitetura e na cultura local;</p>
  <br>
  <p><b>Bastione di Saint Remy:</b> é uma fortificação histórica em Cagliari, construída no <b>final do século XIX e início do século XX.</b> É um dos marcos mais importantes da cidade;</p>
  <br>
  <p><b>Grotta di Nettuno:</b> impressionantes <b>cavernas marinhas</b> localizadas perto de Alghero, com <b>estalactites e estalagmites</b> deslumbrantes. Acessível de barco ou por uma escada chamada <b>"Escala del Cabirol";</b></p>
  <br>
  <p><b>Parco Nazionale dell’Arcipelago di La Maddalena:</b> um grupo de ilhas protegidas com praias paradisíacas, águas turquesas e uma rica vida marinha.</p>
  `
  
},

"IT45": {
  name: "Emilia-Romagna",
  info: `
  <h1>Emilia-Romagna</h1>
  <br>
  <p>A região da Emilia-Romagna fica no <b>norte</b> da Itália e possui cerca de <b>5 milhões de habitantes.</b> Sua história é longa e fascinante, e é caracterizada por uma grande <b>interação de cultura e história.</b> Limita-se ao <b>norte com o Vêneto e Lombardia, a oeste com o Piemonte e a Ligúria, ao sul com a Toscana e com a República de São Marinho.</b> A Emilia-Romagna é dita como o <b>berço da cozinha italiana.</b> Foi lá que nasceram produtos como o <b>parmigiano reggiano, o presunto de Parma, o aceto balsamico di Modena e a mortadella di Bologna,</b> e é de onde vem o clássico e muito amado <b>macarrão à bolonhesa.</b></p>
  <br>
  <p>Emilia-Romagna teve um papel significativo para a cultura italiana. A arquitetura de Bologna é repleta de varandas, torres medievais e dezenas de palácios históricos. A <b>Basílica de São Petrônio</b> é um dos principais exemplos do <b>movimento gótico</b> na Itália. Em Ferrara, é possível conhecer o <b>Castelo Estense,</b> um grande castelo circundado por um fosso, e o <b>Palácio dos Diamantes,</b> cujo nome vem da fachada rústica de <b>bugnato.</b></p>
  <br>
  <p>Na música, os maiores nomes são <b>Giuseppe Verdi,</b> famoso compositor de óperas como <b>“La Traviata” e “Rigoletto”,</b> e <b>Luciano Pavarotti,</b> um dos mais célebres tenores do século XX. A região também se destaca pelo cinema: <b>Federico Fellini (diretor do filme “La Dolce Vita”),</b> foi um dos nomes mais fortes do cinema italiano.</p>
  <br>
  <p><b>Bologna:</b></p>
  <p>Torre degli Asinelli, Piazza Maggiore, Università di Bologna</p>
  <br>
  <p><b>Ferrara:</b></p>
  <p>Castello Estense, Palazzo dei Diamanti</p>
  <br>
  <p><b>Ravenna:</b></p>
  <p>Basilica di San Vitale, Mausoleo di Galla Placidia</p>
  <br>
  <p><b>Parma:</b></p>
  <p>Teatro Regio, Battistero di Parma</p>
`
},

"IT57": {
  name: "Marche",
  info: `
  <h1>Marche</h1>
  <br>
  <p>A região de Marche está localizada no <b>centro</b> da Itália, sua capital é <b>Ancona,</b> possui <b>1,5 milhões de habitantes</b> e uma <b>área de 9.366 km².</b></p>
  <br>
  <p>A pequena cidade montanhosa de <b>Urbino</b> possui uma <b>aparência renascentista,</b> e seu centro histórico traz memórias da época de florescimento da cidade no século XV.</p>
  <br>
  <p><b>O Castelo de Gradara</b> é o complexo que se ergue no topo de uma colina no município de Gradara, na província de Pesaro e Urbino, constituído por <b>um castelo - fortaleza medieval e a aldeia histórica adjacente.</b></p>
  <br>
  <p><b>O Santuário da Santa Casa de Loreto</b> é um lugar de peregrinação católico situado no município italiano de <b>Loreto.</b> Foi construído perto da casa onde, segundo a tradição medieval, o <b>Arcanjo Gabriel anunciou à Virgem Maria a maternidade divina</b> e onde viveu a <b>Sagrada Família de Nazaré,</b> casa essa miraculosamente transportada por anjos.</p>
  <br>
  <p><b>A Giostra della Quintana</b> é uma reconstituição histórica de origem medieval com uma justa equestre, realizada em <b>Ascoli Piceno.</b></p>
  <br>
  <p><b>Piobbico</b> é a capital internacional das <b>pessoas feias</b> e possui um <b>festival</b> em celebração a esse título.</p>
`
}

};

map.addEventListener('click', (event) => {
  if (event.target.tagName === 'path') {

    const selectedRegions = map.querySelectorAll('path.selected');
    selectedRegions.forEach(region => region.classList.remove('selected'));
    

    event.target.classList.add('selected');

    const regionId = event.target.id;
    const regionData = regions[regionId];
    if (regionData) {
      regionInfo.innerHTML = regionData.info;
    }
  }
});


map.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'path') {
    const regionId = event.target.id;
    const regionData = regions[regionId];
    if (regionData) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = regionData.name;
      document.body.appendChild(tooltip);

      const rect = event.target.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.top + window.scrollY - 30}px`;
    }
  }
});

map.addEventListener('mouseout', () => {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    tooltip.remove();
  }
});

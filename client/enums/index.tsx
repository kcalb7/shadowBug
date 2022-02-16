import { Category, BugFullInfo } from '../types'

export const categories: Category[] = [
  {
    id: 1,
    name: 'Coleoptera',
    description:
      'Os Coleópteros são conhecidos por serem o maior grupo dentro do filo <i>Arthropoda</i>, são os famosos besouros! ' +
      'Fáceis de achar, estão por quase toda parte. Sua principal característica é suas asas anteriores endurecidas ' +
      '(as duas primeiras), chamados élitros. Eles comem quase de tudo (por conta de suas peças bucais mandibuladas), ' +
      'desde plantas, carniças, excrementos entre outros, pois a maioria do grupo é fitófaga. São importantes polinizadores, ' +
      'variam de tamanho e forma e vivem bem, tanto sozinhos, quanto em grupo, pois sabem se organizar muito bem. ' +
      'Eles não possuem veneno capaz de matar um ser humano, mas uma curiosidade sobre eles é que quando são esmagados ' +
      'eles liberam substâncias que podem causar alergias, como coceira, vermelhidão, bolhas no local, entre outras.'
  },
  {
    id: 2,
    name: 'Lepidoptera',
    description:
      'Estes insetos são conhecidos popularmente como borboletas e mariposas, são holometábolos e sua característica ' +
      'mais marcante são suas belas asas chamativas, com várias cores e desenhos incríveis. Uma dica bastante usada na ' +
      'hora de diferenciá-las é olhar como deixam suas asas na hora que pousam em algum lugar, as borboletas em seu pouso ' +
      'deixam as asas fechadas verticalmente, enquanto as mariposas em pouso fecham suas asas horizontalmente. ' +
      'As borboletas possuem cores mais vívidas, enquanto as mariposas abusam do mimetismo para se camuflar de seus ' +
      'predadores com cores mais fechadas, e possuem seu corpo coberto por escamas. Sua fase adulta é sugadora ' +
      '(se alimenta de néctar, pólen, resinas minerais entre outros) e alguns já foram hematófagos, e em sua fase larval são herbívoras.'
  },
  {
    id: 3,
    name: 'Hymenoptera',
    description:
      'Neste grupo é onde são encontradas formigas, vespas, abelhas, marimbondos entre outros insetos que possuem asas ' +
      'membranosas como sua principal característica. Costumam viver em colônias e também se dão bem sozinhos. ' +
      'Seus ninhos são bem construídos com cera, terra e outros materiais, um exemplo bastante conhecido são as ' +
      '“casinhas” de marimbondo que vemos por aí. São extremamente atuantes na polinização, controle biológico, ' +
      'produção de mel, mas como se reproduzem muito rápido e andam muitas vezes em grupos, como no caso das formigas, ' +
      'acabam se tornando pragas terríveis. Não costumam ser agressivos, apenas quando mexem com eles, então cuidado ' +
      'ao se aproximar demais para não ser picado sem querer! Abelhas quando se sentem ameaçadas picam, e ao picar morrem, ' +
      'e com isso são liberados feromômios de aviso o que faz com que um enxame de abelhas possa acabar perseguindo você.  ' +
      'O mesmo com vespas, marimbondos, e até formigas. Além de dolorosas, podem dar febre, mal estar, falta de ar e para ' +
      'quem é alérgico é um grande risco, portanto cuidado.'
  },
  {
    id: 4,
    name: 'Diptera',
    description:
      'Tendo como características ter suas asas posteriores com função de halteres que ajudam na hora do vôo ' +
      '(por conta da estabilização), os dípteras são as conhecidas moscas! Aquelas que no verão voam aos montes e enchem o saco. ' +
      'O grupo também engloba varejeiras, borrachudos, mutucas, pernilongos e outros. São holometábolos e podem ser parasitas ' +
      'e transmissores de doença, o que assusta os médicos pois uma picada desses insetos podem causar grandes estragos, ' +
      'tanto para quem é alérgico, quanto não! Um exemplo bastante conhecido é a dengue, que é transmitida pelo mosquito ' +
      '<i>Aedes Aegypti</i> que deixa pessoas de cama por no mínimo uma semana. São predadores, e apesar de alguns ' +
      'serem vetores de doenças, outros ajudam em estudos sobre as mesmas. Sua alimentação varia, mas normalmente as moscas ' +
      'comem desde excrementos, secreções, à produtos vegetais animais e também gostam de açúcar; enquanto os pernilongos ' +
      'gostam de água, açúcar e sangue.'
  },
  {
    id: 5,
    name: 'Hemiptera',
    description:
      'Sendo a ordem dos insetos conhecidos como percevejos, barbeiros, baratas d’água, cigarras, cigarrinhas, pulgões, ' +
      'cochonilhas e mosca-branca, os Hemipteras são conhecidos por terem suas asas metade coriáceas e metade membranosas. ' +
      'Eles são hemimetábolos e conseguem viver na água, na terra ou nos dois. Este grupo se diferencia dos outros por ' +
      'conta de seu aparelho bucal, eles apresentam peças bucais que ajudam na perfuração e sucção de alimento. ' +
      'Nesta ordem estão as cigarras. As cigarras podem ficar durante anos debaixo da terra se alimentando da seiva das plantas, ' +
      'o que em algumas plantações gera prejuízos para os produtores; quando saem, ficam no alto nas árvores e começam a cantar, ' +
      'a sinfonia alta é para atrair as fêmeas para o acasalamento (sim, quem canta são os machos). Um inseto desta ordem ' +
      'que causa grandes riscos a saúde é o barbeiro, conhecido por ser portador da doença de Chagas. Não é sua picada ' +
      'que causa a doença, e sim um protozoário presente em suas fezes. Ao picar, ele defeca em cima, e quando a pessoa coça, ' +
      'esses protozoários atingem a circulação, o que gera a doença.'
  },
  {
    id: 6,
    name: 'Orthoptera',
    description:
      'Saltadores e assustadores! A ordem <i>Orthoptera</i> é composta por gafanhotos, esperanças, grilos, manés-magros e paquinhas. ' +
      'São mais encontrados em zonas tropicais e a maioria é fitófaga, podendo também ser predadores. Eles possuem asas ' +
      'superiores coriáceas e retas, e sua característica mais marcante é que conseguem saltar a longas distâncias por conta ' +
      'de seus pares de pernas traseiros “musculosos”, o que dá vantagem na hora de fugir de predadores. São muito procurados ' +
      'por conta da culinária entomofágica e se reproduzem de modo sexuado. Costumam ser mais de hábitos noturnos e podem ' +
      'atacar plantações em busca de comida, principalmente quando estão em migração, a famosa nuvem de gafanhotos que atormentam os produtores.'
  },
  {
    id: 7,
    name: 'Odonata',
    description:
      'Este grupo é formado pelas libélulas, elas, que são predadoras desde seu momento de ninfa (ferozes), caçam em ' +
      'pleno vôo mesmo, pois são animais heterotróficos e em seu cardápio tem abelhas, borboletas e se bobear até outra libélula. ' +
      'Possuindo olhos grandes que ocupam quase toda a cabeça, elas têm o abdômen longo e fino. O crescimento delas é ' +
      'demarcado pelas trocas do exoesqueleto, as chamadas mudas. Elas são diurnas e mais vistas durante o verão, possuem ' +
      'dimorfismo sexual e para reprodução se aproximam de corpos de água; o momento da cópula delas lembra um coração. ' +
      'Alguns machos são territorialistas e cuidam da fêmea durante a postura dos ovos. Elas ajudam muito no controle ' +
      'biológico de mosquitos vetores de doenças para os seres humanos.'
  },
  {
    id: 8,
    name: 'Blattodea',
    description:
      'Há quem goste e há quem tenha pavor! A ordem <i>Blattodea</i> é composta pelas baratas e térmitas, seres que são ' +
      'muito resistentes, sendo capazes de ficar até um mês sem comer nada. Elas podem perder literalmente a cabeça ' +
      '(tirar fora) que elas ainda sobrevivem, por possuírem o cérebro ao longo do corpo. Elas vivem até uma semana ' +
      'sem ela, mas morrem de sede depois. Elas têm grande importância médica devido aos locais que andam, pois podem ' +
      'contaminar os alimentos caso passem por cima. São onívoras detritívoras e não costumam formar colônias. Costumam' +
      ' ter a casca rígida e algumas até voam. Elas costumam ser marrons, algumas mais puxadas pro vermelho sendo mais claras ' +
      'e outras mais escuras puxadas pro preto.'
  },
  {
    id: 9,
    name: 'Isoptera',
    description:
      'Nesta ordem estão presentes os cupins. Eles vivem em colônias e são separados por castas, os que não possuem asas' +
      ' e os que possuem, chamados alados, e cada casta tem sua função específica a ser realizada. Dentre elas: reprodução, ' +
      'defesa da colônia (soldados) e operários. Desempenham importante papel ecológico na ciclagem de nutrientes e ' +
      'aeração do solo. Por serem a maioria xilófagos (se alimentam de madeira), são importantes na destruição de móveis ' +
      'que ficam abandonados, e também viram pragas facilmente dentro de casa, acabando com portas, portais, imóveis e ' +
      'tudo que vier pela frente. Depois que um casal de alados se forma eles perdem as asas e são chamados <i>dealeados</i>.'
  },
  {
    id: 10,
    name: 'Dermaptera',
    description:
      '<i>Dermaptera</i>, a ordem das famosas tesourinhas. Pequenas e possuindo pinças em seu abdômen para proteção, elas ' +
      'gostam de ficar mais em lugares com sombra e úmidos. São onívoras, de hábito noturno e apresentam dimorfismo sexual. ' +
      'Sua alimentação varia desde a pequenos artrópodes, a vegetação viva ou morta. Elas costumam ter tigmotropismo ' +
      'positivo, algumas espécies fazem corte para acasalar e a fêmea faz câmaras subterrâneas sem muita luminosidade ' +
      'para depositar seus ovos. Se ficarem sem comer pode ocorrer canibalismo entre eles, e sua pinça, se chegar ' +
      'a picar um humano, pode causar coceira/irritação. A fama das tesourinhas de entrar no ouvido e fazer casa lá dentro ' +
      'existe há tempos, então caso veja alguma, não hesite em colocá-la para fora do seu quarto! (brincadeirinha).'
  }
]

export const bugs: BugFullInfo[] = [
  {
    id: 1,
    name: 'Callipogon',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/callipogon.jpg',
      bugShadow: '/img/bugShadow/callipogon.png',
      bugInfo: '/img/bugInfo/callipogon.jpg'
    }
  },
  {
    id: 2,
    name: 'Besouro 1',
    nickname: 'Pelidnota',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/scarabaeidae_1.jpg',
      bugShadow: '/img/bugShadow/scarabaeidae_1.png',
      bugInfo: '/img/bugInfo/scarabaeidae_1.jpg'
    }
  },
  {
    id: 3,
    name: 'Besouro 2',
    nickname: 'Besouro do boi',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/scarabaeidae_2.jpg',
      bugShadow: '/img/bugShadow/scarabaeidae_2.png',
      bugInfo: '/img/bugInfo/scarabaeidae_2.jpg'
    }
  },
  {
    id: 4,
    name: 'Besouro 3',
    nickname: 'Besouro rinoceronte',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/scarabaeidae_3.jpg',
      bugShadow: '/img/bugShadow/scarabaeidae_3.png',
      bugInfo: '/img/bugInfo/scarabaeidae_3.jpg'
    }
  },
  {
    id: 5,
    name: 'Besouro 4',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/oryctini_1.jpg',
      bugShadow: '/img/bugShadow/oryctini_1.png',
      bugInfo: '/img/bugInfo/oryctini_1.jpg'
    }
  },
  {
    id: 6,
    name: 'Euchroma Gigantea',
    nickname: 'Mãe de sol',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/euchroma_gigantea.jpg',
      bugShadow: '/img/bugShadow/euchroma_gigantea.png',
      bugInfo: '/img/bugInfo/euchroma_gigantea.jpg'
    }
  },
  {
    id: 7,
    name: 'Tenebrionidae',
    nickname: 'Besouro-escuro',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/tenebrionidae.jpg',
      bugShadow: '/img/bugShadow/tenebrionidae.png',
      bugInfo: '/img/bugInfo/tenebrionidae.jpg'
    }
  },
  {
    id: 8,
    name: 'Cerambycidae',
    nickname: 'Besouro-serra-pau',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/cerambycidae.jpg',
      bugShadow: '/img/bugShadow/cerambycidae.png',
      bugInfo: '/img/bugInfo/cerambycidae.jpg'
    }
  },
  {
    id: 9,
    name: 'Besouro 5',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/scraptiidae.jpg',
      bugShadow: '/img/bugShadow/scraptiidae.png',
      bugInfo: '/img/bugInfo/scraptiidae.jpg'
    }
  },
  {
    id: 10,
    name: 'Besouro 6',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/oryctini_2.jpg',
      bugShadow: '/img/bugShadow/oryctini_2.png',
      bugInfo: '/img/bugInfo/oryctini_2.jpg'
    }
  },
  {
    id: 11,
    name: 'Phanaeini',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/phanaeini.jpg',
      bugShadow: '/img/bugShadow/phanaeini.png',
      bugInfo: '/img/bugInfo/phanaeini.jpg'
    }
  },
  {
    id: 12,
    name: 'Macraspis',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/macraspis.jpg',
      bugShadow: '/img/bugShadow/macraspis.png',
      bugInfo: '/img/bugInfo/macraspis.jpg'
    }
  },
  {
    id: 13,
    name: 'Besouro 7',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/besouro_7.jpg',
      bugShadow: '/img/bugShadow/besouro_7.png',
      bugInfo: '/img/bugInfo/besouro_7.jpg'
    }
  },
  {
    id: 14,
    name: 'Gorgulho de videira',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/gorgulho_de_videira.jpg',
      bugShadow: '/img/bugShadow/gorgulho_de_videira.png',
      bugInfo: '/img/bugInfo/gorgulho_de_videira.jpg'
    }
  },
  {
    id: 15,
    name: 'Besouro 8',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/besouro_8.jpg',
      bugShadow: '/img/bugShadow/besouro_8.png',
      bugInfo: '/img/bugInfo/besouro_8.jpg'
    }
  },
  {
    id: 16,
    name: 'Besouro 9',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/besouro_9.jpg',
      bugShadow: '/img/bugShadow/besouro_9.png',
      bugInfo: '/img/bugInfo/besouro_9.jpg'
    }
  },
  {
    id: 17,
    name: 'Macrodactylus subspinosus',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/macrodactylus_subspinosus.jpg',
      bugShadow: '/img/bugShadow/macrodactylus_subspinosus.png',
      bugInfo: '/img/bugInfo/macrodactylus_subspinosus.jpg'
    }
  },
  {
    id: 18,
    name: 'Poecilus cupreus',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/poecilus_cupreus.jpg',
      bugShadow: '/img/bugShadow/poecilus_cupreus.png',
      bugInfo: '/img/bugInfo/poecilus_cupreus.jpg'
    }
  },
  {
    id: 19,
    name: 'Besouro 10',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/besouro_10.jpg',
      bugShadow: '/img/bugShadow/besouro_10.png',
      bugInfo: '/img/bugInfo/besouro_10.jpg'
    }
  },
  {
    id: 20,
    name: 'Vagalume',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/vagalume.jpg',
      bugShadow: '/img/bugShadow/vagalume.png',
      bugInfo: '/img/bugInfo/vagalume.jpg'
    }
  },
  {
    id: 21,
    name: 'Tetracha carolina',
    nickname: '',
    categoryId: 1,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/tetracha_carolina.jpg',
      bugShadow: '/img/bugShadow/tetracha_carolina.png',
      bugInfo: '/img/bugInfo/tetracha_carolina.jpg'
    }
  },
  {
    id: 22,
    name: 'Borboleta',
    nickname: '',
    categoryId: 2,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/borboleta.jpg',
      bugShadow: '/img/bugShadow/borboleta.png',
      bugInfo: '/img/bugInfo/borboleta.jpg'
    }
  },
  {
    id: 23,
    name: 'Mariposa 1',
    nickname: '',
    categoryId: 2,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/mariposa.jpg',
      bugShadow: '/img/bugShadow/mariposa.png',
      bugInfo: '/img/bugInfo/mariposa.jpg'
      // bugBonus: '/img/bugInfo/mariposa_bonus.jpg'
    }
  },
  {
    id: 24,
    name: 'Mariposa 2',
    nickname: '',
    categoryId: 2,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/mariposa_2.jpg',
      bugShadow: '/img/bugShadow/mariposa_2.png',
      bugInfo: '/img/bugInfo/mariposa_2.jpg'
    }
  },
  {
    id: 25,
    name: 'Formiga 1',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/formiga_1.jpg',
      bugShadow: '/img/bugShadow/formiga_1.png',
      bugInfo: '/img/bugInfo/formiga_1.jpg'
    }
  },
  {
    id: 26,
    name: 'Formiga 2',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/formiga_2.jpg',
      bugShadow: '/img/bugShadow/formiga_2.png',
      bugInfo: '/img/bugInfo/formiga_2.jpg'
    }
  },
  {
    id: 27,
    name: 'Saúva',
    nickname: 'Tanajura',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/sauva.jpg',
      bugShadow: '/img/bugShadow/sauva.png',
      bugInfo: '/img/bugInfo/sauva.jpg'
    }
  },
  {
    id: 28,
    name: 'Formiga 4',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/formiga_4.jpg',
      bugShadow: '/img/bugShadow/formiga_4.png',
      bugInfo: '/img/bugInfo/formiga_4.jpg'
    }
  },
  {
    id: 29,
    name: 'Vespa 1',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/vespa_1.jpg',
      bugShadow: '/img/bugShadow/vespa_1.png',
      bugInfo: '/img/bugInfo/vespa_1.jpg'
    }
  },
  {
    id: 30,
    name: 'Vespa 2',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/vespa_2.jpg',
      bugShadow: '/img/bugShadow/vespa_2.png',
      bugInfo: '/img/bugInfo/vespa_2.jpg'
    }
  },
  {
    id: 31,
    name: 'Abelha 1',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/abelha.jpg',
      bugShadow: '/img/bugShadow/abelha.png',
      bugInfo: '/img/bugInfo/abelha.jpg'
    }
  },
  {
    id: 32,
    name: 'Abelha 2',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/abelha_2.jpg',
      bugShadow: '/img/bugShadow/abelha_2.png',
      bugInfo: '/img/bugInfo/abelha_2.jpg'
    }
  },
  {
    id: 33,
    name: 'Arapuá',
    nickname: '',
    categoryId: 3,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/arapua.jpg',
      bugShadow: '/img/bugShadow/arapua.png',
      bugInfo: '/img/bugInfo/arapua.jpg'
    }
  },
  {
    id: 34,
    name: 'Mosca doméstica',
    nickname: '',
    categoryId: 4,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/mosca_domestica.jpg',
      bugShadow: '/img/bugShadow/mosca_domestica.png',
      bugInfo: '/img/bugInfo/mosca_domestica.jpg'
    }
  },
  {
    id: 35,
    name: 'Mosca',
    nickname: '',
    categoryId: 4,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/mosca.jpg',
      bugShadow: '/img/bugShadow/mosca.png',
      bugInfo: '/img/bugInfo/mosca.jpg'
    }
  },
  {
    id: 36,
    name: 'Jadera',
    nickname: '',
    categoryId: 5,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/jadera.jpg',
      bugShadow: '/img/bugShadow/jadera.png',
      bugInfo: '/img/bugInfo/jadera.jpg'
    }
  },
  {
    id: 37,
    name: 'Percevejo 1',
    nickname: '',
    categoryId: 5,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/percevejo_1.jpg',
      bugShadow: '/img/bugShadow/percevejo_1.png',
      bugInfo: '/img/bugInfo/percevejo_1.jpg'
    }
  },
  {
    id: 38,
    name: 'Percevejo 2',
    nickname: '',
    categoryId: 5,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/percevejo_2.jpg',
      bugShadow: '/img/bugShadow/percevejo_2.png',
      bugInfo: '/img/bugInfo/percevejo_2.jpg'
    }
  },
  {
    id: 39,
    name: 'Cigarra',
    nickname: '',
    categoryId: 5,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/cigarra.jpg',
      bugShadow: '/img/bugShadow/cigarra.png',
      bugInfo: '/img/bugInfo/cigarra.jpg'
      // bugBonus: '/img/bugInfo/cigarra_bonus.jpg'
    }
  },
  {
    id: 40,
    name: 'Grilo 1',
    nickname: '',
    categoryId: 6,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/grilo_1.jpg',
      bugShadow: '/img/bugShadow/grilo_1.png',
      bugInfo: '/img/bugInfo/grilo_1.jpg'
    }
  },
  {
    id: 41,
    name: 'Grilo 2',
    nickname: '',
    categoryId: 6,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/grilo_2.jpg',
      bugShadow: '/img/bugShadow/grilo_2.png',
      bugInfo: '/img/bugInfo/grilo_2.jpg'
    }
  },
  {
    id: 42,
    name: 'Odonata',
    nickname: '',
    categoryId: 7,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/odonata.jpg',
      bugShadow: '/img/bugShadow/odonata.png',
      bugInfo: '/img/bugInfo/odonata.jpg'
    }
  },
  {
    id: 43,
    name: 'Barata',
    nickname: '',
    categoryId: 8,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/barata.jpg',
      bugShadow: '/img/bugShadow/barata.png',
      bugInfo: '/img/bugInfo/barata.jpg'
    }
  },
  {
    id: 44,
    name: 'Cupim',
    nickname: '',
    categoryId: 9,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/cupim.jpg',
      bugShadow: '/img/bugShadow/cupim.png',
      bugInfo: '/img/bugInfo/cupim.jpg'
    }
  },
  {
    id: 45,
    name: 'Tesourinha',
    nickname: '',
    categoryId: 10,
    date: '22/X/2021',
    agent: 'Michelli Arantes Braga',
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    matched: false,
    img: {
      bug: '/img/bug/tesourinha.jpg',
      bugShadow: '/img/bugShadow/tesourinha.png',
      bugInfo: '/img/bugInfo/tesourinha.jpg'
    }
  }
]

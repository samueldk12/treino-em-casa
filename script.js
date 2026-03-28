const storageKey = "treino-em-casa-state-v1";

const goals = [
  { id: "strength", label: "Forca", title: "Forca total para o corpo inteiro" },
  { id: "cardio", label: "Cardio", title: "Cardio em casa com ritmo crescente" },
  { id: "mobility", label: "Mobilidade", title: "Mobilidade e recuperacao ativa" },
];

const levels = [
  { id: "beginner", label: "Iniciante" },
  { id: "intermediate", label: "Intermediario" },
  { id: "advanced", label: "Avancado" },
];

const energies = [
  { id: "low", label: "Baixa energia", description: "Treino mais tecnico, menor impacto." },
  { id: "steady", label: "Ritmo estavel", description: "Sessao equilibrada para manter consistencia." },
  { id: "high", label: "Energia alta", description: "Mais densidade e blocos mais desafiadores." },
  { id: "recover", label: "Recuperacao", description: "Mobilidade, core e descarga de tensao." },
];

const libraryFilters = [
  { id: "all", label: "Rotina completa" },
  { id: "back-shoulders", label: "Costas e ombros" },
  { id: "lower-body", label: "Pernas e posterior" },
  { id: "push-core", label: "Peito e core" },
  { id: "mobility", label: "Alongamento" },
  { id: "boxing", label: "Boxe e reflexo" },
];

const presets = [
  {
    id: "express-strength",
    label: "Express",
    title: "Forca em 20 min",
    description: "Para dias corridos em que voce quer sair do zero com qualidade.",
    goal: "strength",
    level: "beginner",
    duration: 20,
    energy: "steady",
  },
  {
    id: "focus-cardio",
    label: "Suor rapido",
    title: "Cardio de 25 min",
    description: "Eleva o ritmo sem ocupar metade do dia.",
    goal: "cardio",
    level: "intermediate",
    duration: 25,
    energy: "high",
  },
  {
    id: "mobility-reset",
    label: "Reset",
    title: "Mobilidade de 15 min",
    description: "Ideal para recuperar o corpo e ainda manter consistencia.",
    goal: "mobility",
    level: "beginner",
    duration: 15,
    energy: "recover",
  },
  {
    id: "performance",
    label: "Performance",
    title: "Forca densa 40 min",
    description: "Mais bloco principal, menos dispersao e maior desafio tecnico.",
    goal: "strength",
    level: "advanced",
    duration: 40,
    energy: "high",
  },
];

const exerciseLibrary = [
  {
    id: "shadow-boxing",
    name: "Shadowboxing tecnico",
    goal: "boxing",
    level: "beginner",
    duration: "3 x 60s",
    equipment: "Sem equipamento",
    stimulus: "Coordenacao, condicionamento e fluidez de golpes",
    description: "Abre a rotina com rounds leves de boxe para elevar a temperatura, organizar base e ativar ombros com intencao.",
    imageUrl: "https://www.tonyjeffries.com/wp-content/uploads/2020/07/How-To-Shadow-Box.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/i12A6G_LiJo?feature=oembed",
    sourceUrl: "https://www.tonyjeffries.com/how-to-shadow-box-video-tips-why-you-should-do-it/",
    block: "Boxe A",
    focus: "Shadowboxing",
    rest: "20s",
    sets: 3,
    reps: "Round tecnico",
    workSeconds: 60,
    restSeconds: 20,
    loadHint: "Sem carga, com base leve e guarda alta",
    promptMode: "shadow",
    steps: [
      "Fique em base de boxe com maos no rosto e queixo protegido.",
      "Solte combinacoes curtas no ar sem travar os joelhos.",
      "Movimente entrada, saida e pivots enquanto respira pelo nariz quando possivel.",
      "Retorne sempre a guarda apos cada golpe.",
    ],
    tips: [
      "Nao transforme em corrida no lugar; mantenha tecnica de boxe.",
      "Pense em tocar e sair, nao apenas bater no vazio.",
      "Use o quadril para girar cruzados e diretos.",
    ],
  },
  {
    id: "one-arm-row",
    name: "Remada unilateral com halter",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 10-12 por lado",
    equipment: "Halter + apoio",
    stimulus: "Dorsais, romboides e estabilidade de tronco",
    description: "Exercicio-base do treino para abrir as costas e dar densidade sem perder controle escapular.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/one-arm-dumbbell-row.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/YZgVEy6cmaY?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/one-arm-dumbbell-row.html",
    block: "Bloco A",
    focus: "Costas",
    rest: "30s",
    sets: 3,
    reps: "10-12 por lado",
    workSeconds: 45,
    restSeconds: 30,
    loadHint: "Carga moderada que permita segurar 1s no topo",
    steps: [
      "Apoie uma mao e o joelho do mesmo lado em um banco ou sofa firme.",
      "Deixe a coluna neutra e o halter pendendo sob o ombro.",
      "Puxe o cotovelo para tras e para cima, sem girar o tronco.",
      "Desca devagar e repita todas as repeticoes antes de trocar de lado.",
    ],
    tips: [
      "Pense em levar o cotovelo ao bolso de tras.",
      "Mantenha o abdomen firme para nao torcer o quadril.",
      "Segure um segundo no topo para sentir as costas trabalhando.",
    ],
  },
  {
    id: "standing-shoulder-press",
    name: "Desenvolvimento de ombro em pe",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 8-10",
    equipment: "2 halteres",
    stimulus: "Deltoides, triceps e core",
    description: "Principal movimento de ombro da rotina, com transferencia boa para estabilidade e forca acima da cabeca.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/standing-dumbbell-press.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/760002177?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/standing-dumbbell-press.html",
    block: "Bloco A",
    focus: "Ombros",
    rest: "45s",
    sets: 3,
    reps: "8-10",
    workSeconds: 45,
    restSeconds: 45,
    loadHint: "Carga moderada com ultima repeticao limpa",
    steps: [
      "Suba os halteres ate a altura dos ombros com punhos neutros.",
      "Trave gluteos e abdomen antes de empurrar o peso para cima.",
      "Estenda os bracos sem jogar as costelas para frente.",
      "Volte sob controle ate a linha das orelhas.",
    ],
    tips: [
      "Evite arquear a lombar para ganhar impulso.",
      "Pense em subir e descer no mesmo trilho.",
      "Se perder estabilidade, diminua a carga antes de aumentar o ritmo.",
    ],
  },
  {
    id: "rear-delt-fly",
    name: "Crucifixo invertido com halteres",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 12-15",
    equipment: "2 halteres leves",
    stimulus: "Posterior de ombro, traps e postura",
    description: "Fecha o bloco de costas e ombros reforcando deltoide posterior, importante para estetica e saude do ombro.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/bent-over-rear-delt-raise.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/Fgz_FdzDukE?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly.html",
    block: "Bloco A",
    focus: "Ombro posterior",
    rest: "30s",
    sets: 3,
    reps: "12-15",
    workSeconds: 40,
    restSeconds: 30,
    loadHint: "Carga leve a moderada, sem balanco",
    steps: [
      "Flexione levemente os joelhos e incline o tronco.",
      "Deixe os halteres abaixo dos ombros com cotovelos suaves.",
      "Abra os bracos em arco ate a linha dos ombros.",
      "Desca sem soltar o controle das escapas.",
    ],
    tips: [
      "Use menos carga do que parece necessario.",
      "Nao transforme o movimento em remada.",
      "Mantenha o pescoco neutro para preservar a postura.",
    ],
  },
  {
    id: "boxing-reflex",
    name: "Drill de reflexo e esquiva",
    goal: "boxing",
    level: "beginner",
    duration: "3 x 40s",
    equipment: "Sem equipamento",
    stimulus: "Reflexo visual, esquiva e resposta rapida",
    description: "Bloco de reflexo com cues aleatorios para treinar jab, cruzado, slips laterais e duck sem precisar de material.",
    imageUrl: "https://i.ytimg.com/vi/kKDHdsVN0b8/maxresdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/kKDHdsVN0b8?rel=0",
    sourceUrl: "https://www.tonyjeffries.com/watch/",
    block: "Boxe B",
    focus: "Reflexo",
    rest: "20s",
    sets: 3,
    reps: "Resposta por cue",
    workSeconds: 40,
    restSeconds: 20,
    loadHint: "Sem carga, foco total em leitura visual e retorno rapido",
    promptMode: "reflex",
    steps: [
      "Mantenha base de boxe curta e olhos para frente.",
      "Reaja ao cue na tela com jab, direto, slip esquerda, slip direita ou duck.",
      "Volte imediatamente para a guarda depois de cada resposta.",
      "Mantenha tronco solto e pes vivos sem pular demais.",
    ],
    tips: [
      "O objetivo e resposta limpa, nao velocidade sem forma.",
      "Nas esquivas, mova o corpo inteiro e nao apenas a cabeca.",
      "Solte o ar em golpes e mantenha o centro firme nas esquivas.",
    ],
  },
  {
    id: "goblet-squat",
    name: "Agachamento goblet com halter",
    goal: "lower-body",
    level: "intermediate",
    duration: "3 x 12",
    equipment: "1 halter",
    stimulus: "Quadriceps, gluteos, core e parte alta das costas",
    description: "Entra para manter o treino completo e sustentar a base de pernas sem roubar foco do objetivo principal.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-goblet-squat-1.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/5Y3KW5rWMh4?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-goblet-squat",
    block: "Bloco B",
    focus: "Pernas e core",
    rest: "45s",
    sets: 3,
    reps: "12",
    workSeconds: 45,
    restSeconds: 45,
    loadHint: "1 halter desafiante, mas com tronco firme",
    steps: [
      "Segure o halter junto ao peito com cotovelos apontando para baixo.",
      "Desca sentando entre os joelhos, mantendo o peito alto.",
      "Empurre o chao com os pes para subir sem perder o tronco firme.",
      "Expire no retorno e reorganize os pes antes da proxima repeticao.",
    ],
    tips: [
      "Mantenha o halter perto do corpo durante toda a serie.",
      "Se o quadril travar, reduza a profundidade e preserve a postura.",
      "Joelhos acompanham a linha dos pes, sem cair para dentro.",
    ],
  },
  {
    id: "dumbbell-rdl",
    name: "Stiff com halteres",
    goal: "lower-body",
    level: "intermediate",
    duration: "3 x 10-12",
    equipment: "2 halteres",
    stimulus: "Posterior de coxa, gluteos e lombar estavel",
    description: "Movimento de cadeia posterior para equilibrar o treino e fortalecer a base que sustenta remadas e presses melhores.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-stiff-leg-deadlift.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/877880547?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html",
    block: "Bloco B",
    focus: "Posterior",
    rest: "45s",
    sets: 3,
    reps: "10-12",
    workSeconds: 45,
    restSeconds: 45,
    loadHint: "2 halteres com foco em amplitude controlada",
    steps: [
      "Fique em pe com os halteres na frente das coxas.",
      "Empurre o quadril para tras mantendo a coluna neutra.",
      "Desca os halteres perto das pernas ate sentir alongar posterior.",
      "Suba apertando gluteos, sem jogar os ombros para tras.",
    ],
    tips: [
      "O movimento nasce no quadril, nao na lombar.",
      "Deixe as canelas quase paradas durante a descida.",
      "Se perder a coluna neutra, encurte a amplitude.",
    ],
  },
  {
    id: "push-up",
    name: "Flexao de braco",
    goal: "push-core",
    level: "intermediate",
    duration: "3 x 12-15",
    equipment: "Sem equipamento",
    stimulus: "Peitoral, triceps, ombro anterior e core",
    description: "Entra como empurrar sem halteres para deixar o treino diario mais completo e acessivel em qualquer dia.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/push-ups.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/KEFQyLkDYtI?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/push-up.html",
    block: "Bloco C",
    focus: "Peito e triceps",
    rest: "30s",
    sets: 3,
    reps: "12-15",
    workSeconds: 40,
    restSeconds: 30,
    loadHint: "Peso corporal com peito tocando amplitude segura",
    steps: [
      "Apoie as maos abaixo da linha dos ombros e estenda o corpo.",
      "Desca controlando peito e quadril juntos.",
      "Empurre o chao ate voltar a bracos estendidos.",
      "Mantenha o abdomen firme do inicio ao fim.",
    ],
    tips: [
      "Se precisar, eleve as maos em um apoio para manter tecnica boa.",
      "Nao deixe o quadril cair na descida.",
      "Cotovelos levemente para tras, nao totalmente abertos.",
    ],
  },
  {
    id: "ab-crunch",
    name: "Abdominal crunch",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 20",
    equipment: "Sem equipamento",
    stimulus: "Reto abdominal e controle de tronco",
    description: "Fecha a rotina com abdominal simples e eficiente para dar acabamento no core sem depender de carga externa.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/ab-crunch.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/Plh1CyiPE_Y?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/ab-crunch",
    block: "Bloco C",
    focus: "Core",
    rest: "20s",
    sets: 3,
    reps: "20",
    workSeconds: 35,
    restSeconds: 20,
    loadHint: "Peso corporal com foco em encurtar o abdomen",
    steps: [
      "Deite com joelhos flexionados e maos leves ao lado da cabeca ou no peito.",
      "Suba as escapas do chao usando o abdomen, sem puxar o pescoco.",
      "Segure curto no topo e desca sob controle.",
      "Repita mantendo a lombar estavel e o olhar para cima.",
    ],
    tips: [
      "Pense em aproximar costelas da pelve.",
      "O movimento e curto; nao precisa sentar inteiro.",
      "Expire no topo para recrutar mais abdomen.",
    ],
  },
  {
    id: "dumbbell-bench-press",
    name: "Supino com halteres",
    goal: "push-core",
    level: "intermediate",
    duration: "4 x 8-10",
    equipment: "2 halteres + banco ou sofa firme",
    stimulus: "Peitoral, triceps e ombro anterior",
    description: "Volta para a biblioteca como opcao classica de peito com halteres, otima para ganhar volume e manter o ombro mais livre.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-bench-press_0.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/dGqI0Z5ul4k?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-bench-press.html",
    block: "Biblioteca extra",
    focus: "Peito",
    rest: "60s",
    sets: 4,
    reps: "8-10",
    workSeconds: 45,
    restSeconds: 60,
    loadHint: "Carga moderada a alta com amplitude limpa",
    steps: [
      "Deite com os pes firmes no chao e os halteres na linha do peito.",
      "Desca os cotovelos com controle ate alongar o peitoral sem perder estabilidade.",
      "Empurre os halteres para cima sem bater um no outro.",
      "Finalize com escapas organizadas e punhos neutros.",
    ],
    tips: [
      "Nao deixe o ombro subir em direcao as orelhas.",
      "Use uma amplitude que preserve conforto articular.",
      "Suba forte, mas desca de forma mais lenta.",
    ],
  },
  {
    id: "incline-dumbbell-bench-press",
    name: "Supino inclinado com halteres",
    goal: "push-core",
    level: "intermediate",
    duration: "4 x 8-10",
    equipment: "2 halteres + banco inclinado",
    stimulus: "Peitoral superior, triceps e estabilizacao do ombro",
    description: "Boa variacao para desenvolver a parte alta do peitoral e variar o estimulo de empurrar com halteres.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/8nNi8jbbUPE?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/incline-dumbbell-bench-press.html",
    block: "Biblioteca extra",
    focus: "Peito superior",
    rest: "60s",
    sets: 4,
    reps: "8-10",
    workSeconds: 45,
    restSeconds: 60,
    loadHint: "Carga moderada com escapas presas no banco",
    steps: [
      "Ajuste o banco em inclinacao moderada e suba com os halteres na linha do peito.",
      "Desca os cotovelos sob controle, mantendo peito aberto e punhos alinhados.",
      "Empurre para cima em arco curto ate quase estender os cotovelos.",
      "Volte sem deixar os halteres fugirem para frente.",
    ],
    tips: [
      "Incline menos o banco se sentir demais o ombro anterior.",
      "Nao perca o pe firme no chao.",
      "Pense em empurrar o banco para tras enquanto sobe os halteres.",
    ],
  },
  {
    id: "dumbbell-floor-press",
    name: "Supino no chao com halteres",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 10-12",
    equipment: "2 halteres",
    stimulus: "Peitoral, triceps e lockout de ombro",
    description: "Versao pratica para treinar peito em casa sem banco, com limite natural de amplitude e boa seguranca.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-floor-press-thumb.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/gaBOfLlIXjs?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-floor-press.html",
    block: "Biblioteca extra",
    focus: "Peito em casa",
    rest: "45s",
    sets: 3,
    reps: "10-12",
    workSeconds: 40,
    restSeconds: 45,
    loadHint: "Carga moderada com cotovelos tocando o solo sob controle",
    steps: [
      "Deite no chao com joelhos flexionados e halteres acima do peito.",
      "Desca ate os triceps encostarem no solo sem relaxar totalmente.",
      "Empurre de volta mantendo as escapas encaixadas.",
      "Finalize com controle do tronco e punhos alinhados.",
    ],
    tips: [
      "Use o chao para padronizar a amplitude.",
      "Evite bater o cotovelo no solo.",
      "Excelente opcao quando nao ha banco disponivel.",
    ],
  },
  {
    id: "dumbbell-lateral-raise",
    name: "Elevacao lateral com halteres",
    goal: "back-shoulders",
    level: "beginner",
    duration: "3 x 12-15",
    equipment: "2 halteres leves",
    stimulus: "Deltoide lateral e estabilidade de ombro",
    description: "Acrescenta volume de ombro com pouco equipamento e ajuda a deixar a parte lateral mais presente.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/dumbbell-lateral-raise.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/760008500?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-lateral-raise.html",
    block: "Biblioteca extra",
    focus: "Ombro lateral",
    rest: "30s",
    sets: 3,
    reps: "12-15",
    workSeconds: 35,
    restSeconds: 30,
    loadHint: "Carga leve a moderada sem roubar com o tronco",
    steps: [
      "Fique em pe com halteres ao lado do corpo e cotovelos suavemente flexionados.",
      "Abra os bracos para os lados ate a linha dos ombros.",
      "Desca com controle sem deixar o peso cair.",
      "Mantenha o peito alto e o pescoco relaxado.",
    ],
    tips: [
      "Suba com os cotovelos liderando o movimento.",
      "Menos carga costuma gerar melhor execucao aqui.",
      "Evite jogar o quadril para iniciar a subida.",
    ],
  },
  {
    id: "standing-dumbbell-front-raise",
    name: "Elevacao frontal com halteres",
    goal: "back-shoulders",
    level: "beginner",
    duration: "3 x 10-12",
    equipment: "2 halteres leves",
    stimulus: "Deltoide anterior e controle de tronco",
    description: "Boa opcao para complementar o trabalho de ombro quando voce quer enfatizar a frente sem depender de presses.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/standing-dumbbell-front-raise.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/760002236?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-front-raise.html",
    block: "Biblioteca extra",
    focus: "Ombro anterior",
    rest: "30s",
    sets: 3,
    reps: "10-12",
    workSeconds: 35,
    restSeconds: 30,
    loadHint: "Carga leve com abdomen travado",
    steps: [
      "Comece com os halteres na frente das coxas e postura alta.",
      "Eleve os bracos ate a altura dos ombros sem usar embalo.",
      "Desca devagar mantendo costelas encaixadas.",
      "Repita com ritmo constante e respiracao controlada.",
    ],
    tips: [
      "Nao eleve acima da linha dos ombros.",
      "Se sentir lombar, reduza a carga e trave mais o core.",
      "Funciona bem como acessorio depois do desenvolvimento.",
    ],
  },
  {
    id: "dumbbell-upright-row",
    name: "Remada alta com halteres",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 10-12",
    equipment: "2 halteres",
    stimulus: "Deltoides e trapezio superior",
    description: "Variacao para encher ombros e trapezio com um padrao de puxada curta e vertical.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/dumbbell-upright-row-thumb.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/Cxrmdrq1s3E?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-upright-row.html",
    block: "Biblioteca extra",
    focus: "Deltoide e trapezio",
    rest: "45s",
    sets: 3,
    reps: "10-12",
    workSeconds: 40,
    restSeconds: 45,
    loadHint: "Carga moderada com cotovelos subindo primeiro",
    steps: [
      "Segure os halteres na frente das coxas com postura firme.",
      "Puxe os cotovelos para cima ate a linha do peito ou um pouco abaixo.",
      "Desca sem perder o controle da escapa.",
      "Mantenha os punhos neutros e o tronco parado.",
    ],
    tips: [
      "Nao force amplitude se o ombro reclamar.",
      "Pense em subir com cotovelos, nao com as maos.",
      "Use menos carga e melhor forma.",
    ],
  },
  {
    id: "seated-dumbbell-shrug",
    name: "Encolhimento sentado com halteres",
    goal: "back-shoulders",
    level: "beginner",
    duration: "3 x 12-15",
    equipment: "2 halteres + banco ou caixa",
    stimulus: "Trapezio superior e postura escapular",
    description: "Acessorio simples para fortalecer trapezio e dar mais suporte ao trabalho de costas e ombros.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/seated-dumbbell-shrug.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/756787846?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/seated-dumbbell-shrug.html",
    block: "Biblioteca extra",
    focus: "Trapezio",
    rest: "30s",
    sets: 3,
    reps: "12-15",
    workSeconds: 35,
    restSeconds: 30,
    loadHint: "Carga moderada sem girar os ombros",
    steps: [
      "Sente-se alto com halteres ao lado do corpo.",
      "Eleve os ombros em direcao as orelhas sem girar para frente.",
      "Segure um instante no topo e desca sob controle.",
      "Mantenha o pescoco neutro durante toda a serie.",
    ],
    tips: [
      "Nao rode os ombros; suba e desca apenas.",
      "Pause no topo para sentir o trapezio.",
      "Boa opcao de acabamento depois de remadas.",
    ],
  },
  {
    id: "dumbbell-pullover",
    name: "Pullover com halter",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 10-12",
    equipment: "1 halter + banco ou sofa firme",
    stimulus: "Grande dorsal, peitoral e serratil",
    description: "Movimento versatil para integrar peito e costas, muito util quando voce quer abrir caixa toracica e treinar puxada com pouco material.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/dumbbell-pullover.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/760008438?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/dumbbell-pullover.html",
    block: "Biblioteca extra",
    focus: "Dorsal e peito",
    rest: "45s",
    sets: 3,
    reps: "10-12",
    workSeconds: 40,
    restSeconds: 45,
    loadHint: "1 halter moderado com amplitude controlada",
    steps: [
      "Apoie a parte alta das costas em um banco ou deite totalmente, segurando um halter com as duas maos.",
      "Leve o peso para tras da cabeca com cotovelos levemente flexionados.",
      "Volte puxando pelo peitoral e pelas dorsais ate alinhar sobre o peito.",
      "Mantenha quadril e costelas estaveis durante o movimento.",
    ],
    tips: [
      "Nao transforme em triceps extension.",
      "Use amplitude que preserve o ombro confortavel.",
      "Respire fundo na descida e expire na subida.",
    ],
  },
  {
    id: "jab-cross-base",
    name: "Drill de jab e direto",
    goal: "boxing",
    level: "beginner",
    duration: "3 x 60s",
    equipment: "Sem equipamento",
    stimulus: "Tecnica de base, alinhamento e velocidade de maos",
    description: "Bloco tecnico de boxe para repetir o basico bem feito, com foco em base, guarda e retorno rapido apos cada golpe.",
    imageUrl: "https://i.ytimg.com/vi/kKDHdsVN0b8/maxresdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/kKDHdsVN0b8?rel=0",
    sourceUrl: "https://www.tonyjeffries.com/learn-how-to-box-in-the-simplest-way-by-an-olympic-boxer-tony-jeffries/",
    block: "Biblioteca extra",
    focus: "Boxe basico",
    rest: "20s",
    sets: 3,
    reps: "Round tecnico",
    workSeconds: 60,
    restSeconds: 20,
    loadHint: "Sem carga, leve e tecnico",
    promptMode: "shadow",
    steps: [
      "Fique em base com um pe a frente, joelhos soltos e maos altas.",
      "Solte o jab reto, recolha, depois conecte o direto com giro curto do quadril.",
      "Retorne imediatamente para a guarda apos a combinacao.",
      "Mantenha deslocamentos pequenos para frente e para tras.",
    ],
    tips: [
      "Nao cruze os pes nas entradas e saidas.",
      "Pense em tocar e voltar, nao em empurrar o ar.",
      "Expire curto a cada golpe.",
    ],
  },
  {
    id: "boxing-footwork-pivot",
    name: "Footwork e pivot de boxe",
    goal: "boxing",
    level: "beginner",
    duration: "3 x 45s",
    equipment: "Sem equipamento",
    stimulus: "Mobilidade de base, saida angular e coordenacao",
    description: "Trabalha o jogo de pernas do boxe para melhorar deslocamento, entrada e saida sem perder a postura.",
    imageUrl: "https://www.tonyjeffries.com/wp-content/uploads/2020/07/How-To-Shadow-Box.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/i12A6G_LiJo?rel=0",
    sourceUrl: "https://www.tonyjeffries.com/how-to-shadow-box-video-tips-why-you-should-do-it/",
    block: "Biblioteca extra",
    focus: "Footwork",
    rest: "20s",
    sets: 3,
    reps: "Round tecnico",
    workSeconds: 45,
    restSeconds: 20,
    loadHint: "Sem carga, com passos curtos e base viva",
    promptMode: "shadow",
    steps: [
      "Adote a base de boxe e mova o pe da frente primeiro ao avancar.",
      "Ao recuar, leve o pe de tras primeiro para manter distancia entre os pes.",
      "Use pivots curtos para sair do centro e reenquadrar o tronco.",
      "Mantenha a guarda alta mesmo durante os deslocamentos.",
    ],
    tips: [
      "Passos curtos sao melhores do que pulos longos.",
      "Evite juntar demais os pes no meio da troca.",
      "O objetivo e leveza com equilibrio.",
    ],
  },
  {
    id: "hook-uppercut-flow",
    name: "Hook e uppercut no shadowboxing",
    goal: "boxing",
    level: "intermediate",
    duration: "3 x 45s",
    equipment: "Sem equipamento",
    stimulus: "Rotacao, transferencia de peso e variacao de golpes",
    description: "Amplia o repertorio do boxe em casa com golpes curtos, angulados e foco em giro de tronco.",
    imageUrl: "https://i.ytimg.com/vi/kKDHdsVN0b8/maxresdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/kKDHdsVN0b8?rel=0",
    sourceUrl: "https://www.tonyjeffries.com/learn-how-to-box-in-the-simplest-way-by-an-olympic-boxer-tony-jeffries/",
    block: "Biblioteca extra",
    focus: "Combinacoes curtas",
    rest: "20s",
    sets: 3,
    reps: "Round tecnico",
    workSeconds: 45,
    restSeconds: 20,
    loadHint: "Sem carga, com quadril solto e guarda alta",
    promptMode: "shadow",
    steps: [
      "A partir da base, gire o tronco para soltar hooks curtos sem abrir demais o cotovelo.",
      "Use o uppercut subindo pelo centro com joelhos flexionados e punho alinhado.",
      "Misture hook, upper e saida lateral para criar fluidez.",
      "Volte sempre a guarda ao fim de cada troca.",
    ],
    tips: [
      "A potencia nasce do giro do pe e do quadril.",
      "Nao lance o tronco para frente nos uppercuts.",
      "Golpes curtos costumam ficar melhores do que amplitudes exageradas.",
    ],
  },
  {
    id: "prisoner-squat",
    name: "Agachamento prisoner",
    goal: "lower-body",
    level: "beginner",
    duration: "3 x 15-20",
    equipment: "Sem equipamento",
    stimulus: "Quadriceps, gluteos e mobilidade de quadril",
    description: "Opcao simples para treinar pernas sem halter, melhorando base, resistencia local e padrao de agachar em casa.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/prisoner-squat.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/0PboqagHAjs?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/bodyweight-squat.html",
    block: "Biblioteca extra",
    focus: "Pernas sem carga",
    rest: "30s",
    sets: 3,
    reps: "15-20",
    workSeconds: 40,
    restSeconds: 30,
    loadHint: "Peso corporal com maos atras da cabeca",
    steps: [
      "Fique com os pes na largura dos ombros e maos atras da cabeca.",
      "Desca levando o quadril para tras e os joelhos acompanhando os pes.",
      "Suba empurrando o chao sem colapsar o tronco.",
      "Mantenha peito aberto e abdomen ativo durante toda a serie.",
    ],
    tips: [
      "Se faltar mobilidade, reduza um pouco a profundidade.",
      "Nao jogue o pescoço para frente ao descer.",
      "Use ritmo constante para acumular mais controle.",
    ],
  },
  {
    id: "bodyweight-lunge",
    name: "Avanco sem carga",
    goal: "lower-body",
    level: "beginner",
    duration: "3 x 10-12 por perna",
    equipment: "Sem equipamento",
    stimulus: "Quadriceps, gluteos e estabilidade unilateral",
    description: "Boa escolha para pernas sem halter, ajudando no equilibrio e na forca de cada lado do corpo.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/bodyweight-lunge.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/4hqtPrp-E8A?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/bodyweight-lunge.html",
    block: "Biblioteca extra",
    focus: "Pernas unilaterais",
    rest: "30s",
    sets: 3,
    reps: "10-12 por perna",
    workSeconds: 45,
    restSeconds: 30,
    loadHint: "Peso corporal com tronco alto e passo firme",
    steps: [
      "De um passo a frente e desca os dois joelhos ao mesmo tempo.",
      "Pare antes de tocar o joelho de tras no chao, mantendo tronco alto.",
      "Empurre o chao com a perna da frente para voltar.",
      "Repita todas as repeticoes e troque o lado.",
    ],
    tips: [
      "Passo curto demais sobrecarrega o joelho da frente.",
      "Controle mais a descida do que a subida.",
      "Se precisar, use apoio leve na parede para equilibrio.",
    ],
  },
  {
    id: "bodyweight-step-up",
    name: "Step-up sem carga",
    goal: "lower-body",
    level: "beginner",
    duration: "3 x 10 por perna",
    equipment: "Caixa, escada ou banco baixo",
    stimulus: "Quadriceps, gluteos e estabilidade",
    description: "Exercicio pratico para perna em casa usando um degrau ou banco firme, com boa transferencia para o dia a dia.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/step-up.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/90-X4kqhY3E?rel=0",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/bodyweight-step-up.html",
    block: "Biblioteca extra",
    focus: "Pernas e gluteos",
    rest: "30s",
    sets: 3,
    reps: "10 por perna",
    workSeconds: 40,
    restSeconds: 30,
    loadHint: "Peso corporal com apoio firme",
    steps: [
      "Coloque um pe no apoio firme e incline levemente o tronco.",
      "Suba empurrando com a perna que esta em cima, sem saltar.",
      "Controle a descida e volte ao chao com equilibrio.",
      "Troque o lado apos completar as repeticoes.",
    ],
    tips: [
      "Evite impulsionar demais com a perna de baixo.",
      "Use um apoio baixo se estiver comecando.",
      "Mantenha o joelho alinhado com a ponta do pe.",
    ],
  },
  {
    id: "close-grip-push-up",
    name: "Flexao fechada",
    goal: "push-core",
    level: "intermediate",
    duration: "3 x 8-12",
    equipment: "Sem equipamento",
    stimulus: "Peitoral interno, triceps e core",
    description: "Variacao sem halter para peito e triceps, boa para intensificar a flexao tradicional com menos material.",
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/close-grip-push-up.jpg",
    videoEmbedUrl: "https://player.vimeo.com/video/756784503?badge=0&autopause=0&player_id=0&app_id=58479",
    sourceUrl: "https://cdn.muscleandstrength.com/exercises/close-grip-push-up.html",
    block: "Biblioteca extra",
    focus: "Peito e triceps",
    rest: "30s",
    sets: 3,
    reps: "8-12",
    workSeconds: 35,
    restSeconds: 30,
    loadHint: "Peso corporal com maos mais proximas",
    steps: [
      "Entre em prancha alta com as maos mais fechadas que na flexao normal.",
      "Desca com cotovelos apontando para tras, mantendo o corpo reto.",
      "Empurre o chao ate voltar a posicao inicial.",
      "Continue com abdomen firme e gluteos ativos.",
    ],
    tips: [
      "Se pesar demais, eleve as maos em um apoio.",
      "Nao deixe os cotovelos abrirem para os lados.",
      "Mantenha a cabeca alinhada com a coluna.",
    ],
  },
  {
    id: "incline-push-up",
    name: "Flexao inclinada",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 12-15",
    equipment: "Banco, sofa ou mesa firme",
    stimulus: "Peitoral, triceps e regressao tecnica da flexao",
    description: "Excelente opcao sem halter para treinar peito quando voce quer mais volume ou uma versao mais acessivel da flexao.",
    imageUrl: "https://i.ytimg.com/vi/cfns5VDVVvk/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/cfns5VDVVvk?rel=0",
    sourceUrl: "https://www.youtube.com/watch?v=cfns5VDVVvk",
    block: "Biblioteca extra",
    focus: "Peito acessivel",
    rest: "25s",
    sets: 3,
    reps: "12-15",
    workSeconds: 35,
    restSeconds: 25,
    loadHint: "Peso corporal com maos elevadas em apoio",
    steps: [
      "Apoie as maos em uma superficie firme acima da linha dos quadris.",
      "Mantenha corpo reto dos ombros aos tornozelos.",
      "Desca o peito ate perto do apoio sem perder o alinhamento.",
      "Empurre de volta e expire ao subir.",
    ],
    tips: [
      "Quanto mais alto o apoio, mais facil fica a execucao.",
      "Nao deixe o quadril cair na descida.",
      "Boa opcao para ganhar tecnica antes da flexao no chao.",
    ],
  },
  {
    id: "worlds-greatest-stretch",
    name: "World's greatest stretch",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 45s por lado",
    equipment: "Sem equipamento",
    stimulus: "Mobilidade de quadril, toracica e posterior",
    description: "Alongamento dinamico completo para abrir quadril, coluna toracica e cadeia posterior antes ou depois do treino.",
    imageUrl: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/04/800-greateststretchB.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/-CiWQ2IvY34?rel=0",
    sourceUrl: "https://www.muscleandfitness.com/workouts/abs-and-core-exercises/videos/worlds-greatest-stretch/",
    block: "Biblioteca extra",
    focus: "Alongamento global",
    rest: "15s",
    sets: 2,
    reps: "45s por lado",
    workSeconds: 45,
    restSeconds: 15,
    loadHint: "Sem carga, respirando fundo em cada abertura",
    steps: [
      "Entre em afundo longo com as duas maos no chao ao lado do pe da frente.",
      "Desca o cotovelo em direcao ao peito do pe da frente para abrir quadril.",
      "Depois gire o tronco e leve um braco para o teto.",
      "Troque o lado mantendo respiracao controlada.",
    ],
    tips: [
      "Movimente devagar e use a respiracao para ganhar amplitude.",
      "Nao force a lombar no giro toracico.",
      "Otimo para aquecimento e tambem para soltar o corpo no fim da sessao.",
    ],
  },
  {
    id: "couch-stretch",
    name: "Couch stretch",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 40s por lado",
    equipment: "Parede, sofa ou banco",
    stimulus: "Flexor de quadril e quadriceps",
    description: "Alongamento forte para quadriceps e flexor de quadril, muito util para quem passa tempo sentado ou treina pernas.",
    imageUrl: "https://i.ytimg.com/vi/TIJu5aWPke0/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/TIJu5aWPke0?rel=0",
    sourceUrl: "https://www.youtube.com/watch?v=TIJu5aWPke0",
    block: "Biblioteca extra",
    focus: "Quadril e quadriceps",
    rest: "15s",
    sets: 2,
    reps: "40s por lado",
    workSeconds: 40,
    restSeconds: 15,
    loadHint: "Sem carga, com apoio confortavel no joelho",
    steps: [
      "Apoie um joelho no chao perto do sofa ou parede e o peito do pe atras.",
      "Traga a outra perna a frente em base de meio afundo.",
      "Suba o tronco e encaixe o quadril sem arquear demais a lombar.",
      "Respire fundo e troque o lado apos o tempo.",
    ],
    tips: [
      "Use uma toalha sob o joelho se precisar.",
      "Pense em contrair o gluteo da perna que esta alongando.",
      "A intensidade alta e normal, mas sem dor aguda.",
    ],
  },
  {
    id: "cobra-stretch",
    name: "Cobra stretch",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 30-40s",
    equipment: "Sem equipamento",
    stimulus: "Abdomen, peitoral e extensao toracica",
    description: "Alongamento simples para abrir a parte da frente do corpo e aliviar rigidez depois de muitas flexoes ou tempo sentado.",
    imageUrl: "https://i.ytimg.com/vi/JDcdhTuycOI/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/JDcdhTuycOI?rel=0",
    sourceUrl: "https://www.youtube.com/watch?v=JDcdhTuycOI",
    block: "Biblioteca extra",
    focus: "Peito e abdomen",
    rest: "15s",
    sets: 2,
    reps: "30-40s",
    workSeconds: 35,
    restSeconds: 15,
    loadHint: "Sem carga, com ombros longe das orelhas",
    steps: [
      "Deite de barriga para baixo com as maos ao lado do peito.",
      "Empurre o chao e eleve o tronco ate uma extensao confortavel.",
      "Mantenha quadril pesado no solo e peito aberto.",
      "Respire fundo e desca devagar ao final.",
    ],
    tips: [
      "Nao trave os ombros para cima.",
      "A extensao deve vir mais do peito do que da lombar.",
      "Se sentir compressao, diminua a amplitude.",
    ],
  },
  {
    id: "glute-bridge",
    name: "Ponte de gluteo",
    goal: "lower-body",
    level: "beginner",
    duration: "3 x 15",
    equipment: "Sem equipamento",
    stimulus: "Gluteos, posterior e estabilidade de quadril",
    description: "Entrou a partir da lista de treinos em casa para fortalecer gluteos sem halter e dar suporte melhor para agachar e correr.",
    imageUrl: "https://i.ytimg.com/vi/OUgsJ8-Vi0E/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/OUgsJ8-Vi0E?rel=0",
    sourceUrl: "https://www-healthline-com.translate.goog/health/fitness-exercise/at-home-workouts?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
    block: "Biblioteca extra",
    focus: "Gluteos",
    rest: "25s",
    sets: 3,
    reps: "15",
    workSeconds: 35,
    restSeconds: 25,
    loadHint: "Peso corporal com subida forte e pausa no topo",
    steps: [
      "Deite de barriga para cima com joelhos dobrados e pes no chao.",
      "Empurre os calcanhares contra o solo e eleve o quadril.",
      "Segure um instante apertando os gluteos no topo.",
      "Desca com controle sem relaxar completamente no chao.",
    ],
    tips: [
      "Nao arquear demais a lombar na subida.",
      "Pense em subir pelo quadril e nao pelas costas.",
      "Se quiser mais intensidade, aumente a pausa no topo.",
    ],
  },
  {
    id: "knee-push-up",
    name: "Flexao com joelhos apoiados",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 12-15",
    equipment: "Sem equipamento",
    stimulus: "Peitoral, triceps e tecnica de empurrar",
    description: "Versao regressiva da flexao para treinar peito em casa com boa forma antes de evoluir para o chao completo.",
    imageUrl: "https://i.ytimg.com/vi/WcHtt6zT3Go/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/WcHtt6zT3Go?rel=0",
    sourceUrl: "https://www-healthline-com.translate.goog/health/fitness-exercise/at-home-workouts?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
    block: "Biblioteca extra",
    focus: "Peito iniciante",
    rest: "25s",
    sets: 3,
    reps: "12-15",
    workSeconds: 35,
    restSeconds: 25,
    loadHint: "Peso corporal com joelhos apoiados e tronco alinhado",
    steps: [
      "Apoie os joelhos no chao e alinhe quadril, tronco e ombros.",
      "Posicione as maos um pouco mais largas que os ombros.",
      "Desca o peito controlando o corpo inteiro.",
      "Empurre o chao ate voltar, sem perder o abdomen firme.",
    ],
    tips: [
      "Nao dobre o quadril para facilitar demais.",
      "Leve o peito para o chao antes do queixo.",
      "Boa opcao para ganhar volume com tecnica limpa.",
    ],
  },
  {
    id: "bird-dog",
    name: "Bird dog",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 8-10 por lado",
    equipment: "Sem equipamento",
    stimulus: "Core, lombar estavel e coordenacao",
    description: "Exercicio tecnico da lista de treinos em casa para fortalecer o centro do corpo e melhorar controle de tronco.",
    imageUrl: "https://i.ytimg.com/vi/k2azbhhuKuM/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/k2azbhhuKuM?rel=0",
    sourceUrl: "https://www-healthline-com.translate.goog/health/fitness-exercise/at-home-workouts?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
    block: "Biblioteca extra",
    focus: "Core e postura",
    rest: "20s",
    sets: 3,
    reps: "8-10 por lado",
    workSeconds: 35,
    restSeconds: 20,
    loadHint: "Peso corporal com movimento lento e preciso",
    steps: [
      "Fique em quatro apoios com maos sob os ombros e joelhos sob o quadril.",
      "Estenda um braco a frente e a perna oposta para tras.",
      "Pausa curta no alongamento maximo sem girar o tronco.",
      "Volte ao centro e troque os lados.",
    ],
    tips: [
      "Mantenha o umbigo levemente para dentro.",
      "Nao jogue a perna muito alto.",
      "Qualidade do controle importa mais do que velocidade.",
    ],
  },
  {
    id: "plank-to-downward-dog",
    name: "Prancha para cachorro olhando para baixo",
    goal: "mobility",
    level: "beginner",
    duration: "3 x 30-40s",
    equipment: "Sem equipamento",
    stimulus: "Ombros, core, posterior e mobilidade global",
    description: "Movimento dinâmico vindo dos treinos em casa para integrar core, ombros e alongamento da cadeia posterior.",
    imageUrl: "https://i.ytimg.com/vi/59al36qfnU4/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/59al36qfnU4?rel=0",
    sourceUrl: "https://www-healthline-com.translate.goog/health/fitness-exercise/at-home-workouts?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
    block: "Biblioteca extra",
    focus: "Mobilidade dinamica",
    rest: "20s",
    sets: 3,
    reps: "30-40s",
    workSeconds: 35,
    restSeconds: 20,
    loadHint: "Peso corporal com respiracao fluida",
    steps: [
      "Comece em prancha alta com maos firmes no chao.",
      "Empurre o quadril para cima levando o corpo ao cachorro olhando para baixo.",
      "Volte para a prancha sem colapsar a lombar.",
      "Repita em ritmo constante com respiracao controlada.",
    ],
    tips: [
      "Empurre o chao para longe durante todo o movimento.",
      "Mantenha costelas encaixadas na prancha.",
      "Excelente para aquecer ombros e posterior.",
    ],
  },
  {
    id: "farmer-walk",
    name: "Farmer walk com halteres",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 30-45s",
    equipment: "2 halteres",
    stimulus: "Pegada, trapezio, core e condicionamento",
    description: "Exercicio classico da lista de melhores movimentos com halter para construir pegada forte e estabilidade global.",
    imageUrl: "https://i.ytimg.com/vi/1uOs1hP3u4A/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/1uOs1hP3u4A?rel=0",
    sourceUrl: "https://www-menshealth-com.translate.goog/uk/building-muscle/a755117/the-10-best-dumbbell-exercises/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true",
    block: "Biblioteca extra",
    focus: "Pegada e core",
    rest: "45s",
    sets: 3,
    reps: "30-45s",
    workSeconds: 40,
    restSeconds: 45,
    loadHint: "2 halteres pesados com postura alta",
    steps: [
      "Pegue os halteres ao lado do corpo e fique alto.",
      "Caminhe em linha reta com passos curtos e firmes.",
      "Mantenha ombros para baixo e abdomen travado.",
      "Pare com controle e reorganize antes da proxima volta.",
    ],
    tips: [
      "Nao deixe os ombros subirem em direcao as orelhas.",
      "Pense em crescer para cima enquanto caminha.",
      "Otimo finalizador para forca e condicionamento.",
    ],
  },
  {
    id: "zottman-curl",
    name: "Rosca Zottman com halteres",
    goal: "back-shoulders",
    level: "intermediate",
    duration: "3 x 10-12",
    equipment: "2 halteres",
    stimulus: "Biceps, antebraco e controle de pegada",
    description: "Entrou da selecao de halteres por ser uma variacao rica para biceps e antebraco no mesmo movimento.",
    imageUrl: "https://i.ytimg.com/vi/5Go_uOTnFl0/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/5Go_uOTnFl0?rel=0",
    sourceUrl: "https://www-menshealth-com.translate.goog/uk/building-muscle/a755117/the-10-best-dumbbell-exercises/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true",
    block: "Biblioteca extra",
    focus: "Biceps e antebraco",
    rest: "35s",
    sets: 3,
    reps: "10-12",
    workSeconds: 35,
    restSeconds: 35,
    loadHint: "Carga moderada com descida controlada",
    steps: [
      "Suba os halteres como em uma rosca tradicional com palmas para cima.",
      "No topo, gire as maos para a pegada pronada.",
      "Desca lentamente com as palmas viradas para baixo.",
      "Gire novamente embaixo e reinicie a repeticao.",
    ],
    tips: [
      "Nao balance o tronco para subir a carga.",
      "A descida pronada e a parte mais importante.",
      "Use menos peso e mais controle.",
    ],
  },
  {
    id: "dumbbell-chest-fly",
    name: "Crucifixo com halteres",
    goal: "push-core",
    level: "intermediate",
    duration: "3 x 10-12",
    equipment: "2 halteres + banco ou chao",
    stimulus: "Peitoral e controle de amplitude",
    description: "Adicionado da lista da Hydrow para ampliar as opcoes de peito com halter e variar o estimulo de abertura.",
    imageUrl: "https://i.ytimg.com/vi/rk8YayRoTRQ/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/rk8YayRoTRQ?rel=0",
    sourceUrl: "https://hydrow.com/blog/the-26-best-dumbbell-workouts-at-home/",
    block: "Biblioteca extra",
    focus: "Peitoral",
    rest: "40s",
    sets: 3,
    reps: "10-12",
    workSeconds: 40,
    restSeconds: 40,
    loadHint: "Carga leve a moderada com grande controle",
    steps: [
      "Deite com halteres acima do peito e cotovelos levemente dobrados.",
      "Abra os bracos em arco ate sentir o peitoral alongar.",
      "Feche o movimento como se fosse abracar um barril.",
      "Pare antes de perder controle ou conforto no ombro.",
    ],
    tips: [
      "Nao transforme em press no final da subida.",
      "Amplitude confortavel vale mais do que descer demais.",
      "Mantenha as escapas apoiadas e o peito aberto.",
    ],
  },
  {
    id: "turkish-get-up",
    name: "Turkish get-up com halter",
    goal: "push-core",
    level: "advanced",
    duration: "3 x 4-6 por lado",
    equipment: "1 halter",
    stimulus: "Core, ombro, estabilidade e coordenacao",
    description: "Movimento completo da lista da Hydrow para quem quer estabilidade, controle de tronco e forca integrada.",
    imageUrl: "https://i.ytimg.com/vi/saYKvqSscuY/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/saYKvqSscuY?rel=0",
    sourceUrl: "https://hydrow.com/blog/the-26-best-dumbbell-workouts-at-home/",
    block: "Biblioteca extra",
    focus: "Estabilidade total",
    rest: "45s",
    sets: 3,
    reps: "4-6 por lado",
    workSeconds: 45,
    restSeconds: 45,
    loadHint: "1 halter leve a moderado para controle",
    steps: [
      "Comece deitado com um halter estendido acima do ombro.",
      "Suba por etapas: cotovelo, mao, quadril alto, joelho, meio-ajoelhado e em pe.",
      "Desca pelo mesmo caminho mantendo o olhar no halter.",
      "Repita todas as repeticoes antes de trocar de lado.",
    ],
    tips: [
      "Nao tenha pressa; cada etapa precisa ficar solida.",
      "Se for novo no exercicio, pratique sem carga antes.",
      "Mantenha o punho neutro e o ombro firme.",
    ],
  },
  {
    id: "triceps-kickback",
    name: "Triceps kickback com halteres",
    goal: "push-core",
    level: "beginner",
    duration: "3 x 12-15",
    equipment: "2 halteres leves",
    stimulus: "Triceps e controle de cotovelo",
    description: "Boa opcao da lista da Hydrow para complementar os movimentos de peito e dar mais volume aos bracos em casa.",
    imageUrl: "https://i.ytimg.com/vi/WhBxKbe1-NU/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/WhBxKbe1-NU?rel=0",
    sourceUrl: "https://hydrow.com/blog/the-26-best-dumbbell-workouts-at-home/",
    block: "Biblioteca extra",
    focus: "Triceps",
    rest: "30s",
    sets: 3,
    reps: "12-15",
    workSeconds: 35,
    restSeconds: 30,
    loadHint: "Carga leve com extensao completa do cotovelo",
    steps: [
      "Incline o tronco com joelhos levemente dobrados.",
      "Puxe os cotovelos para tras e mantenha-os fixos ao lado do corpo.",
      "Estenda os antebracos para tras ate contrair o triceps.",
      "Volte devagar sem perder a posicao do cotovelo.",
    ],
    tips: [
      "Evite balancar o ombro para ajudar o movimento.",
      "Pense em travar o cotovelo no ar.",
      "Menos carga costuma melhorar muito a forma.",
    ],
  },
  {
    id: "standing-pec-stretch",
    name: "Alongamento de peitoral na parede",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 30s por lado",
    equipment: "Parede ou portal",
    stimulus: "Peitoral e ombro anterior",
    description: "Alongamento inspirado no guia de alongamento para abrir o peito e aliviar rigidez depois de presses e flexoes.",
    imageUrl: "https://i.ytimg.com/vi/yx8nPhe6zRE/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/yx8nPhe6zRE?rel=0",
    sourceUrl: "https://treinomestre.com.br/alongamento/",
    block: "Biblioteca extra",
    focus: "Peito e ombros",
    rest: "15s",
    sets: 2,
    reps: "30s por lado",
    workSeconds: 30,
    restSeconds: 15,
    loadHint: "Sem carga, com respiracao lenta",
    steps: [
      "Apoie o antebraco em uma parede ou portal com o cotovelo na altura do ombro.",
      "Gire levemente o tronco para o lado oposto ate sentir alongar o peitoral.",
      "Respire fundo sem forcar o ombro.",
      "Troque o lado apos o tempo.",
    ],
    tips: [
      "Nao empurre agressivamente a articulacao.",
      "Pequena rotacao ja costuma ser suficiente.",
      "Funciona muito bem no fim do treino de peito.",
    ],
  },
  {
    id: "standing-quadriceps-stretch",
    name: "Alongamento em pe para quadriceps",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 30s por lado",
    equipment: "Sem equipamento",
    stimulus: "Quadriceps e flexor de quadril",
    description: "Versao simples do guia de alongamentos para soltar a frente da coxa depois de agachamentos, avancos e corridas.",
    imageUrl: "https://i.ytimg.com/vi/zi5__zBRzYc/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/zi5__zBRzYc?rel=0",
    sourceUrl: "https://treinomestre.com.br/alongamento/",
    block: "Biblioteca extra",
    focus: "Quadriceps",
    rest: "15s",
    sets: 2,
    reps: "30s por lado",
    workSeconds: 30,
    restSeconds: 15,
    loadHint: "Sem carga, com quadril encaixado",
    steps: [
      "Fique em pe e segure um pe atras do corpo com a mao do mesmo lado.",
      "Aproxime o calcanhar do gluteo sem abrir o joelho para fora.",
      "Mantenha o quadril encaixado e o tronco alto.",
      "Troque o lado apos o tempo.",
    ],
    tips: [
      "Use apoio na parede se precisar de equilibrio.",
      "Nao arqueie a lombar para puxar mais.",
      "Contrair o gluteo ajuda a melhorar o alongamento.",
    ],
  },
  {
    id: "seated-hamstring-stretch",
    name: "Alongamento sentado para posterior",
    goal: "mobility",
    level: "beginner",
    duration: "2 x 30-40s",
    equipment: "Sem equipamento",
    stimulus: "Posterior de coxa e lombar",
    description: "Alongamento do guia do Treino Mestre para melhorar mobilidade de posterior e aliviar tensao na parte de tras das pernas.",
    imageUrl: "https://i.ytimg.com/vi/aJvfeuu71gw/hqdefault.jpg",
    videoEmbedUrl: "https://www.youtube.com/embed/aJvfeuu71gw?rel=0",
    sourceUrl: "https://treinomestre.com.br/alongamento/",
    block: "Biblioteca extra",
    focus: "Posterior de coxa",
    rest: "15s",
    sets: 2,
    reps: "30-40s",
    workSeconds: 35,
    restSeconds: 15,
    loadHint: "Sem carga, respirando e relaxando a cada exalacao",
    steps: [
      "Sente no chao com as pernas estendidas a frente.",
      "Incline o tronco na direcao dos pes mantendo a coluna longa.",
      "Pare no ponto em que sentir o posterior alongar sem dor.",
      "Respire fundo e aprofunde aos poucos se houver espaco.",
    ],
    tips: [
      "Evite puxar o pescoco ou curvar demais os ombros.",
      "Flexione levemente os joelhos se estiver muito travado.",
      "Use a exalacao para ganhar amplitude com calma.",
    ],
  },
];

const featuredRoutine = {
  title: "Treino diario de 30 min com halteres, boxe e core",
  subtitle: "Rotina masculina completa com foco em costas e ombros, mais flexao, abdominal, reflexo e shadowboxing para condicionar o corpo inteiro.",
  duration: "30-32 min",
  equipment: "Halteres opcionais + apoio firme + espaco livre",
  audience: "Homem",
  exerciseIds: [
    "shadow-boxing",
    "one-arm-row",
    "standing-shoulder-press",
    "rear-delt-fly",
    "boxing-reflex",
    "goblet-squat",
    "dumbbell-rdl",
    "push-up",
    "ab-crunch",
  ],
  split: [
    "4 min de boxe tecnico e mobilidade dinamica",
    "10 a 12 min em costas e ombros com halteres",
    "6 a 8 min de reflexo, flexao e core sem equipamento",
    "8 a 10 min para pernas, posterior e fechamento da sessao",
  ],
};

const exerciseLookup = Object.fromEntries(exerciseLibrary.map((exercise) => [exercise.id, exercise]));
const plannerReferenceLibrary = {
  strength: ["goblet-squat", "push-up", "one-arm-row", "standing-shoulder-press"],
  cardio: ["shadow-boxing", "boxing-footwork-pivot", "boxing-reflex", "jab-cross-base"],
  mobility: ["worlds-greatest-stretch", "couch-stretch", "cobra-stretch", "boxing-footwork-pivot"],
  recovery: ["worlds-greatest-stretch", "couch-stretch", "cobra-stretch", "boxing-footwork-pivot"],
};

const boxingPromptBanks = {
  shadow: [
    {
      title: "Jab e sair",
      description: "Solte um jab limpo, de um passo curto para fora da linha e volte para a guarda.",
      voice: "Jab e sair.",
    },
    {
      title: "Jab, direto",
      description: "Entre com jab, encaixe o direto com giro de quadril e recupere a base sem cruzar os pes.",
      voice: "Jab, direto.",
    },
    {
      title: "Jab, jab, direto",
      description: "Mantenha ritmo leve nos dois jabs, acelere o direto e retorne rapido com o queixo protegido.",
      voice: "Jab, jab, direto.",
    },
    {
      title: "Jab, slip, direto",
      description: "Ataque com jab, esquive para fora da linha e devolva o direto equilibrado.",
      voice: "Jab, esquiva, direto.",
    },
    {
      title: "Direto e pivot",
      description: "Solte o direto e gire em pivot curto para sair do centro, com ombros relaxados.",
      voice: "Direto e pivot.",
    },
  ],
  reflex: [
    {
      title: "Slip esquerda",
      description: "Desloque o tronco para a esquerda com joelhos soltos e volte imediatamente para a guarda.",
      voice: "Esquiva esquerda.",
    },
    {
      title: "Slip direita",
      description: "Saia da linha para a direita sem inclinar demais a cintura e recupere o centro rapido.",
      voice: "Esquiva direita.",
    },
    {
      title: "Duck",
      description: "Flexione os joelhos, passe por baixo do golpe imaginario e suba em base forte.",
      voice: "Duck.",
    },
    {
      title: "Jab rapido",
      description: "Responda com um jab reto, toque e volte para a guarda sem abrir o cotovelo.",
      voice: "Jab.",
    },
    {
      title: "Direto rapido",
      description: "Use a rotacao curta do quadril, estenda o direto e puxe a mao de volta rapido.",
      voice: "Direto.",
    },
    {
      title: "Jab e slip",
      description: "Marque o jab e ja saia da linha com uma esquiva curta, mantendo os olhos para frente.",
      voice: "Jab e esquiva.",
    },
  ],
};

const workoutTemplates = {
  strength: {
    beginner: {
      title: "Base de forca com ritmo estavel",
      equipment: "Sem equipamento",
      highlights: [
        { label: "Prioridade", value: "Base de pernas e empurrar" },
        { label: "Estilo", value: "Controle de tempo e postura" },
        { label: "Pausa", value: "40s entre blocos" },
      ],
      blocks: [
        {
          title: "Ativacao",
          length: 5,
          items: ["Respiracao com bracos acima", "Agachamento curto", "Mobilidade de quadril"],
        },
        {
          title: "Bloco principal",
          length: 12,
          items: ["Agachamento controlado 3x12", "Flexao inclinada 3x10", "Prancha curta 3x30s"],
        },
        {
          title: "Finalizador",
          length: 8,
          items: ["Afundo alternado 2x10", "Ponte de gluteo 2x15", "Hollow hold 2x20s"],
        },
        {
          title: "Desaceleracao",
          length: 5,
          items: ["Alongamento de flexores", "Rotacao toracica", "Respiracao nasal"],
        },
      ],
    },
    intermediate: {
      title: "Forca total com mais densidade",
      equipment: "Peso corporal",
      highlights: [
        { label: "Prioridade", value: "Corpo inteiro" },
        { label: "Estilo", value: "Circuito com controle" },
        { label: "Pausa", value: "30s entre exercicios" },
      ],
      blocks: [
        {
          title: "Warm-up",
          length: 6,
          items: ["Mobilidade de tornozelo", "Agachamento com pausa", "Escapulas no solo"],
        },
        {
          title: "Circuito A",
          length: 12,
          items: ["Flexao com tempo 4x8", "Afundo alternado 4x10", "Prancha com toque 4x20"],
        },
        {
          title: "Circuito B",
          length: 10,
          items: ["Agachamento pulsado 3x15", "Pike push-up 3x8", "Dead bug 3x12"],
        },
        {
          title: "Cooldown",
          length: 5,
          items: ["Alongamento posterior", "Rotacao toracica", "Respiracao 4-6"],
        },
      ],
    },
    advanced: {
      title: "Forca metabolica de alta exigencia",
      equipment: "Peso corporal",
      highlights: [
        { label: "Prioridade", value: "Densidade e unilateral" },
        { label: "Estilo", value: "Blocos cronometrados" },
        { label: "Pausa", value: "20s entre rounds" },
      ],
      blocks: [
        {
          title: "Prime",
          length: 6,
          items: ["Mobilidade dinamica", "Bear hover", "Ativacao de ombros"],
        },
        {
          title: "EMOM 1",
          length: 12,
          items: ["Flexao explosiva", "Agachamento com salto", "Prancha lateral"],
        },
        {
          title: "EMOM 2",
          length: 12,
          items: ["Afundo alternado rapido", "Pike push-up", "Hollow rocks"],
        },
        {
          title: "Reset",
          length: 5,
          items: ["Alongamento de quadril", "Pernas na parede", "Respiracao profunda"],
        },
      ],
    },
  },
  cardio: {
    beginner: {
      title: "Cardio progressivo com baixo impacto",
      equipment: "Sem equipamento",
      highlights: [
        { label: "Prioridade", value: "Frequencia cardiaca constante" },
        { label: "Estilo", value: "Intervalos leves" },
        { label: "Pausa", value: "30s ativos" },
      ],
      blocks: [
        {
          title: "Entrada",
          length: 5,
          items: ["Marcha no lugar", "Mobilidade de ombros", "Respiracao nasal"],
        },
        {
          title: "Cardio base",
          length: 12,
          items: ["Polichinelo baixo impacto", "Burpee com passo", "Corrida estacionaria leve"],
        },
        {
          title: "Core",
          length: 8,
          items: ["Dead bug", "Prancha alta", "Elevar joelhos sentado"],
        },
        {
          title: "Saida",
          length: 5,
          items: ["Alongamento de panturrilha", "Flexao lateral", "Respiracao lenta"],
        },
      ],
    },
    intermediate: {
      title: "Condicionamento rapido e eficiente",
      equipment: "Sem equipamento",
      highlights: [
        { label: "Prioridade", value: "Potencia aerobica" },
        { label: "Estilo", value: "HIIT enxuto" },
        { label: "Pausa", value: "20s entre tiros" },
      ],
      blocks: [
        {
          title: "Aquecimento",
          length: 6,
          items: ["Skips leves", "Mobilidade de quadril", "Agachamento dinamico"],
        },
        {
          title: "Tiros 1",
          length: 10,
          items: ["Joelhos altos", "Mountain climber", "Jumping jack"],
        },
        {
          title: "Tiros 2",
          length: 10,
          items: ["Burpee com passo", "Skater alternado", "Prancha com joelhos"],
        },
        {
          title: "Downshift",
          length: 4,
          items: ["Caminhada no lugar", "Respiracao profunda", "Mobilidade toracica"],
        },
      ],
    },
    advanced: {
      title: "Cardio explosivo em blocos curtos",
      equipment: "Peso corporal",
      highlights: [
        { label: "Prioridade", value: "Alta intensidade" },
        { label: "Estilo", value: "Sprints em circuito" },
        { label: "Pausa", value: "15s entre tiros" },
      ],
      blocks: [
        {
          title: "Primer",
          length: 6,
          items: ["Mobilidade dinamica", "Saltos leves", "Ativacao de core"],
        },
        {
          title: "Sprint set",
          length: 12,
          items: ["Burpee completo", "Mountain climber rapido", "Agachamento com salto"],
        },
        {
          title: "Density set",
          length: 10,
          items: ["Skater amplo", "Corrida parada intensa", "Bear crawl curto"],
        },
        {
          title: "Cooldown",
          length: 4,
          items: ["Respiracao longa", "Alongamento de quadril", "Soltar panturrilhas"],
        },
      ],
    },
  },
  mobility: {
    beginner: {
      title: "Mobilidade essencial para o dia a dia",
      equipment: "Colchonete opcional",
      highlights: [
        { label: "Prioridade", value: "Quadril, coluna e respiracao" },
        { label: "Estilo", value: "Fluxo continuo" },
        { label: "Pausa", value: "Sem pressa" },
      ],
      blocks: [
        {
          title: "Respirar e soltar",
          length: 5,
          items: ["Respiracao 90-90", "Cat-cow", "Rotacao cervical leve"],
        },
        {
          title: "Mobilidade base",
          length: 10,
          items: ["World's greatest stretch", "Rotacao toracica", "Mobilidade de tornozelo"],
        },
        {
          title: "Core tecnico",
          length: 8,
          items: ["Dead bug", "Ponte de gluteo", "Bird-dog"],
        },
        {
          title: "Fechamento",
          length: 5,
          items: ["Alongamento de posterior", "Pernas elevadas", "Respiracao lenta"],
        },
      ],
    },
    intermediate: {
      title: "Mobilidade ativa com estabilidade",
      equipment: "Colchonete",
      highlights: [
        { label: "Prioridade", value: "Amplitude util" },
        { label: "Estilo", value: "Fluxo guiado" },
        { label: "Pausa", value: "Transicoes suaves" },
      ],
      blocks: [
        {
          title: "Reset",
          length: 5,
          items: ["Respiracao costal", "Cat-cow", "Ponte escapular"],
        },
        {
          title: "Flow A",
          length: 10,
          items: ["World's greatest stretch", "Lunge com alcance", "Rotacao toracica"],
        },
        {
          title: "Flow B",
          length: 10,
          items: ["Dead bug", "Bear hover", "Prancha lateral curta"],
        },
        {
          title: "Soltar",
          length: 5,
          items: ["Alongamento de gluteo", "Alongamento de peitoral", "Respiracao 4-6"],
        },
      ],
    },
    advanced: {
      title: "Fluxo avancado de mobilidade e core",
      equipment: "Colchonete",
      highlights: [
        { label: "Prioridade", value: "Controle em amplitude" },
        { label: "Estilo", value: "Sequencia continua" },
        { label: "Pausa", value: "Somente quando necessario" },
      ],
      blocks: [
        {
          title: "Breath prep",
          length: 5,
          items: ["Respiracao 90-90", "Prancha alta curta", "Shoulder taps"],
        },
        {
          title: "Flow 1",
          length: 12,
          items: ["Lunge com rotacao", "Inchworm controlado", "Cossack squat assistido"],
        },
        {
          title: "Flow 2",
          length: 10,
          items: ["Dead bug avancado", "Prancha lateral com alcance", "Bear crawl tecnico"],
        },
        {
          title: "Reset final",
          length: 5,
          items: ["Pigeon stretch", "Torcao supina", "Respiracao nasal"],
        },
      ],
    },
  },
};

const weekDays = [
  { short: "Seg", focus: "strength" },
  { short: "Ter", focus: "mobility" },
  { short: "Qua", focus: "cardio" },
  { short: "Qui", focus: "strength" },
  { short: "Sex", focus: "mobility" },
  { short: "Sab", focus: "cardio" },
  { short: "Dom", focus: "recovery" },
];

const defaultState = {
  goal: "strength",
  level: "intermediate",
  duration: 30,
  energy: "steady",
  activePreset: "",
  libraryFilter: "all",
  search: "",
  completedSessions: [],
};

const state = loadState();
const timerState = {
  totalSeconds: 0,
  remainingSeconds: 0,
  activeBlockIndex: 0,
  isRunning: false,
  intervalId: null,
  blockDurations: [],
  signature: "",
};

const heroStats = document.querySelector("#heroStats");
const weeklyPlan = document.querySelector("#weeklyPlan");
const appKpiGrid = document.querySelector("#appKpiGrid");
const weeklyTargetLabel = document.querySelector("#weeklyTargetLabel");
const startRoutineHeroButton = document.querySelector("#startRoutineHero");
const presetGrid = document.querySelector("#presetGrid");
const goalControls = document.querySelector("#goalControls");
const levelControls = document.querySelector("#levelControls");
const durationRange = document.querySelector("#durationRange");
const durationLabel = document.querySelector("#durationLabel");
const energyControls = document.querySelector("#energyControls");
const focusBand = document.querySelector("#focusBand");
const sessionTitle = document.querySelector("#sessionTitle");
const sessionMeta = document.querySelector("#sessionMeta");
const sessionBlocks = document.querySelector("#sessionBlocks");
const timerDisplay = document.querySelector("#timerDisplay");
const timerHint = document.querySelector("#timerHint");
const toggleTimerButton = document.querySelector("#toggleTimer");
const resetTimerButton = document.querySelector("#resetTimer");
const nextBlockButton = document.querySelector("#nextBlock");
const coachTitle = document.querySelector("#coachTitle");
const coachText = document.querySelector("#coachText");
const libraryFilterControls = document.querySelector("#libraryFilterControls");
const exerciseSearch = document.querySelector("#exerciseSearch");
const exerciseGrid = document.querySelector("#exerciseGrid");
const startGuidedWorkoutButton = document.querySelector("#startGuidedWorkout");
const guidedModal = document.querySelector("#guidedModal");
const guidedBackdrop = document.querySelector("#guidedBackdrop");
const guidedCloseButton = document.querySelector("#guidedClose");
const guidedStepLabel = document.querySelector("#guidedStepLabel");
const guidedProgressFill = document.querySelector("#guidedProgressFill");
const guidedPhaseLabel = document.querySelector("#guidedPhaseLabel");
const guidedSetLabel = document.querySelector("#guidedSetLabel");
const guidedPhaseTime = document.querySelector("#guidedPhaseTime");
const guidedPhaseHint = document.querySelector("#guidedPhaseHint");
const guidedSessionTime = document.querySelector("#guidedSessionTime");
const guidedSessionMeta = document.querySelector("#guidedSessionMeta");
const guidedNextUp = document.querySelector("#guidedNextUp");
const guidedVoiceStatus = document.querySelector("#guidedVoiceStatus");
const guidedPromptPanel = document.querySelector("#guidedPromptPanel");
const guidedPromptCurrent = document.querySelector("#guidedPromptCurrent");
const guidedPromptDescription = document.querySelector("#guidedPromptDescription");
const guidedBlock = document.querySelector("#guidedBlock");
const guidedTitle = document.querySelector("#guidedTitle");
const guidedDescription = document.querySelector("#guidedDescription");
const guidedMetrics = document.querySelector("#guidedMetrics");
const guidedSteps = document.querySelector("#guidedSteps");
const guidedTips = document.querySelector("#guidedTips");
const guidedImage = document.querySelector("#guidedImage");
const guidedVideo = document.querySelector("#guidedVideo");
const guidedPrevButton = document.querySelector("#guidedPrev");
const guidedToggleSessionButton = document.querySelector("#guidedToggleSession");
const guidedSkipPhaseButton = document.querySelector("#guidedSkipPhase");
const guidedRestartSessionButton = document.querySelector("#guidedRestartSession");
const guidedVoiceToggleButton = document.querySelector("#guidedVoiceToggle");
const guidedNextButton = document.querySelector("#guidedNext");
const guidedSourceLink = document.querySelector("#guidedSource");
const consistencyTitle = document.querySelector("#consistencyTitle");
const consistencyBadge = document.querySelector("#consistencyBadge");
const consistencyFill = document.querySelector("#consistencyFill");
const weekBars = document.querySelector("#weekBars");
const progressOverview = document.querySelector("#progressOverview");
const historyList = document.querySelector("#historyList");
const completeSessionButton = document.querySelector("#completeSession");
const shuffleWorkoutButton = document.querySelector("#shuffleWorkout");
const installAppButton = document.querySelector("#installApp");
const resetAppButton = document.querySelector("#resetApp");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const navSections = Array.from(document.querySelectorAll("main section[id]"));
let deferredInstallPrompt = null;
const guidedWorkoutState = {
  exerciseIds: [...featuredRoutine.exerciseIds],
  customExercises: null,
  sessionKind: "routine",
  sessionTitle: featuredRoutine.title,
  sessionEquipment: featuredRoutine.equipment,
  currentIndex: 0,
  isOpen: false,
  currentSet: 1,
  totalSetsCompleted: 0,
  sessionElapsed: 0,
  phaseRemaining: 0,
  phase: "idle",
  phaseContext: "exercise",
  sessionIntervalId: null,
  isRunning: false,
  voiceEnabled: false,
  promptIndex: 0,
  promptTickCounter: 0,
};

durationRange.value = String(state.duration);
exerciseSearch.value = state.search;

renderControls();
renderPresets();
renderDashboard();
renderWorkout();
renderLibrary();
renderProgress();
syncStandaloneMode();
registerInstallPrompt();
registerServiceWorker();
setupSectionNavigation();

goalControls.addEventListener("click", handleSegmentClick("goal", goals));
levelControls.addEventListener("click", handleSegmentClick("level", levels));
libraryFilterControls.addEventListener("click", handleSegmentClick("libraryFilter", libraryFilters));
presetGrid.addEventListener("click", handlePresetSelection);
exerciseGrid.addEventListener("click", handleExerciseCardAction);
startRoutineHeroButton.addEventListener("click", () => openGuidedWorkout());
startGuidedWorkoutButton.addEventListener("click", () => openGuidedWorkout());
guidedBackdrop.addEventListener("click", closeGuidedWorkout);
guidedCloseButton.addEventListener("click", closeGuidedWorkout);
guidedPrevButton.addEventListener("click", () => moveGuidedWorkout(-1));
guidedNextButton.addEventListener("click", () => moveGuidedWorkout(1));
guidedToggleSessionButton.addEventListener("click", toggleGuidedSession);
guidedSkipPhaseButton.addEventListener("click", advanceGuidedPhase);
guidedRestartSessionButton.addEventListener("click", restartGuidedSession);
guidedVoiceToggleButton.addEventListener("click", toggleGuidedVoice);
if (installAppButton) {
  installAppButton.addEventListener("click", handleInstallApp);
}
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && guidedWorkoutState.isOpen) {
    closeGuidedWorkout();
  }
});

durationRange.addEventListener("input", (event) => {
  state.duration = Number(event.target.value);
  state.activePreset = "";
  persistState();
  renderPresets();
  renderWorkout();
});

energyControls.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) {
    return;
  }

  state.energy = button.dataset.id;
  state.activePreset = "";
  persistState();
  renderPresets();
  renderControls();
  renderWorkout();
});

exerciseSearch.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  persistState();
  renderLibrary();
});

completeSessionButton.addEventListener("click", () => {
  const template = getWorkoutTemplate();
  const appliedGoal = state.energy === "recover" ? "mobility" : state.goal;
  state.completedSessions.unshift({
    id: Date.now(),
    goal: appliedGoal,
    level: state.level,
    duration: state.duration,
    energy: state.energy,
    title: template.title,
    completedAt: new Date().toISOString(),
  });
  state.completedSessions = state.completedSessions.slice(0, 12);
  resetTimer();
  persistState();
  renderDashboard();
  renderWorkout();
  renderProgress();
});

shuffleWorkoutButton.addEventListener("click", () => {
  cycleEnergy();
  cycleGoal();
  state.activePreset = "";
  renderControls();
  renderPresets();
  renderDashboard();
  renderWorkout();
  renderLibrary();
  renderProgress();
  persistState();
});

resetAppButton.addEventListener("click", () => {
  Object.assign(state, structuredClone(defaultState));
  durationRange.value = String(state.duration);
  exerciseSearch.value = "";
  resetTimer();
  persistState();
  renderPresets();
  renderControls();
  renderDashboard();
  renderWorkout();
  renderLibrary();
  renderProgress();
});

toggleTimerButton.addEventListener("click", openPlannerGuidedWorkout);

resetTimerButton.addEventListener("click", () => {
  resetTimer();
  renderWorkout();
});

nextBlockButton.addEventListener("click", () => {
  goToNextBlock();
});

sessionBlocks.addEventListener("click", (event) => {
  const button = event.target.closest(".block-toggle");
  if (!button) {
    return;
  }

  button.classList.toggle("active");
  button.textContent = button.classList.contains("active")
    ? "Bloco concluido"
    : button.dataset.defaultLabel;
});



function setupSectionNavigation() {
  if (!navLinks.length || !navSections.length) {
    return;
  }

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("is-active", targetId === sectionId);
    });
  };

  const initialHash = window.location.hash.replace("#", "");
  setActiveLink(initialHash || navSections[0].id);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleSections.length) {
        return;
      }

      const activeSection = visibleSections[0].target.id;
      setActiveLink(activeSection);
    },
    {
      rootMargin: "-42% 0px -48% 0px",
      threshold: [0.25, 0.4, 0.55],
    }
  );

  navSections.forEach((section) => observer.observe(section));

  window.addEventListener("hashchange", () => {
    const hashSection = window.location.hash.replace("#", "");
    if (hashSection) {
      setActiveLink(hashSection);
    }
  });
}

function renderControls() {
  goalControls.innerHTML = createButtons(goals, state.goal);
  levelControls.innerHTML = createButtons(levels, state.level);
  libraryFilterControls.innerHTML = createButtons(libraryFilters, state.libraryFilter);
  durationLabel.textContent = `${state.duration} min`;
  energyControls.innerHTML = energies
    .map(
      (item) => `
        <button class="energy-button ${item.id === state.energy ? "active" : ""}" type="button" data-id="${item.id}">
          <strong>${item.label}</strong>
          <small>${item.description}</small>
        </button>
      `
    )
    .join("");
}

function renderPresets() {
  presetGrid.innerHTML = presets
    .map(
      (preset, index) => `
        <article
          class="preset-card fade-in ${preset.id === state.activePreset ? "active" : ""}"
          style="animation-delay:${index * 60}ms"
          data-id="${preset.id}"
        >
          <span class="label">${preset.label}</span>
          <h3>${preset.title}</h3>
          <p>${preset.description}</p>
          <div class="exercise-meta">
            <span class="tag goal">${translateGoal(preset.goal)}</span>
            <span class="tag level">${translateLevel(preset.level)}</span>
            <span class="label">${preset.duration} min</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDashboard() {
  const completedThisWeek = getCompletedThisWeek();
  const weeklyTarget = 4;
  const streak = calculateStreak();
  const balance = getBalanceLabel();

  weeklyTargetLabel.textContent = `${weeklyTarget} sessoes`;

  if (appKpiGrid) {
    appKpiGrid.innerHTML = [
      { label: "Pronto em", value: `${state.duration} min` },
      { label: "Energia", value: energies.find((item) => item.id === state.energy)?.label ?? "Ritmo estavel" },
      { label: "Streak", value: `${streak} dias` },
    ]
      .map((item) => `
        <article class="app-kpi">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `)
      .join("");
  }

  heroStats.innerHTML = [
    {
      label: "Sessoes nesta semana",
      value: `${completedThisWeek}/${weeklyTarget}`,
    },
    {
      label: "Sequencia ativa",
      value: `${streak} dias`,
    },
    {
      label: "Foco predominante",
      value: balance,
    },
  ]
    .map(
      (item, index) => `
        <article class="stat-card fade-in" style="animation-delay:${index * 80}ms">
          <span class="label">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");

  weeklyPlan.innerHTML = weekDays
    .map((day, index) => {
      const status = getDayStatus(index);
      const classes = ["plan-day"];
      if (status === "today") {
        classes.push("active");
      }
      if (status === "done") {
        classes.push("done");
      }

      return `
        <article class="${classes.join(" ")} fade-in" style="animation-delay:${index * 50}ms">
          <strong>${day.short}</strong>
          <span class="label">${translateGoal(day.focus)}</span>
          <p>${status === "done" ? "Concluido" : status === "today" ? "Hoje" : "Planejado"}</p>
        </article>
      `;
    })
    .join("");
}

function renderWorkout() {
  const { template, adjustedBlocks, totalTime } = getAdjustedWorkoutPlan();
  const energyLabel = energies.find((item) => item.id === state.energy)?.label ?? "";
  const workoutSignature = `${template.title}-${adjustedBlocks.map((block) => `${block.title}-${block.adjustedLength}`).join("|")}`;
  const shouldResetTimer =
    !timerState.isRunning ||
    timerState.totalSeconds !== totalTime * 60 ||
    timerState.blockDurations.length !== adjustedBlocks.length ||
    timerState.signature !== workoutSignature;

  if (shouldResetTimer) {
    syncTimerWithWorkout(adjustedBlocks, totalTime, workoutSignature);
  } else {
    updateTimerHint(adjustedBlocks);
    updateTimerUI();
  }

  sessionTitle.textContent = template.title;
  sessionMeta.textContent = `${totalTime} min | ${translateLevel(state.level)} | ${template.equipment} | ${energyLabel}`;
  focusBand.innerHTML = template.highlights
    .map(
      (item, index) => `
        <div class="focus-chip fade-in" style="animation-delay:${index * 70}ms">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </div>
      `
    )
    .join("");

  sessionBlocks.innerHTML = adjustedBlocks
    .map(
      (block, index) => `
        <article
          class="block-card fade-in ${index === timerState.activeBlockIndex ? "active" : ""}"
          style="animation-delay:${index * 90}ms"
          data-block-index="${index}"
        >
          <span class="label">${block.adjustedLength} min</span>
          <h3>${block.title}</h3>
          <ul>
            ${block.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="block-footer">
            <span class="label">${suggestBlockNote(block.title)}</span>
            <button
              class="block-toggle"
              type="button"
              data-id="${block.title}"
              data-default-label="${index === 0 ? "Comecar" : "Marcar bloco"}"
            >
              ${index === 0 ? "Comecar" : "Marcar bloco"}
            </button>
          </div>
        </article>
      `
    )
    .join("");

  renderCoachCard(totalTime);
}

function getAdjustedWorkoutPlan() {
  const template = getWorkoutTemplate();
  const durationFactor = state.duration / 30;
  const adjustedBlocks = template.blocks.map((block) => ({
    ...block,
    adjustedLength: Math.max(4, Math.round(block.length * durationFactor)),
  }));
  const totalTime = adjustedBlocks.reduce((sum, block) => sum + block.adjustedLength, 0);
  const appliedGoal = state.energy === "recover" ? "mobility" : state.goal;

  return {
    template,
    adjustedBlocks,
    totalTime,
    appliedGoal,
  };
}

function renderLibrary() {
  const filteredExercises = exerciseLibrary.filter((exercise) => {
    const matchesFilter = state.libraryFilter === "all" || exercise.goal === state.libraryFilter;
    const haystack = `${exercise.name} ${exercise.description} ${exercise.stimulus} ${exercise.focus} ${exercise.block}`.toLowerCase();
    const matchesSearch = !state.search || haystack.includes(state.search);
    return matchesFilter && matchesSearch;
  });

  exerciseGrid.innerHTML = filteredExercises.length
    ? filteredExercises
        .map(
          (exercise, index) => `
            <article class="exercise-card fade-in" style="animation-delay:${index * 60}ms">
              <img src="${exercise.imageUrl}" alt="${exercise.name}">
              <div class="exercise-meta">
                <span class="tag goal">${translateGoal(exercise.goal)}</span>
                <span class="tag level">${translateLevel(exercise.level)}</span>
                <span class="label">${exercise.block}</span>
              </div>
              <h3>${exercise.name}</h3>
              <p>${exercise.description}</p>
              <div class="exercise-meta">
                <span class="label">${exercise.duration}</span>
                <span class="label">${exercise.equipment}</span>
              </div>
              <div class="exercise-meta">
                <span class="label">${exercise.stimulus}</span>
                <span class="label">Descanso ${exercise.rest}</span>
              </div>
              <div class="exercise-actions">
                <button class="secondary-button compact" type="button" data-action="view" data-id="${exercise.id}">
                  Ver execucao
                </button>
                <a class="ghost-button" href="${exercise.sourceUrl}" target="_blank" rel="noreferrer">
                  Abrir video
                </a>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">Nenhum exercicio encontrado com esse filtro. Tente outro foco ou termo de busca.</div>`;
}

function renderProgress() {
  const weeklyTarget = 4;
  const completedThisWeek = getCompletedThisWeek();
  const progress = Math.min(100, Math.round((completedThisWeek / weeklyTarget) * 100));
  const streak = calculateStreak();
  const balance = getBalanceLabel();
  const totalSessions = state.completedSessions.length;

  consistencyTitle.textContent = `${completedThisWeek} de ${weeklyTarget} sessoes concluidas`;
  consistencyBadge.textContent = `${progress}%`;
  consistencyFill.style.width = `${progress}%`;

  progressOverview.innerHTML = [
    {
      label: "Sequencia atual",
      value: `${streak} dia${streak === 1 ? "" : "s"}`,
    },
    {
      label: "Foco dominante",
      value: balance,
    },
    {
      label: "Sessoes salvas",
      value: `${totalSessions}`,
    },
  ]
    .map(
      (item) => `
        <article class="overview-card">
          <span class="label">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");

  weekBars.innerHTML = weekDays
    .map((day, index) => {
      const status = getDayStatus(index);
      return `
        <div class="week-day ${status}">
          <span>${day.short}</span>
          <strong>${status === "done" ? "OK" : status === "today" ? "Hoje" : "..."}</strong>
        </div>
      `;
    })
    .join("");

  historyList.innerHTML = state.completedSessions.length
    ? state.completedSessions
        .slice(0, 5)
        .map((session) => {
          const date = new Date(session.completedAt);
          const label = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
          });

          return `
            <article class="history-item">
              <div class="history-meta">
                <strong>${session.title}</strong>
                <span class="label">${label}</span>
              </div>
              <p>${translateGoal(session.goal)} | ${translateLevel(session.level)} | ${session.duration} min</p>
              <div class="history-tags">
                <span class="tag">${translateGoal(session.goal)}</span>
                <span class="tag">${translateLevel(session.level)}</span>
                <span class="tag">${session.duration} min</span>
              </div>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-state">Seu historico aparece aqui assim que voce concluir a primeira sessao.</div>`;
}

function handleExerciseCardAction(event) {
  const button = event.target.closest("[data-action='view']");
  if (!button) {
    return;
  }

  const exercise = exerciseLookup[button.dataset.id];
  if (!exercise) {
    return;
  }

  openGuidedWorkout({
    exerciseIds: [exercise.id],
    startIndex: 0,
    sessionKind: "exercise",
    sessionTitle: exercise.name,
    sessionEquipment: exercise.equipment,
  });
}

function openPlannerGuidedWorkout() {
  const plannerSession = buildPlannerGuidedSession();
  openGuidedWorkout({
    exercises: plannerSession.exercises,
    startIndex: 0,
    sessionKind: "planner",
    sessionTitle: plannerSession.title,
    sessionEquipment: plannerSession.equipment,
  });
}

function buildPlannerGuidedSession() {
  const { template, adjustedBlocks, totalTime, appliedGoal } = getAdjustedWorkoutPlan();

  return {
    title: template.title,
    equipment: template.equipment,
    totalTime,
    exercises: adjustedBlocks.map((block, index) => {
      const referenceExercise = pickPlannerReferenceExercise(appliedGoal, block, index);
      const pauseLabel = template.highlights[2]?.value ?? "20s entre blocos";

      return {
        ...referenceExercise,
        id: `planner-${appliedGoal}-${state.level}-${index}`,
        name: block.title,
        goal: appliedGoal,
        level: state.level,
        duration: `${block.adjustedLength} min`,
        equipment: template.equipment,
        stimulus: template.highlights.map((item) => item.value).join(" | "),
        description: `${template.title} em formato guiado. Este bloco trabalha ${block.items.join(", ").toLowerCase()}.`,
        block: `Planejador ${index + 1}`,
        focus: template.highlights[0]?.value ?? translateGoal(appliedGoal),
        rest: index < adjustedBlocks.length - 1 ? "20s" : "0s",
        sets: 1,
        reps: `${block.adjustedLength} min`,
        workSeconds: block.adjustedLength * 60,
        restSeconds: 20,
        loadHint: template.equipment,
        steps: block.items,
        tips: [
          suggestBlockNote(block.title),
          `Estilo do bloco: ${template.highlights[1]?.value ?? "Controle tecnico"}.`,
          `Pausa-base: ${pauseLabel}.`,
        ],
      };
    }),
  };
}

function pickPlannerReferenceExercise(goal, block, index) {
  const normalizedTitle = block.title.toLowerCase();

  if (
    normalizedTitle.includes("warm") ||
    normalizedTitle.includes("aquec") ||
    normalizedTitle.includes("ativ") ||
    normalizedTitle.includes("entrada")
  ) {
    return exerciseLookup[goal === "strength" ? "goblet-squat" : "shadow-boxing"] ?? exerciseLibrary[0];
  }

  if (
    normalizedTitle.includes("cool") ||
    normalizedTitle.includes("desac") ||
    normalizedTitle.includes("saida") ||
    normalizedTitle.includes("reset")
  ) {
    return exerciseLookup[goal === "strength" ? "ab-crunch" : "boxing-footwork-pivot"] ?? exerciseLibrary[0];
  }

  if (normalizedTitle.includes("final")) {
    return exerciseLookup[goal === "strength" ? "push-up" : "boxing-reflex"] ?? exerciseLibrary[0];
  }

  const references = plannerReferenceLibrary[goal] ?? plannerReferenceLibrary.strength;
  return exerciseLookup[references[index % references.length]] ?? exerciseLibrary[0];
}

function openGuidedWorkout(options = {}) {
  const customExercises = options.exercises?.length ? options.exercises : null;
  const exerciseIds = options.exerciseIds?.filter((id) => exerciseLookup[id]) ?? [...featuredRoutine.exerciseIds];
  guidedWorkoutState.customExercises = customExercises;
  guidedWorkoutState.exerciseIds = customExercises ? [] : exerciseIds.length ? exerciseIds : [...featuredRoutine.exerciseIds];
  guidedWorkoutState.sessionKind = options.sessionKind ?? "routine";
  guidedWorkoutState.sessionTitle = options.sessionTitle ?? featuredRoutine.title;
  guidedWorkoutState.sessionEquipment = options.sessionEquipment ?? featuredRoutine.equipment;
  guidedWorkoutState.currentIndex = Math.min(
    Math.max(options.startIndex ?? 0, 0),
    getGuidedExercises().length - 1
  );
  guidedWorkoutState.isOpen = true;
  guidedModal.classList.add("open");
  guidedModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  resetGuidedSessionState();
  renderGuidedWorkout();
}

function closeGuidedWorkout() {
  clearGuidedSessionInterval();
  stopGuidedSpeech();
  guidedWorkoutState.isOpen = false;
  guidedModal.classList.remove("open");
  guidedModal.setAttribute("aria-hidden", "true");
  guidedVideo.src = "";
  guidedVideo.dataset.exerciseId = "";
  guidedImage.dataset.exerciseId = "";
  document.body.classList.remove("modal-open");
}

function moveGuidedWorkout(direction) {
  const guidedExercises = getGuidedExercises();
  if (guidedWorkoutState.phase === "complete") {
    closeGuidedWorkout();
    return;
  }

  if (direction > 0 && guidedWorkoutState.currentIndex === guidedExercises.length - 1) {
    finishGuidedSession();
    return;
  }

  clearGuidedSessionInterval();
  stopGuidedSpeech();
  guidedWorkoutState.isRunning = false;
  guidedWorkoutState.currentIndex = Math.min(
    Math.max(guidedWorkoutState.currentIndex + direction, 0),
    guidedExercises.length - 1
  );
  guidedWorkoutState.currentSet = 1;
  guidedWorkoutState.phase = "idle";
  guidedWorkoutState.phaseContext = "exercise";
  guidedWorkoutState.phaseRemaining = getCurrentGuidedExercise().workSeconds;
  resetGuidedPromptState();
  renderGuidedWorkout();
}

function renderGuidedWorkout() {
  const guidedExercises = getGuidedExercises();
  const exercise = getCurrentGuidedExercise();
  const progress = Math.round(((guidedWorkoutState.currentIndex + 1) / guidedExercises.length) * 100);
  const nextExercise = getNextGuidedExercise();
  const routineTotalSeconds = calculateGuidedRoutineTotalSeconds();
  const isLastExercise = guidedWorkoutState.currentIndex === guidedExercises.length - 1;
  const guidedUnitLabel = guidedWorkoutState.sessionKind === "planner" ? "Bloco" : "Exercicio";

  guidedStepLabel.textContent = `${guidedUnitLabel} ${guidedWorkoutState.currentIndex + 1} de ${guidedExercises.length}`;
  guidedProgressFill.style.width = `${progress}%`;
  guidedPhaseLabel.textContent = getGuidedPhaseLabel();
  guidedSetLabel.textContent =
    guidedWorkoutState.phase === "complete"
      ? "Sessao finalizada"
      : guidedWorkoutState.sessionKind === "planner"
        ? `${exercise.duration} | ${exercise.focus}`
        : guidedWorkoutState.sessionKind === "exercise"
          ? `${exercise.sets} sets | ${exercise.reps}`
          : `Set ${guidedWorkoutState.currentSet} de ${exercise.sets}`;
  guidedPhaseTime.textContent = formatTime(guidedWorkoutState.phaseRemaining);
  guidedPhaseHint.textContent = getGuidedPhaseHint();
  guidedSessionTime.textContent = formatTime(guidedWorkoutState.sessionElapsed);
  guidedSessionMeta.textContent = `${formatTime(routineTotalSeconds)} planejados | ${guidedWorkoutState.sessionEquipment}`;
  guidedNextUp.textContent = nextExercise
    ? nextExercise.name
    : guidedWorkoutState.sessionKind === "routine"
      ? "Finalizar e registrar treino"
      : guidedWorkoutState.sessionKind === "planner"
        ? "Finalizar sessao do planejador"
      : "Fechar demonstracao";
  guidedVoiceStatus.textContent = guidedWorkoutState.voiceEnabled ? "Voz ligada" : "Voz desligada";
  guidedBlock.textContent = `${exercise.block} | ${exercise.focus}`;
  guidedTitle.textContent = exercise.name;
  guidedDescription.textContent = exercise.description;
  if (guidedImage.dataset.exerciseId !== exercise.id) {
    guidedImage.src = exercise.imageUrl;
    guidedImage.alt = exercise.name;
    guidedImage.dataset.exerciseId = exercise.id;
  }
  if (guidedVideo.dataset.exerciseId !== exercise.id) {
    guidedVideo.src = exercise.videoEmbedUrl;
    guidedVideo.dataset.exerciseId = exercise.id;
  }
  guidedSourceLink.href = exercise.sourceUrl;
  guidedMetrics.innerHTML = [
    `Duracao ${exercise.duration}`,
    `Descanso ${exercise.rest}`,
    `Reps ${exercise.reps}`,
    `Carga ${exercise.loadHint}`,
    exercise.equipment,
    exercise.stimulus,
  ]
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");
  renderGuidedPrompt(exercise);
  guidedSteps.innerHTML = exercise.steps.map((item) => `<li>${item}</li>`).join("");
  guidedTips.innerHTML = exercise.tips.map((item) => `<li>${item}</li>`).join("");
  guidedPrevButton.disabled = guidedWorkoutState.currentIndex === 0 || guidedWorkoutState.phase === "complete";
  guidedToggleSessionButton.textContent = guidedWorkoutState.phase === "complete"
    ? "Sessao concluida"
    : guidedWorkoutState.isRunning
      ? "Pausar sessao"
      : "Iniciar sessao";
  guidedToggleSessionButton.disabled = guidedWorkoutState.phase === "complete";
  guidedVoiceToggleButton.textContent = guidedWorkoutState.voiceEnabled ? "Desativar voz" : "Ativar voz";
  guidedNextButton.textContent = guidedWorkoutState.phase === "complete"
    ? "Fechar"
    : isLastExercise
      ? guidedWorkoutState.sessionKind === "routine"
        ? "Concluir treino"
        : "Concluir exercicio"
      : "Proximo";
  guidedSkipPhaseButton.disabled = guidedWorkoutState.phase === "complete";
  guidedRestartSessionButton.disabled = false;
}

function completeFeaturedRoutine() {
  state.completedSessions.unshift({
    id: Date.now(),
    goal: "back-shoulders",
    level: "intermediate",
    duration: 30,
    energy: "steady",
    title: featuredRoutine.title,
    completedAt: new Date().toISOString(),
  });
  state.completedSessions = state.completedSessions.slice(0, 12);
  persistState();
  renderDashboard();
  renderProgress();
}

function completePlannerSession() {
  const appliedGoal = state.energy === "recover" ? "mobility" : state.goal;
  state.completedSessions.unshift({
    id: Date.now(),
    goal: appliedGoal,
    level: state.level,
    duration: state.duration,
    energy: state.energy,
    title: guidedWorkoutState.sessionTitle,
    completedAt: new Date().toISOString(),
  });
  state.completedSessions = state.completedSessions.slice(0, 12);
  persistState();
  renderDashboard();
  renderProgress();
}

function toggleGuidedSession() {
  if (guidedWorkoutState.phase === "complete") {
    closeGuidedWorkout();
    return;
  }

  if (guidedWorkoutState.isRunning) {
    clearGuidedSessionInterval();
    guidedWorkoutState.isRunning = false;
    renderGuidedWorkout();
    return;
  }

  if (guidedWorkoutState.phase === "idle") {
    guidedWorkoutState.phase = "work";
    guidedWorkoutState.phaseContext = "exercise";
    guidedWorkoutState.phaseRemaining = getCurrentGuidedExercise().workSeconds;
    resetGuidedPromptState();
    announceGuidedPhase();
  }

  guidedWorkoutState.isRunning = true;
  clearGuidedSessionInterval();
  guidedWorkoutState.sessionIntervalId = window.setInterval(runGuidedTick, 1000);
  renderGuidedWorkout();
}

function runGuidedTick() {
  if (!guidedWorkoutState.isRunning || guidedWorkoutState.phase === "complete") {
    return;
  }

  if (guidedWorkoutState.phaseRemaining > 0) {
    guidedWorkoutState.phaseRemaining -= 1;
  }

  guidedWorkoutState.sessionElapsed += 1;

  if (guidedWorkoutState.phase === "work") {
    updateGuidedPromptTick();
  }

  if (guidedWorkoutState.phaseRemaining <= 0) {
    advanceGuidedPhase();
    return;
  }

  renderGuidedWorkout();
}

function advanceGuidedPhase() {
  const exercise = getCurrentGuidedExercise();

  if (guidedWorkoutState.phase === "idle") {
    guidedWorkoutState.phase = "work";
    guidedWorkoutState.phaseContext = "exercise";
    guidedWorkoutState.phaseRemaining = exercise.workSeconds;
    resetGuidedPromptState();
    announceGuidedPhase();
    renderGuidedWorkout();
    return;
  }

  if (guidedWorkoutState.phase === "work") {
    const isLastSet = guidedWorkoutState.currentSet >= exercise.sets;
    const isLastExercise = guidedWorkoutState.currentIndex >= getGuidedExercises().length - 1;

    guidedWorkoutState.totalSetsCompleted += 1;

    if (isLastSet && isLastExercise) {
      finishGuidedSession();
      return;
    }

    guidedWorkoutState.phase = "rest";
    guidedWorkoutState.phaseContext = isLastSet ? "transition" : "rest";
    guidedWorkoutState.phaseRemaining = isLastSet ? 20 : exercise.restSeconds;

    if (isLastSet) {
      guidedWorkoutState.currentIndex += 1;
      guidedWorkoutState.currentSet = 1;
    } else {
      guidedWorkoutState.currentSet += 1;
    }

    announceGuidedPhase();
    renderGuidedWorkout();
    return;
  }

  if (guidedWorkoutState.phase === "rest") {
    guidedWorkoutState.phase = "work";
    guidedWorkoutState.phaseContext = "exercise";
    guidedWorkoutState.phaseRemaining = getCurrentGuidedExercise().workSeconds;
    resetGuidedPromptState();
    announceGuidedPhase();
    renderGuidedWorkout();
  }
}

function restartGuidedSession() {
  resetGuidedSessionState(true);
  renderGuidedWorkout();
}

function toggleGuidedVoice() {
  guidedWorkoutState.voiceEnabled = !guidedWorkoutState.voiceEnabled;
  if (!guidedWorkoutState.voiceEnabled) {
    stopGuidedSpeech();
  }
  renderGuidedWorkout();
}

function finishGuidedSession() {
  clearGuidedSessionInterval();
  guidedWorkoutState.isRunning = false;
  guidedWorkoutState.phase = "complete";
  guidedWorkoutState.phaseRemaining = 0;
  announceGuidedMessage(
    guidedWorkoutState.sessionKind === "routine"
      ? "Treino concluido. Bom trabalho."
      : guidedWorkoutState.sessionKind === "planner"
        ? "Sessao do planejador concluida."
      : "Exercicio concluido."
  );
  if (guidedWorkoutState.sessionKind === "routine") {
    completeFeaturedRoutine();
  }
  if (guidedWorkoutState.sessionKind === "planner") {
    completePlannerSession();
  }
  renderGuidedWorkout();
}

function resetGuidedSessionState(resetIndex = false) {
  clearGuidedSessionInterval();
  stopGuidedSpeech();
  if (resetIndex) {
    guidedWorkoutState.currentIndex = 0;
  }
  guidedWorkoutState.currentSet = 1;
  guidedWorkoutState.totalSetsCompleted = 0;
  guidedWorkoutState.sessionElapsed = 0;
  guidedWorkoutState.phase = "idle";
  guidedWorkoutState.phaseContext = "exercise";
  guidedWorkoutState.phaseRemaining = getCurrentGuidedExercise().workSeconds;
  guidedWorkoutState.isRunning = false;
  resetGuidedPromptState();
}

function getCurrentGuidedExercise() {
  return getGuidedExercises()[guidedWorkoutState.currentIndex];
}

function getNextGuidedExercise() {
  return getGuidedExercises()[guidedWorkoutState.currentIndex + 1] ?? null;
}

function calculateGuidedRoutineTotalSeconds() {
  return getGuidedExercises().reduce((total, exercise, index, exercises) => {
    const workTotal = exercise.sets * exercise.workSeconds;
    const restBetweenSets = (exercise.sets - 1) * exercise.restSeconds;
    const transition = index < exercises.length - 1 ? 20 : 0;
    return total + workTotal + restBetweenSets + transition;
  }, 0);
}

function getGuidedExercises() {
  if (guidedWorkoutState.customExercises?.length) {
    return guidedWorkoutState.customExercises;
  }

  return guidedWorkoutState.exerciseIds.map((id) => exerciseLookup[id]).filter(Boolean);
}

function getGuidedPromptBank(exercise = getCurrentGuidedExercise()) {
  if (!exercise?.promptMode) {
    return [];
  }

  return boxingPromptBanks[exercise.promptMode] ?? [];
}

function getGuidedPromptInterval(exercise = getCurrentGuidedExercise()) {
  if (exercise?.promptMode === "reflex") {
    return 4;
  }

  if (exercise?.promptMode === "shadow") {
    return 6;
  }

  return 0;
}

function resetGuidedPromptState() {
  guidedWorkoutState.promptIndex = 0;
  guidedWorkoutState.promptTickCounter = getGuidedPromptInterval();
}

function getCurrentGuidedPrompt() {
  const bank = getGuidedPromptBank();
  if (!bank.length) {
    return null;
  }

  return bank[guidedWorkoutState.promptIndex] ?? bank[0];
}

function pickNextGuidedPromptIndex(bank, currentIndex, mode) {
  if (!bank.length) {
    return 0;
  }

  if (mode === "reflex" && bank.length > 1) {
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * bank.length);
    }
    return nextIndex;
  }

  return (currentIndex + 1) % bank.length;
}

function advanceGuidedPrompt(announce = false) {
  const exercise = getCurrentGuidedExercise();
  const bank = getGuidedPromptBank(exercise);
  if (!bank.length) {
    return;
  }

  guidedWorkoutState.promptIndex = pickNextGuidedPromptIndex(bank, guidedWorkoutState.promptIndex, exercise.promptMode);
  guidedWorkoutState.promptTickCounter = getGuidedPromptInterval(exercise);

  if (announce) {
    const prompt = getCurrentGuidedPrompt();
    if (prompt) {
      announceGuidedMessage(prompt.voice ?? prompt.title);
    }
  }
}

function updateGuidedPromptTick() {
  const exercise = getCurrentGuidedExercise();
  const bank = getGuidedPromptBank(exercise);
  if (!bank.length) {
    return;
  }

  if (guidedWorkoutState.promptTickCounter > 0) {
    guidedWorkoutState.promptTickCounter -= 1;
  }

  if (guidedWorkoutState.promptTickCounter <= 0) {
    advanceGuidedPrompt(true);
  }
}

function renderGuidedPrompt(exercise) {
  const bank = getGuidedPromptBank(exercise);
  if (!bank.length) {
    guidedPromptPanel.hidden = true;
    return;
  }

  const prompt = getCurrentGuidedPrompt() ?? bank[0];
  guidedPromptPanel.hidden = false;
  guidedPromptCurrent.textContent = prompt.title;
  guidedPromptDescription.textContent =
    guidedWorkoutState.phase === "work"
      ? prompt.description
      : exercise.promptMode === "reflex"
        ? "No round, reaja ao cue assim que ele trocar e volte para a guarda entre respostas."
        : "No round, siga o cue tecnico e mantenha a base organizada antes de acelerar.";
}

function getGuidedPhaseLabel() {
  if (guidedWorkoutState.phase === "idle") {
    return "Pronto";
  }
  if (guidedWorkoutState.phase === "work") {
    return "Execucao";
  }
  if (guidedWorkoutState.phase === "rest") {
    return guidedWorkoutState.phaseContext === "transition" ? "Transicao" : "Descanso";
  }
  if (guidedWorkoutState.phase === "complete") {
    return "Treino concluido";
  }
  return "Pronto";
}

function getGuidedPhaseHint() {
  const exercise = getCurrentGuidedExercise();

  if (guidedWorkoutState.phase === "idle") {
    return exercise.promptMode
      ? "Aperte iniciar para entrar no round guiado e seguir os cues de boxe."
      : "Aperte iniciar para entrar no primeiro set.";
  }
  if (guidedWorkoutState.phase === "work") {
    return exercise.promptMode === "reflex"
      ? "Reaja ao cue visual, volte para a guarda e mantenha os olhos para frente."
      : exercise.promptMode === "shadow"
        ? "Siga a combinacao mostrada, respire curto e retorne para a base a cada troca."
        : "Mantenha forma boa antes de acelerar.";
  }
  if (guidedWorkoutState.phase === "rest") {
    return guidedWorkoutState.phaseContext === "transition"
      ? "Ajuste a carga e prepare o proximo exercicio."
      : "Respire fundo e volte forte para o proximo set.";
  }
  if (guidedWorkoutState.phase === "complete") {
    return "Sessao registrada no seu progresso.";
  }
  return "";
}

function clearGuidedSessionInterval() {
  if (guidedWorkoutState.sessionIntervalId) {
    window.clearInterval(guidedWorkoutState.sessionIntervalId);
    guidedWorkoutState.sessionIntervalId = null;
  }
}

function announceGuidedPhase() {
  const exercise = getCurrentGuidedExercise();
  if (guidedWorkoutState.phase === "work") {
    announceGuidedMessage(`Comece ${exercise.name}. Set ${guidedWorkoutState.currentSet}.`);
    const prompt = getCurrentGuidedPrompt();
    if (prompt && exercise.promptMode) {
      window.setTimeout(() => {
        if (guidedWorkoutState.isOpen && guidedWorkoutState.phase === "work") {
          announceGuidedMessage(prompt.voice ?? prompt.title);
        }
      }, 400);
    }
    return;
  }

  if (guidedWorkoutState.phase === "rest") {
    if (guidedWorkoutState.phaseContext === "transition") {
      announceGuidedMessage(`Transicao. Proximo exercicio: ${exercise.name}.`);
    } else {
      announceGuidedMessage(`Descanse. Faltam ${guidedWorkoutState.phaseRemaining} segundos.`);
    }
  }
}

function announceGuidedMessage(message) {
  if (!guidedWorkoutState.voiceEnabled || !("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "pt-BR";
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function stopGuidedSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function handlePresetSelection(event) {
  const card = event.target.closest("[data-id]");
  if (!card) {
    return;
  }

  const preset = presets.find((item) => item.id === card.dataset.id);
  if (!preset) {
    return;
  }

  state.goal = preset.goal;
  state.level = preset.level;
  state.duration = preset.duration;
  state.energy = preset.energy;
  state.activePreset = preset.id;
  durationRange.value = String(state.duration);

  resetTimer();
  persistState();
  renderPresets();
  renderControls();
  renderDashboard();
  renderWorkout();
  renderLibrary();
  renderProgress();
}

function handleSegmentClick(key, collection) {
  return (event) => {
    const button = event.target.closest("[data-id]");
    if (!button) {
      return;
    }

    const nextValue = collection.find((item) => item.id === button.dataset.id)?.id;
    if (!nextValue) {
      return;
    }

    state[key] = nextValue;
    state.activePreset = "";
    persistState();

    renderControls();
    renderPresets();
    renderDashboard();
    renderWorkout();
    renderLibrary();
    renderProgress();
  };
}

function createButtons(collection, activeId) {
  return collection
    .map(
      (item) => `
        <button class="segment-button ${item.id === activeId ? "active" : ""}" type="button" data-id="${item.id}">
          ${item.label}
        </button>
      `
    )
    .join("");
}

function translateGoal(goal) {
  return {
    strength: "Forca",
    cardio: "Cardio",
    mobility: "Mobilidade",
    recovery: "Recuperacao",
    "back-shoulders": "Costas e ombros",
    "lower-body": "Pernas e posterior",
    "push-core": "Peito e suporte",
    boxing: "Boxe e reflexo",
  }[goal] ?? goal;
}

function translateLevel(level) {
  return {
    beginner: "Iniciante",
    intermediate: "Intermediario",
    advanced: "Avancado",
  }[level] ?? level;
}

function loadState() {
  const savedState = localStorage.getItem(storageKey);
  if (!savedState) {
    return structuredClone(defaultState);
  }

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(savedState) };
  } catch {
    return structuredClone(defaultState);
  }
}

function persistState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function registerInstallPrompt() {
  const displayMode = window.matchMedia("(display-mode: standalone)");
  const updateDisplayMode = () => syncStandaloneMode();
  if (typeof displayMode.addEventListener === "function") {
    displayMode.addEventListener("change", updateDisplayMode);
  } else if (typeof displayMode.addListener === "function") {
    displayMode.addListener(updateDisplayMode);
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (installAppButton) {
      installAppButton.hidden = false;
      installAppButton.textContent = "Instalar app";
    }
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    syncStandaloneMode();
    if (installAppButton) {
      installAppButton.hidden = true;
    }
  });

  if (isIosStandaloneUnavailable() && installAppButton) {
    installAppButton.hidden = false;
    installAppButton.textContent = "Como instalar";
  }
}

async function handleInstallApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try {
      await deferredInstallPrompt.userChoice;
    } catch (error) {
      console.warn("Nao foi possivel concluir o prompt de instalacao.", error);
    }
    deferredInstallPrompt = null;
    if (installAppButton && !isIosStandaloneUnavailable()) {
      installAppButton.hidden = true;
    }
    return;
  }

  if (isIosStandaloneUnavailable()) {
    window.alert("No iPhone: toque em Compartilhar e depois em Adicionar a Tela de Inicio.");
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Falha ao registrar o service worker.", error);
    });
  });
}

function syncStandaloneMode() {
  document.body.classList.toggle("is-standalone", isStandaloneMode());
}

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIosStandaloneUnavailable() {
  const ua = window.navigator.userAgent ?? "";
  const isIos = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
  return isIos && isSafari && !isStandaloneMode();
}

function getWorkoutTemplate() {
  const energyAdjustedGoal = state.energy === "recover" ? "mobility" : state.goal;
  return workoutTemplates[energyAdjustedGoal][state.level];
}

function getCompletedThisWeek() {
  const today = new Date();
  const monday = new Date(today);
  const diff = (today.getDay() + 6) % 7;
  monday.setDate(today.getDate() - diff);
  monday.setHours(0, 0, 0, 0);

  return state.completedSessions.filter((session) => new Date(session.completedAt) >= monday).length;
}

function calculateStreak() {
  if (!state.completedSessions.length) {
    return 0;
  }

  const uniqueDays = new Set(
    state.completedSessions.map((session) => new Date(session.completedAt).toDateString())
  );

  let streak = 0;
  let cursor = new Date();
  while (uniqueDays.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function getBalanceLabel() {
  const counts = state.completedSessions.reduce(
    (accumulator, session) => {
      accumulator[session.goal] = (accumulator[session.goal] ?? 0) + 1;
      return accumulator;
    },
    { strength: 0, cardio: 0, mobility: 0 }
  );

  const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return winner && winner[1] > 0 ? translateGoal(winner[0]) : "Forca";
}

function getDayStatus(index) {
  const today = new Date();
  const todayIndex = (today.getDay() + 6) % 7;
  const completedThisWeek = getCompletedThisWeek();

  if (index < completedThisWeek) {
    return "done";
  }

  if (index === todayIndex) {
    return "today";
  }

  return "planned";
}

function cycleGoal() {
  const currentIndex = goals.findIndex((goal) => goal.id === state.goal);
  state.goal = goals[(currentIndex + 1) % goals.length].id;
}

function cycleEnergy() {
  const currentIndex = energies.findIndex((energy) => energy.id === state.energy);
  state.energy = energies[(currentIndex + 1) % energies.length].id;
}

function renderCoachCard(totalTime) {
  const appliedGoal = state.energy === "recover" ? "mobility" : state.goal;
  const completedThisWeek = getCompletedThisWeek();
  const balance = getBalanceLabel();

  if (state.energy === "recover") {
    coachTitle.textContent = "Hoje o sistema recomenda baixar a carga";
    coachText.textContent =
      "Como voce marcou recuperacao, a sessao prioriza mobilidade e core tecnico para manter o habito sem estressar demais o corpo.";
    return;
  }

  if (completedThisWeek >= 4) {
    coachTitle.textContent = "Voce ja bateu a meta da semana";
    coachText.textContent =
      "Use esta sessao para refinamento tecnico. Se sentir fadiga acumulada, troque para um preset de reset e preserve consistencia.";
    return;
  }

  coachTitle.textContent = `${translateGoal(appliedGoal)} com janela de ${totalTime} min`;
  coachText.textContent = `Seu historico recente puxa mais para ${balance}. Esta sessao equilibra a semana e acompanha sua energia atual sem desperdicar tempo.`;
}

function syncTimerWithWorkout(blocks, totalTime, workoutSignature) {
  clearTimerInterval();
  timerState.totalSeconds = totalTime * 60;
  timerState.remainingSeconds = totalTime * 60;
  timerState.activeBlockIndex = 0;
  timerState.isRunning = false;
  timerState.blockDurations = blocks.map((block) => block.adjustedLength * 60);
  timerState.signature = workoutSignature;
  updateTimerHint(blocks);
  updateTimerUI();
}

function startTimer() {
  if (timerState.remainingSeconds <= 0) {
    return;
  }

  clearTimerInterval();
  timerState.isRunning = true;
  updateTimerUI();
  timerState.intervalId = window.setInterval(() => {
    if (timerState.remainingSeconds <= 0) {
      clearTimerInterval();
      timerState.isRunning = false;
      timerHint.textContent = "Sessao concluida. Se quiser, registre o treino no painel da semana.";
      updateTimerUI();
      return;
    }

    timerState.remainingSeconds -= 1;
    syncActiveBlockFromElapsed();
    updateTimerUI();
  }, 1000);
}

function pauseTimer() {
  clearTimerInterval();
  timerState.isRunning = false;
  updateTimerUI();
}

function resetTimer() {
  const template = getWorkoutTemplate();
  const durationFactor = state.duration / 30;
  const adjustedBlocks = template.blocks.map((block) => ({
    ...block,
    adjustedLength: Math.max(4, Math.round(block.length * durationFactor)),
  }));
  const totalTime = adjustedBlocks.reduce((sum, block) => sum + block.adjustedLength, 0);
  const workoutSignature = `${template.title}-${adjustedBlocks.map((block) => `${block.title}-${block.adjustedLength}`).join("|")}`;
  syncTimerWithWorkout(adjustedBlocks, totalTime, workoutSignature);
}

function goToNextBlock() {
  if (!timerState.blockDurations.length) {
    return;
  }

  const nextIndex = Math.min(timerState.activeBlockIndex + 1, timerState.blockDurations.length - 1);
  timerState.activeBlockIndex = nextIndex;

  const secondsBeforeNext = timerState.blockDurations
    .slice(0, nextIndex)
    .reduce((sum, value) => sum + value, 0);

  timerState.remainingSeconds = Math.max(timerState.totalSeconds - secondsBeforeNext, 0);
  updateTimerHintFromState();
  updateTimerUI();
}

function syncActiveBlockFromElapsed() {
  const elapsedSeconds = timerState.totalSeconds - timerState.remainingSeconds;
  let cumulative = 0;

  for (let index = 0; index < timerState.blockDurations.length; index += 1) {
    cumulative += timerState.blockDurations[index];
    if (elapsedSeconds < cumulative) {
      timerState.activeBlockIndex = index;
      break;
    }
  }

  updateTimerHintFromState();
}

function updateTimerHint(blocks) {
  const currentBlock = blocks[timerState.activeBlockIndex];
  if (!currentBlock) {
    timerHint.textContent = "Pronto para iniciar.";
    return;
  }

  timerHint.textContent = `Bloco atual: ${currentBlock.title}. ${suggestBlockNote(currentBlock.title)}.`;
}

function updateTimerHintFromState() {
  const template = getWorkoutTemplate();
  const durationFactor = state.duration / 30;
  const adjustedBlocks = template.blocks.map((block) => ({
    ...block,
    adjustedLength: Math.max(4, Math.round(block.length * durationFactor)),
  }));
  updateTimerHint(adjustedBlocks);
}

function updateTimerUI() {
  timerDisplay.textContent = formatTime(timerState.remainingSeconds);
  toggleTimerButton.textContent = timerState.isRunning ? "Pausar" : "Iniciar";
  updateActiveBlockCard();
}

function clearTimerInterval() {
  if (timerState.intervalId) {
    window.clearInterval(timerState.intervalId);
    timerState.intervalId = null;
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateActiveBlockCard() {
  const blockCards = sessionBlocks.querySelectorAll("[data-block-index]");
  blockCards.forEach((card) => {
    const isActive = Number(card.dataset.blockIndex) === timerState.activeBlockIndex;
    card.classList.toggle("active", isActive);
  });
}

function suggestBlockNote(title) {
  if (
    title.toLowerCase().includes("cool") ||
    title.toLowerCase().includes("saida") ||
    title.toLowerCase().includes("reset")
  ) {
    return "Feche respirando mais lento";
  }
  if (
    title.toLowerCase().includes("warm") ||
    title.toLowerCase().includes("aquecimento") ||
    title.toLowerCase().includes("entrada")
  ) {
    return "Ganhe temperatura sem correr";
  }
  return "Mantenha a tecnica antes da velocidade";
}

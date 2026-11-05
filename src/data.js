// Conteúdo do site, condensado de ../portifolio.md.
// Financial Solutions e RAD Task ficam de fora por decisão do autor.

export const perfil = {
  nome: 'Gabriel S. Santos',
  cargo: 'Desenvolvedor Full Stack',
  stack: ['JavaScript', 'React', 'React Native', 'Firebase'],
  github: 'https://github.com/Gabriel-SSantos',
  githubUser: 'Gabriel-SSantos',
  resumo:
    'Transformo processos reais em software: gestão escolar, organização esportiva, jogos educativos para web e celular e ferramentas de sala de aula com visão computacional.',
  resumoLongo:
    'Meus projetos vão do levantamento de requisitos à publicação: modelagem de dados no Firestore, regras de segurança, Cloud Functions, pagamentos recorrentes com Stripe, apps Android com Expo e EAS Build, monetização com compras no app e anúncios, e deploy no Firebase Hosting, no GitHub Pages e na Google Play. Documento no próprio código as decisões de arquitetura e separo a regra de negócio em funções puras, que dá para testar sem React nem banco.',
}

export const numeros = [
  { valor: '7', rotulo: 'projetos em destaque' },
  { valor: '640+', rotulo: 'palavras no app publicado na Google Play' },
  { valor: '30', rotulo: 'níveis no jogo Labirintos' },
  { valor: '20+', rotulo: 'Cloud Functions no Ebsoft' },
]

export const areas = [
  {
    titulo: 'Engenharia de software',
    texto: 'Levantamento de requisitos, arquitetura de SPA, componentização e separação entre regra de negócio e interface.',
  },
  {
    titulo: 'Banco de dados NoSQL',
    texto: 'Coleções e subcoleções, dados desnormalizados para dashboards, índices compostos e cuidado com o custo de leitura.',
  },
  {
    titulo: 'Segurança da informação',
    texto: 'Autenticação, controle de acesso por perfis (RBAC), custom claims, Firestore Security Rules e isolamento multi-tenant.',
  },
  {
    titulo: 'Back-end serverless',
    texto: 'Cloud Functions HTTP, callable e com gatilhos do Firestore, além de webhooks.',
  },
  {
    titulo: 'Pagamentos e SaaS',
    texto: 'Assinaturas recorrentes, checkout, portal de cobrança, troca e cancelamento de plano.',
  },
  {
    titulo: 'Desenvolvimento mobile',
    texto: 'Apps Android com React Native e Expo: orientação de tela, gestos, haptics, persistência local e publicação na Google Play.',
  },
  {
    titulo: 'Monetização de apps',
    texto: 'Freemium, compra única com RevenueCat, anúncios AdMob, consentimento GDPR/UMP e política de Famílias (COPPA).',
  },
  {
    titulo: 'Algoritmos',
    texto: 'Balanceamento de times, filas, ordenação, rankings e sorteio sem repetição (Fisher-Yates).',
  },
  {
    titulo: 'Visão computacional',
    texto: 'Canvas 2D, rastreamento de mãos com MediaPipe e reconhecimento de gestos no navegador.',
  },
  {
    titulo: 'Desenvolvimento de jogos',
    texto: 'Laço de jogo com passo fixo, colisões AABB, grade espacial, máquinas de estado e Programação Orientada a Objetos.',
  },
  {
    titulo: 'Desempenho em mobile',
    texto: 'Física e gestos na thread de interface (worklets), desenho na GPU com Skia e poucas renderizações do React.',
  },
  {
    titulo: 'UX / UI',
    texto: 'Interfaces responsivas, mobile first, landing pages e dashboards com gráficos.',
  },
]

export const tecnologias = [
  { categoria: 'Linguagens', itens: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Node.js'] },
  { categoria: 'Front-end', itens: ['React 18/19', 'React Router', 'CSS Modules', 'Recharts', 'Lucide / React Icons'] },
  {
    categoria: 'Mobile',
    itens: ['React Native', 'Expo Router', 'EAS Build', 'React Navigation', 'Reanimated / Worklets', 'Gesture Handler', 'React Native Skia', 'Expo Haptics'],
  },
  { categoria: 'Cloud', itens: ['Firebase Auth', 'Cloud Firestore', 'Cloud Functions', 'Firebase Hosting', 'Admin SDK'] },
  { categoria: 'Pagamentos e monetização', itens: ['Stripe', 'RevenueCat', 'AdMob', 'UMP / GDPR'] },
  { categoria: 'Desktop', itens: ['Electron', 'electron-builder'] },
  { categoria: 'Documentos', itens: ['PDF.js', 'JSZip', 'SheetJS', 'jsPDF'] },
  { categoria: 'Gráficos e visão', itens: ['Canvas API', 'MediaPipe', 'WebAssembly', 'Pointer Events'] },
  { categoria: 'Persistência', itens: ['localStorage', 'AsyncStorage', 'Armazenamento do navegador'] },
  { categoria: 'Ferramentas', itens: ['Git', 'GitHub Pages', 'npm', 'ESLint', 'Jest / Testing Library'] },
]

// tipo: 'web' | 'mobile' | 'jogo' (um projeto pode ter mais de um)
export const projetos = [
  {
    id: 'ebsoft',
    nome: 'Ebsoft',
    subtitulo: 'SaaS de gestão de Escola Bíblica Dominical',
    tipos: ['web'],
    plataforma: 'SaaS web multi-tenant',
    cor: '#2f6fdb',
    resumo:
      'O professor faz a chamada pelo celular e, no fim do mês, o diretor gera o relatório mensal com um clique. Turmas, professores, alunos, histórico de relatórios e dashboard de crescimento da escola.',
    destaques: [
      'Arquitetura multi-tenant: cada escola isolada, com hierarquia Diretor → Professor → Aluno.',
      'Mais de 20 Cloud Functions: criação de escola e professores, convites, gestão de cargos e gatilhos que recalculam o dashboard.',
      'Assinatura com Stripe (checkout, webhook, portal de cobrança, troca e cancelamento). O status fica na escola, para valer para todos os professores.',
      'Firestore Security Rules que combinam custom claims com o vínculo verificado no banco.',
      'Dashboard com Recharts, rankings de frequência e landing page comercial própria.',
    ],
    tecnologias: ['React 19', 'React Router 7', 'Firebase', 'Cloud Functions', 'Node.js 24', 'Stripe', 'Recharts'],
    aplicacoes: ['Gestão educacional', 'Igrejas e ONGs', 'Controle de frequência', 'SaaS por assinatura'],
  },
  {
    id: 'quemsoueu',
    nome: 'Quem Sou Eu na Bíblia',
    subtitulo: 'Jogo de adivinhação para Android',
    tipos: ['mobile', 'jogo'],
    plataforma: 'App Android · Google Play',
    cor: '#d9822b',
    link: { url: 'https://play.google.com/store/apps/details?id=com.gabriessantos.quemsoeunabiblia', rotulo: 'Ver na Google Play' },
    resumo:
      'Jogo em grupo: o app sorteia uma palavra com a referência bíblica dela e os outros tentam adivinhar por mímica, desenho ou perguntas, contra um cronômetro de 60 segundos. Mais de 640 palavras em seis categorias.',
    destaques: [
      'Freemium com compra única: metade das palavras é grátis, intercalada, para cobrir a lista inteira sem mudar o arquivo de dados.',
      'Compras no app com RevenueCat: produto lifetime, contexto PremiumProvider, restaurar compra e mensagens para cada erro da loja.',
      'AdMob com banner adaptativo e intersticial pré-carregado a cada três saídas de categoria.',
      'Conforme a política de Famílias do Google Play: COPPA, anúncios não personalizados e consentimento GDPR/UMP.',
      'Tela travada em paisagem, com tamanho de letra calculado pelo texto e pela altura da tela.',
    ],
    tecnologias: ['React Native', 'Expo SDK 57', 'Expo Router', 'RevenueCat', 'AdMob', 'EAS Build'],
    aplicacoes: ['Educação cristã', 'Jogos de festa', 'Monetização de apps', 'Apps para a família'],
  },
  {
    id: 'lousa',
    nome: 'Lousa Digital',
    subtitulo: '"Quadro no Ar": lousa controlada por gestos',
    tipos: ['web'],
    plataforma: 'Web app interativo',
    cor: '#7a4fd6',
    resumo:
      'Lousa no navegador que usa a webcam para reconhecer gestos das mãos. O professor desenha, passa slides e dá zoom sem tocar no computador. Abre .pptx, PDF e imagens.',
    destaques: [
      'MediaPipe Hand Landmarker em WebAssembly, com uma ou duas mãos e processamento na GPU ou na CPU.',
      'Gestos próprios: palma aberta abre o menu, pinça arrasta, duas pinças dão zoom, o mindinho inclinado passa o slide.',
      'Leitor de .pptx feito à mão: abre o arquivo com JSZip e redesenha cada slide no Canvas. PDFs com PDF.js.',
      'Caneta, formas, texto, borracha, camadas, desfazer/refazer, zoom e tela cheia.',
      'Arquivos salvos no navegador e reabertos ao recarregar. Tudo num único arquivo HTML.',
    ],
    tecnologias: ['JavaScript', 'Canvas 2D', 'MediaPipe', 'WebAssembly', 'PDF.js', 'JSZip'],
    aplicacoes: ['Sala de aula', 'Ensino a distância', 'Apresentações', 'Interfaces sem toque'],
  },
  {
    id: 'labirintos',
    nome: 'Labirintos',
    subtitulo: 'Jogo de labirinto para celular',
    tipos: ['mobile', 'jogo'],
    plataforma: 'Jogo mobile',
    cor: '#1f9d74',
    resumo:
      '30 níveis: deslize o dedo para guiar o personagem, pegue as chaves que abrem as portas e chegue ao baú. Cada nível vale até 3 estrelas e o melhor resultado fica salvo.',
    destaques: [
      'Laço do jogo em worklets do Reanimated, na thread de interface. O React só é avisado uma vez por segundo e nos eventos.',
      'Passo fixo de 1/120 s, para a mesma velocidade em telas de 60, 90 ou 120 Hz.',
      'Colisão AABB com paredes fundidas e grade espacial: no máximo 4 células consultadas por passo.',
      'Desenho na GPU com Skia: todas as paredes viram um único caminho por nível; portas e chaves em bitmasks.',
      'Gesto de deslizar na thread de interface e vibração ao pegar chaves, vencer e perder.',
    ],
    tecnologias: ['React Native', 'Expo SDK 58', 'Skia', 'Reanimated 4', 'Gesture Handler', 'AsyncStorage'],
    aplicacoes: ['Jogos casuais', 'Raciocínio espacial', 'Desempenho em mobile'],
  },
  {
    id: 'imagemacao',
    nome: 'Imagem, Bíblia & Ação',
    subtitulo: 'Jogo de mímica por equipes',
    tipos: ['mobile', 'jogo'],
    plataforma: 'App mobile',
    cor: '#d64f6a',
    resumo:
      'Celular no meio da roda: o time gira o dado para os pontos e para a categoria, escolhe uma entre cinco palavras, faz a mímica em 60 segundos e avança na pista até 30 pontos.',
    destaques: [
      'Turno como máquina de estados, com cada fase num componente próprio.',
      'Sorteio sem repetição com Fisher-Yates num banco de cerca de 850 palavras.',
      'Partida salva a cada turno com AsyncStorage, para retomar depois.',
      'Modo Mestre para quem joga com tabuleiro e dados físicos.',
      'Identidade visual "gibi" com design tokens e tema claro ou escuro.',
    ],
    tecnologias: ['React Native', 'Expo SDK 54', 'React Navigation', 'AsyncStorage'],
    aplicacoes: ['Educação cristã', 'Jogos de tabuleiro', 'Grupos de jovens'],
  },
  {
    id: 'voleando',
    nome: 'Voleando',
    subtitulo: 'Organizador de partidas de vôlei',
    tipos: ['web'],
    plataforma: 'Web app offline',
    cor: '#e0a21b',
    link: { url: 'https://Gabriel-SSantos.github.io/voleando_', rotulo: 'Abrir o app' },
    resumo:
      'Cadastra jogadores, marca quem está presente, monta times equilibrados, controla o placar com fila "rei da quadra" e guarda um ranking histórico.',
    destaques: [
      'Balanceamento determinístico: grupos 2H+2M com média a no máximo 0,5 da média geral, pareando o mais forte com o mais fraco.',
      'Seleção de presentes com Set, para busca em O(1).',
      'Sem back-end: tudo em localStorage, para usar na quadra sem internet.',
      'Modo rápido de placar, sem cadastro.',
    ],
    tecnologias: ['React', 'React Router', 'CSS Modules', 'localStorage', 'GitHub Pages'],
    aplicacoes: ['Esporte recreativo', 'Eventos comunitários', 'Torneios'],
  },
  {
    id: 'cacatesouro',
    nome: 'Caça ao Tesouro',
    subtitulo: 'Jogo educativo de desafios bíblicos',
    tipos: ['web', 'jogo'],
    plataforma: 'Jogo web',
    cor: '#9a6b3c',
    resumo:
      'Cinco desafios trancados. Cada um vencido revela uma referência bíblica que abre o próximo cadeado: quebra-cabeça, labirinto, quiz, Pong, memória e uma prova final.',
    destaques: [
      'Minijogos feitos do zero com Canvas e uma biblioteca própria de classes para desenho e colisão.',
      'Controles por teclado e por botões na tela, para jogar no celular.',
      'Progressão por fases com cadeados, pistas, sprites, GIFs e áudio.',
      'HTML, CSS e JavaScript puros, sem frameworks.',
    ],
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Canvas 2D', 'POO'],
    aplicacoes: ['Educação cristã', 'Gamificação no ensino', 'Dinâmicas em grupo'],
  },
]

export const filtros = [
  { id: 'todos', rotulo: 'Todos' },
  { id: 'web', rotulo: 'Web' },
  { id: 'mobile', rotulo: 'Mobile' },
  { id: 'jogo', rotulo: 'Jogos' },
]

export const atuacao = [
  { titulo: 'Educação', texto: 'Gestão escolar, jogos educativos para web e celular e lousa interativa.' },
  { titulo: 'Organizações religiosas', texto: 'EBD, dinâmicas, eventos e jogos bíblicos para grupos.' },
  { titulo: 'Jogos e apps mobile', texto: 'Jogos casuais e de festa para Android, com compras no app e anúncios.' },
  { titulo: 'SaaS e assinaturas', texto: 'Plataformas multi-tenant com cobrança recorrente.' },
  { titulo: 'Esporte e lazer', texto: 'Organização de partidas, placares e rankings.' },
  { titulo: 'Tecnologias emergentes', texto: 'Visão computacional e interfaces por gestos.' },
]

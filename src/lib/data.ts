// Dados mock do LoveCheck
import { Mentor, Plano } from './types';

export const planos: Plano[] = [
  {
    tipo: 'basico',
    nome: 'Plano Básico',
    preco: 97,
    recursos: [
      'Perfil ativo no catálogo',
      'Receber mensagens de clientes',
      'Prestar consultorias',
      'Chat interno',
      'Visibilidade padrão',
      'Suporte via e-mail'
    ]
  },
  {
    tipo: 'pro',
    nome: 'Plano PRO',
    preco: 197,
    destaque: true,
    recursos: [
      'Tudo do plano básico',
      'Destaque nas buscas',
      'Selo PRO no perfil',
      'Prioridade no feed',
      'Estatísticas avançadas',
      'Vídeos no perfil',
      'Atualizações ilimitadas',
      'Recomendações automáticas'
    ]
  }
];

export const mentoresMock: Mentor[] = [
  {
    id: '1',
    nome: 'Dra. Ana Silva',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    especialidades: ['Relacionamentos', 'Comunicação', 'Autoestima'],
    biografia: 'Psicóloga especializada em terapia de casais com 10 anos de experiência. Ajudo pessoas a construírem relacionamentos mais saudáveis e felizes.',
    preco: 150,
    metodoPagamento: ['PIX', 'Mercado Pago', 'PagBank'],
    avaliacoes: 127,
    nota: 4.9,
    plano: 'pro',
    status: 'ativo',
    atendimentos: 340,
    visualizacoes: 1250
  },
  {
    id: '2',
    nome: 'Dr. Carlos Mendes',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    especialidades: ['Conflitos', 'Infidelidade', 'Recomeços'],
    biografia: 'Terapeuta de casais e consultor de relacionamentos. Especialista em resolução de conflitos e reconstrução de confiança.',
    preco: 120,
    metodoPagamento: ['PIX', 'Link de Pagamento'],
    avaliacoes: 89,
    nota: 4.8,
    plano: 'basico',
    status: 'ativo',
    atendimentos: 210
  },
  {
    id: '3',
    nome: 'Juliana Costa',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    especialidades: ['Amor Próprio', 'Dependência Emocional', 'Limites'],
    biografia: 'Coach de relacionamentos focada em desenvolvimento pessoal e empoderamento feminino. Ajudo mulheres a se reconectarem consigo mesmas.',
    preco: 100,
    metodoPagamento: ['PIX', 'Stripe'],
    avaliacoes: 156,
    nota: 5.0,
    plano: 'pro',
    status: 'ativo',
    atendimentos: 420,
    visualizacoes: 2100
  },
  {
    id: '4',
    nome: 'Rafael Santos',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    especialidades: ['Masculinidade', 'Compromisso', 'Paternidade'],
    biografia: 'Psicólogo especializado em questões masculinas e relacionamentos. Trabalho com homens que buscam evoluir emocionalmente.',
    preco: 130,
    metodoPagamento: ['PIX', 'Mercado Pago'],
    avaliacoes: 73,
    nota: 4.7,
    plano: 'basico',
    status: 'ativo',
    atendimentos: 180
  },
  {
    id: '5',
    nome: 'Mariana Oliveira',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    especialidades: ['Namoro', 'Primeiros Relacionamentos', 'Ansiedade'],
    biografia: 'Terapeuta especializada em jovens adultos e primeiros relacionamentos. Ajudo a construir bases saudáveis desde o início.',
    preco: 90,
    metodoPagamento: ['PIX'],
    avaliacoes: 201,
    nota: 4.9,
    plano: 'pro',
    status: 'ativo',
    atendimentos: 510,
    visualizacoes: 1800
  },
  {
    id: '6',
    nome: 'Dr. Fernando Lima',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    especialidades: ['Casamento', 'Família', 'Filhos'],
    biografia: 'Psicólogo familiar com 15 anos de experiência. Especialista em dinâmicas familiares e relacionamentos de longo prazo.',
    preco: 180,
    metodoPagamento: ['PIX', 'Mercado Pago', 'PagBank', 'Stripe'],
    avaliacoes: 95,
    nota: 4.8,
    plano: 'pro',
    status: 'ativo',
    atendimentos: 280,
    visualizacoes: 950
  }
];

export const insightsDoDia = [
  {
    texto: 'A comunicação honesta é a base de qualquer relacionamento saudável.',
    autor: 'Dra. Ana Silva'
  },
  {
    texto: 'Amor próprio não é egoísmo, é a base para amar o outro de forma saudável.',
    autor: 'Juliana Costa'
  },
  {
    texto: 'Conflitos são oportunidades de crescimento quando tratados com respeito.',
    autor: 'Dr. Carlos Mendes'
  },
  {
    texto: 'Vulnerabilidade é força, não fraqueza.',
    autor: 'Rafael Santos'
  }
];

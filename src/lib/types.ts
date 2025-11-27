// Tipos do sistema LoveCheck

export type UserRole = 'cliente' | 'mentor';

export type PlanType = 'basico' | 'pro';

export type MentorStatus = 'ativo' | 'inativo' | 'bloqueado';

export type ConsultationStatus = 'pendente' | 'aguardando_pagamento' | 'em_andamento' | 'concluida' | 'cancelada';

export interface Mentor {
  id: string;
  nome: string;
  foto: string;
  especialidades: string[];
  biografia: string;
  preco: number;
  metodoPagamento: string[];
  avaliacoes: number;
  nota: number;
  plano: PlanType;
  status: MentorStatus;
  atendimentos: number;
  visualizacoes?: number;
  videoUrl?: string;
}

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  foto?: string;
  consultasRealizadas: number;
}

export interface Consultation {
  id: string;
  clienteId: string;
  mentorId: string;
  descricao: string;
  status: ConsultationStatus;
  criadoEm: Date;
  atualizadoEm: Date;
  pagamentoConfirmado: boolean;
  avaliacaoCliente?: {
    nota: number;
    comentario: string;
    recomendaria: boolean;
  };
}

export interface Message {
  id: string;
  consultationId: string;
  remetenteId: string;
  tipo: 'texto' | 'audio' | 'video' | 'arquivo' | 'sistema';
  conteudo: string;
  criadoEm: Date;
}

export interface Plano {
  tipo: PlanType;
  nome: string;
  preco: number;
  recursos: string[];
  destaque?: boolean;
}

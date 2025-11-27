'use client';

import { Heart, Star, Clock, DollarSign, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const mentoresExemplo = [
  {
    id: 1,
    nome: 'Dra. Ana Silva',
    especialidade: 'Psicóloga Clínica',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    avaliacao: 4.9,
    totalAvaliacoes: 127,
    preco: 150,
    tempoResposta: '24h',
    bio: 'Especialista em relacionamentos e terapia de casal com 10 anos de experiência.',
    tags: ['Relacionamentos', 'Terapia de Casal', 'Autoestima']
  },
  {
    id: 2,
    nome: 'Dr. Carlos Mendes',
    especialidade: 'Terapeuta Familiar',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    avaliacao: 4.8,
    totalAvaliacoes: 98,
    preco: 180,
    tempoResposta: '12h',
    bio: 'Ajudo casais e famílias a construírem relacionamentos mais saudáveis.',
    tags: ['Família', 'Comunicação', 'Conflitos']
  },
  {
    id: 3,
    nome: 'Dra. Mariana Costa',
    especialidade: 'Coach de Relacionamentos',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    avaliacao: 5.0,
    totalAvaliacoes: 156,
    preco: 120,
    tempoResposta: '6h',
    bio: 'Especializada em ajudar pessoas a encontrarem relacionamentos saudáveis.',
    tags: ['Dating', 'Autoconhecimento', 'Relacionamentos']
  },
  {
    id: 4,
    nome: 'Dr. Roberto Alves',
    especialidade: 'Psicólogo Comportamental',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    avaliacao: 4.7,
    totalAvaliacoes: 89,
    preco: 160,
    tempoResposta: '24h',
    bio: 'Foco em padrões comportamentais e desenvolvimento pessoal.',
    tags: ['Comportamento', 'Ansiedade', 'Relacionamentos']
  }
];

export default function MentoresPage() {
  const [busca, setBusca] = useState('');
  const [filtroPreco, setFiltroPreco] = useState('todos');

  const mentoresFiltrados = mentoresExemplo.filter(mentor => {
    const matchBusca = mentor.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       mentor.especialidade.toLowerCase().includes(busca.toLowerCase()) ||
                       mentor.tags.some(tag => tag.toLowerCase().includes(busca.toLowerCase()));
    
    const matchPreco = filtroPreco === 'todos' ||
                       (filtroPreco === 'ate150' && mentor.preco <= 150) ||
                       (filtroPreco === 'ate200' && mentor.preco <= 200) ||
                       (filtroPreco === 'acima200' && mentor.preco > 200);
    
    return matchBusca && matchPreco;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900">Encontre seu</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Mentor Ideal
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profissionais especializados prontos para ajudar você a construir relacionamentos mais saudáveis
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Busca */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome, especialidade ou área..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Filtro de Preço */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filtroPreco}
                  onChange={(e) => setFiltroPreco(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white"
                >
                  <option value="todos">Todos os preços</option>
                  <option value="ate150">Até R$ 150</option>
                  <option value="ate200">Até R$ 200</option>
                  <option value="acima200">Acima de R$ 200</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Mentores */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {mentoresFiltrados.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="p-6">
                  {/* Header do Card */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={mentor.foto}
                      alt={mentor.nome}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {mentor.nome}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {mentor.especialidade}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="text-sm font-semibold text-gray-900">
                            {mentor.avaliacao}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({mentor.totalAvaliacoes} avaliações)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 text-sm mb-4">
                    {mentor.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer do Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{mentor.tempoResposta}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-gray-900">
                          R$ {mentor.preco}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mentoresFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum mentor encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" fill="white" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Não encontrou o mentor ideal?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Nossa equipe pode ajudar você a encontrar o profissional perfeito para suas necessidades
          </p>
          <button className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold hover:shadow-2xl transition-all">
            Falar com Suporte
          </button>
        </div>
      </section>
    </div>
  );
}

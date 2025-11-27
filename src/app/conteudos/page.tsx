'use client';

import { BookOpen, Heart, Users, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ConteudosPage() {
  const conteudos = [
    {
      categoria: 'Comunicação',
      titulo: 'Como melhorar a comunicação no relacionamento',
      descricao: 'Aprenda técnicas eficazes para se comunicar melhor com seu parceiro e evitar conflitos desnecessários.',
      tempo: '8 min',
      cor: 'from-blue-500 to-cyan-600'
    },
    {
      categoria: 'Confiança',
      titulo: 'Construindo confiança mútua',
      descricao: 'Descubra os pilares fundamentais para estabelecer e manter a confiança em um relacionamento saudável.',
      tempo: '10 min',
      cor: 'from-purple-500 to-pink-600'
    },
    {
      categoria: 'Autoconhecimento',
      titulo: 'Entendendo suas necessidades emocionais',
      descricao: 'Explore suas próprias necessidades e aprenda a comunicá-las de forma clara e assertiva.',
      tempo: '12 min',
      cor: 'from-amber-500 to-orange-600'
    },
    {
      categoria: 'Resolução de Conflitos',
      titulo: 'Lidando com desentendimentos',
      descricao: 'Estratégias práticas para resolver conflitos de maneira construtiva e fortalecer o relacionamento.',
      tempo: '15 min',
      cor: 'from-emerald-500 to-teal-600'
    },
    {
      categoria: 'Intimidade',
      titulo: 'Mantendo a conexão emocional',
      descricao: 'Como cultivar e manter a intimidade emocional ao longo do tempo em um relacionamento.',
      tempo: '9 min',
      cor: 'from-rose-500 to-pink-600'
    },
    {
      categoria: 'Limites Saudáveis',
      titulo: 'Estabelecendo limites no relacionamento',
      descricao: 'A importância de definir e respeitar limites pessoais para um relacionamento equilibrado.',
      tempo: '11 min',
      cor: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900">Conteúdos</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Educativos
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Aprenda sobre relacionamentos saudáveis com nossos artigos e guias criados por especialistas
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600">Artigos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">20k+</p>
              <p className="text-sm text-gray-600">Leitores</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Gratuito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Conteúdos */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conteudos.map((conteudo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className={`inline-flex px-3 py-1 bg-gradient-to-r ${conteudo.cor} text-white text-xs font-semibold rounded-full mb-4`}>
                  {conteudo.categoria}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {conteudo.titulo}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {conteudo.descricao}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{conteudo.tempo}</span>
                  </div>

                  <button className="text-purple-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200">
            <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="currentColor" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Conecte-se com um mentor especializado e receba orientação personalizada para seu relacionamento
            </p>
            <Link href="/mentores" prefetch={false}>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
                Encontrar Mentor
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

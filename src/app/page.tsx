'use client';

import { Heart, Shield, Sparkles, ArrowRight, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { insightsDoDia } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Home() {
  const [insightAtual, setInsightAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInsightAtual((prev) => (prev + 1) % insightsDoDia.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo grande */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl mb-6 shadow-xl">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Entenda seu</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              relacionamento
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Conecte-se com mentores especializados em relacionamentos e receba orientação profissional para construir conexões mais saudáveis e felizes.
          </p>

          {/* Insight do Dia */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-10 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center gap-2 mb-3 justify-center">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-blue-700">Insight do Dia</span>
            </div>
            <p className="text-gray-700 italic mb-2 text-base">
              "{insightsDoDia[insightAtual].texto}"
            </p>
            <p className="text-sm text-gray-500">
              — {insightsDoDia[insightAtual].autor}
            </p>
          </div>

          {/* CTAs principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/mentores" prefetch={false} className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                Encontrar Mentor
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/conteudos" prefetch={false} className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all">
                Conteúdos Educativos
              </button>
            </Link>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">500+</p>
              <p className="text-xs sm:text-sm text-gray-600">Mentores ativos</p>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-amber-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">4.9</p>
              <p className="text-xs sm:text-sm text-gray-600">Avaliação média</p>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-xs sm:text-sm text-gray-600">Consultorias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de escolha de perfil */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como deseja acessar?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Escolha o perfil que melhor se adequa às suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card Cliente */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 sm:p-8 border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" fill="white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sou Cliente
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Quero entender meu relacionamento e receber orientação profissional de especialistas.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Acesso gratuito à plataforma</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Escolha seu mentor ideal</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-pink-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Receba análises personalizadas</span>
                </li>
              </ul>

              <Link href="/mentores" prefetch={false} className="block">
                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Entrar como Cliente
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Card Mentor */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sou Mentor
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sou profissional e quero atender clientes nas áreas de psicologia e relacionamentos.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Planos a partir de R$ 97/mês</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Apareça no catálogo de mentores</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Defina seus preços e métodos</span>
                </li>
              </ul>

              <Link href="/mentor/planos" prefetch={false} className="block">
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Área Profissional
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Processo simples e seguro para conectar você ao mentor ideal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                numero: '1',
                titulo: 'Escolha seu mentor',
                descricao: 'Navegue pelo catálogo e encontre o profissional ideal para você',
                icone: Users
              },
              {
                numero: '2',
                titulo: 'Descreva sua situação',
                descricao: 'Conte sua história e o que você gostaria de trabalhar',
                icone: Heart
              },
              {
                numero: '3',
                titulo: 'Receba a análise',
                descricao: 'O mentor entrega sua consultoria personalizada',
                icone: Sparkles
              },
              {
                numero: '4',
                titulo: 'Avalie a experiência',
                descricao: 'Compartilhe seu feedback e ajude outros clientes',
                icone: Star
              }
            ].map((passo, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4 text-white text-2xl font-bold shadow-lg">
                  {passo.numero}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {passo.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

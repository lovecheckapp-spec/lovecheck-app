'use client';

import { Heart, Shield, Users, Target, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl mb-6 shadow-xl">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900">Sobre o</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LoveCheck
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conectamos pessoas que buscam entender melhor seus relacionamentos com profissionais especializados em psicologia e terapia de casais.
          </p>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-600">
                Facilitar o acesso a orientação profissional de qualidade para relacionamentos mais saudáveis e felizes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossos Valores</h3>
              <p className="text-gray-600">
                Privacidade, respeito, empatia e profissionalismo em cada interação na plataforma.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a principal plataforma de mentoria em relacionamentos, transformando vidas através do conhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como Funciona
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Escolha seu Mentor</h3>
                <p className="text-gray-600">
                  Navegue pelo nosso catálogo de profissionais qualificados e escolha aquele que mais se adequa às suas necessidades.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compartilhe sua História</h3>
                <p className="text-gray-600">
                  Descreva sua situação de forma confidencial e segura. Quanto mais detalhes, melhor será a análise.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receba Orientação Profissional</h3>
                <p className="text-gray-600">
                  O mentor analisa sua situação e entrega uma consultoria personalizada com insights e recomendações práticas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Avalie a Experiência</h3>
                <p className="text-gray-600">
                  Compartilhe seu feedback para ajudar outros usuários e contribuir com a qualidade da plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossa Comunidade
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">500+</p>
              <p className="text-sm text-gray-600">Mentores Ativos</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-8 h-8 text-purple-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">10k+</p>
              <p className="text-sm text-gray-600">Consultorias</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">4.9</p>
              <p className="text-sm text-gray-600">Avaliação Média</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">95%</p>
              <p className="text-sm text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Encontre o mentor ideal e dê o primeiro passo para um relacionamento mais saudável.
          </p>
          <Link href="/mentores" prefetch={false}>
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all">
              Encontrar Mentor
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

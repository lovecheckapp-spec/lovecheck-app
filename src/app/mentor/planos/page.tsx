'use client';

import { Check, Shield, Sparkles, Crown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const planos = [
  {
    nome: 'Básico',
    preco: 97,
    icone: Shield,
    cor: 'from-blue-500 to-blue-600',
    corBg: 'from-blue-50 to-blue-100',
    corBorder: 'border-blue-200',
    popular: false,
    recursos: [
      'Perfil no catálogo de mentores',
      'Até 10 consultorias por mês',
      'Suporte por email',
      'Painel de controle básico',
      'Recebimento via PIX',
      'Taxa de 15% por consultoria'
    ]
  },
  {
    nome: 'Profissional',
    preco: 197,
    icone: Sparkles,
    cor: 'from-pink-500 to-purple-600',
    corBg: 'from-pink-50 to-purple-100',
    corBorder: 'border-pink-300',
    popular: true,
    recursos: [
      'Tudo do plano Básico',
      'Consultorias ilimitadas',
      'Destaque no catálogo',
      'Suporte prioritário',
      'Agendamento integrado',
      'Taxa de 10% por consultoria',
      'Análise de desempenho',
      'Badge de verificado'
    ]
  },
  {
    nome: 'Premium',
    preco: 397,
    icone: Crown,
    cor: 'from-amber-500 to-orange-600',
    corBg: 'from-amber-50 to-orange-100',
    corBorder: 'border-amber-300',
    popular: false,
    recursos: [
      'Tudo do plano Profissional',
      'Posição premium no catálogo',
      'Suporte VIP 24/7',
      'Taxa de apenas 5% por consultoria',
      'Marketing personalizado',
      'Página de perfil customizada',
      'Acesso antecipado a recursos',
      'Gerente de conta dedicado'
    ]
  }
];

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-6 shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gray-900">Planos para</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mentores Profissionais
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para começar a atender clientes e expandir sua prática profissional
          </p>

          {/* Benefícios Gerais */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'Sem taxa de adesão',
              'Cancele quando quiser',
              'Suporte especializado',
              'Pagamentos seguros'
            ].map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
              >
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => {
              const Icone = plano.icone;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${plano.corBg} rounded-3xl p-8 border-2 ${plano.corBorder} hover:shadow-2xl transition-all relative ${
                    plano.popular ? 'scale-105 shadow-xl' : ''
                  }`}
                >
                  {/* Badge Popular */}
                  {plano.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  {/* Ícone */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plano.cor} rounded-2xl mb-6`}>
                    <Icone className="w-8 h-8 text-white" />
                  </div>

                  {/* Nome e Preço */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plano.nome}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {plano.preco}
                    </span>
                    <span className="text-gray-600">/mês</span>
                  </div>

                  {/* Recursos */}
                  <ul className="space-y-3 mb-8">
                    {plano.recursos.map((recurso, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{recurso}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão */}
                  <Link href="/mentor/cadastro" prefetch={false}>
                    <button
                      className={`w-full py-3 bg-gradient-to-r ${plano.cor} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                    >
                      Começar Agora
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                pergunta: 'Como funciona o pagamento?',
                resposta: 'A mensalidade é cobrada no cartão de crédito. Você recebe os pagamentos das consultorias diretamente via PIX, descontada a taxa da plataforma.'
              },
              {
                pergunta: 'Posso mudar de plano depois?',
                resposta: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de cobrança.'
              },
              {
                pergunta: 'Preciso ter formação específica?',
                resposta: 'Sim, aceitamos profissionais com formação em Psicologia, Terapia, Coaching certificado ou áreas relacionadas. Validamos as credenciais no cadastro.'
              },
              {
                pergunta: 'Como defino meus preços?',
                resposta: 'Você tem total liberdade para definir o valor das suas consultorias. Recomendamos analisar o mercado e começar com valores competitivos.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.pergunta}
                </h3>
                <p className="text-gray-600">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Junte-se a centenas de profissionais que já atendem clientes pela nossa plataforma
          </p>
          <Link href="/mentor/cadastro" prefetch={false}>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2">
              Criar Minha Conta
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

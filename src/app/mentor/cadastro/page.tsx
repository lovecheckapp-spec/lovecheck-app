'use client';

import { useState } from 'react';
import { User, Mail, Phone, FileText, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CadastroMentorPage() {
  const [etapa, setEtapa] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    especialidade: '',
    experiencia: '',
    formacao: '',
    biografia: '',
    preco: '',
    metodoPagamento: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (etapa < 3) {
      setEtapa(etapa + 1);
    } else {
      // Aqui seria o envio final
      setEtapa(4);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (etapa === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cadastro Enviado!
          </h1>
          <p className="text-gray-600 mb-8">
            Recebemos seu cadastro e nossa equipe irá analisá-lo em até 48 horas. Você receberá um e-mail com as próximas instruções.
          </p>
          <Link href="/">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all">
              Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cadastro de Mentor
          </h1>
          <p className="text-gray-600">
            Preencha seus dados para começar a atender clientes
          </p>
        </div>

        {/* Indicador de progresso */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  etapa >= num
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-16 h-1 ${
                    etapa > num ? 'bg-purple-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {/* Etapa 1: Dados Pessoais */}
            {etapa === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-purple-500" />
                  Dados Pessoais
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            )}

            {/* Etapa 2: Experiência Profissional */}
            {etapa === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                  Experiência Profissional
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Especialidade *
                  </label>
                  <select
                    name="especialidade"
                    value={formData.especialidade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="relacionamentos">Relacionamentos</option>
                    <option value="casamento">Casamento</option>
                    <option value="divorcio">Divórcio</option>
                    <option value="autoestima">Autoestima</option>
                    <option value="comunicacao">Comunicação</option>
                    <option value="conflitos">Resolução de Conflitos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Anos de Experiência *
                  </label>
                  <input
                    type="number"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ex: 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Formação Acadêmica *
                  </label>
                  <input
                    type="text"
                    name="formacao"
                    value={formData.formacao}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ex: Psicologia - USP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Biografia Profissional *
                  </label>
                  <textarea
                    name="biografia"
                    value={formData.biografia}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Conte um pouco sobre sua experiência e abordagem..."
                  />
                </div>
              </div>
            )}

            {/* Etapa 3: Valores e Pagamento */}
            {etapa === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-500" />
                  Valores e Pagamento
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preço por Consultoria *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      R$
                    </span>
                    <input
                      type="number"
                      name="preco"
                      value={formData.preco}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="150,00"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Você pode alterar esse valor depois
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Método de Pagamento Preferido *
                  </label>
                  <select
                    name="metodoPagamento"
                    value={formData.metodoPagamento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="pix">PIX</option>
                    <option value="mercadopago">Mercado Pago</option>
                    <option value="pagbank">PagBank</option>
                    <option value="stripe">Stripe</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Importante:</strong> O pagamento das consultorias é feito diretamente entre você e o cliente. A LoveCheck não cobra comissão sobre seus atendimentos.
                  </p>
                </div>
              </div>
            )}

            {/* Botões de navegação */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {etapa > 1 && (
                <button
                  type="button"
                  onClick={() => setEtapa(etapa - 1)}
                  className="px-6 py-3 text-gray-700 font-semibold hover:text-gray-900 transition-colors"
                >
                  Voltar
                </button>
              )}
              <button
                type="submit"
                className="ml-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2"
              >
                {etapa === 3 ? 'Finalizar Cadastro' : 'Próxima Etapa'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Informações adicionais */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Ao se cadastrar, você concorda com nossos{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Termos de Uso
            </a>{' '}
            e{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

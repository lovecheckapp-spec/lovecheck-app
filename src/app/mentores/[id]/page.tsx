'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Star, Crown, MapPin, Clock, CheckCircle, MessageCircle, ArrowLeft, Play } from 'lucide-react';
import { mentoresMock } from '@/lib/data';

export default function MentorPerfilPage() {
  const params = useParams();
  const router = useRouter();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [descricao, setDescricao] = useState('');

  const mentor = mentoresMock.find((m) => m.id === params.id);

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Mentor não encontrado</p>
      </div>
    );
  }

  const handleSolicitarConsultoria = () => {
    if (descricao.trim().length < 50) {
      alert('Por favor, descreva sua situação com mais detalhes (mínimo 50 caracteres)');
      return;
    }
    // Aqui seria criada a consultoria no backend
    alert('Consultoria solicitada com sucesso! Você será redirecionado para o chat.');
    router.push(`/chat/${mentor.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botão voltar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Card principal do mentor */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Header com foto e info básica */}
          <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-100">
            <Image
              src={mentor.foto}
              alt={mentor.nome}
              fill
              className="object-cover"
            />
            {mentor.plano === 'pro' && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                <Crown className="w-5 h-5" />
                Mentor PRO
              </div>
            )}
          </div>

          <div className="p-8">
            {/* Nome e avaliação */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mentor.nome}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.atendimentos} atendimentos realizados</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl">
                  <Star className="w-6 h-6 text-amber-500" fill="currentColor" />
                  <div>
                    <p className="text-2xl font-bold text-amber-700">{mentor.nota}</p>
                    <p className="text-xs text-amber-600">({mentor.avaliacoes} avaliações)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.especialidades.map((esp, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                  >
                    {esp}
                  </span>
                ))}
              </div>
            </div>

            {/* Biografia */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Sobre</h3>
              <p className="text-gray-700 leading-relaxed">{mentor.biografia}</p>
            </div>

            {/* Métodos de pagamento */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Métodos de pagamento aceitos</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.metodoPagamento.map((metodo, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {metodo}
                  </span>
                ))}
              </div>
            </div>

            {/* Preço e CTA */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Valor da consultoria</p>
                  <p className="text-4xl font-bold text-pink-600">
                    R$ {mentor.preco}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Pagamento direto ao mentor via {mentor.metodoPagamento[0]}
                  </p>
                </div>
                <button
                  onClick={() => setMostrarFormulario(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Consultoria
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de solicitação */}
        {mostrarFormulario && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Descreva sua situação
            </h2>
            <p className="text-gray-600 mb-6">
              Conte para {mentor.nome.split(' ')[0]} o que você gostaria de trabalhar. Quanto mais detalhes, melhor será a análise.
            </p>
            
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva sua situação, dúvidas ou o que você gostaria de entender melhor sobre seu relacionamento..."
              className="w-full h-48 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
            />
            
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500">
                {descricao.length} caracteres (mínimo 50)
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setMostrarFormulario(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSolicitarConsultoria}
                  disabled={descricao.trim().length < 50}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar Solicitação
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Avaliações (mock) */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Avaliações de clientes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                nome: 'Maria S.',
                nota: 5,
                comentario: 'Excelente profissional! Me ajudou muito a entender padrões que eu repetia nos meus relacionamentos.',
                data: '2 semanas atrás'
              },
              {
                nome: 'João P.',
                nota: 5,
                comentario: 'Muito atencioso e com ótimas orientações práticas. Recomendo!',
                data: '1 mês atrás'
              },
              {
                nome: 'Ana L.',
                nota: 4,
                comentario: 'Boa análise, me deu insights importantes sobre comunicação no relacionamento.',
                data: '1 mês atrás'
              }
            ].map((avaliacao, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {avaliacao.nome.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{avaliacao.nome}</p>
                      <p className="text-sm text-gray-500">{avaliacao.data}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < avaliacao.nota ? 'text-amber-500' : 'text-gray-300'
                        }`}
                        fill={i < avaliacao.nota ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{avaliacao.comentario}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Star, Crown, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Mentor } from '@/lib/types';

interface MentorCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <Link href={`/mentores/${mentor.id}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200 group">
        {/* Header com foto e selo PRO */}
        <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100">
          <Image
            src={mentor.foto}
            alt={mentor.nome}
            fill
            className="object-cover"
          />
          {mentor.plano === 'pro' && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-lg">
              <Crown className="w-4 h-4" />
              PRO
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          {/* Nome e avaliação */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
              {mentor.nome}
            </h3>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
              <span className="text-sm font-semibold text-amber-700">{mentor.nota}</span>
            </div>
          </div>

          {/* Especialidades */}
          <div className="flex flex-wrap gap-2 mb-3">
            {mentor.especialidades.slice(0, 3).map((esp, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-pink-50 text-pink-600 rounded-full"
              >
                {esp}
              </span>
            ))}
          </div>

          {/* Biografia resumida */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {mentor.biografia}
          </p>

          {/* Estatísticas */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{mentor.atendimentos} atendimentos</span>
            </div>
            <div className="flex items-center gap-1">
              <span>({mentor.avaliacoes} avaliações)</span>
            </div>
          </div>

          {/* Preço e CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-500">A partir de</p>
              <p className="text-xl font-bold text-pink-600">
                R$ {mentor.preco}
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold">
              Ver Perfil
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

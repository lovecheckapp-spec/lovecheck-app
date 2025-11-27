'use client';

import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MentorLoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login será implementada futuramente
    console.log('Login:', { email, senha });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo e Título */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Área do Mentor
          </h1>
          <p className="text-gray-600">
            Acesse sua conta profissional
          </p>
        </div>

        {/* Card de Login */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="senha" className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Esqueci a senha */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-600 font-semibold">
                Esqueci a senha
              </a>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Entrar
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Link para Cadastro */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Ainda não é mentor?
            </p>
            <Link href="/mentor/planos" prefetch={false}>
              <button className="w-full py-3 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all">
                Conhecer Planos
              </button>
            </Link>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Ao fazer login, você concorda com nossos{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Termos de Uso
            </a>{' '}
            e{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Política de Privacidade
            </a>
          </p>
        </div>

        {/* Voltar */}
        <div className="mt-6 text-center">
          <Link href="/" prefetch={false} className="text-sm text-gray-600 hover:text-gray-900 font-semibold">
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

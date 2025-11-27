/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilita prefetch automático para evitar erros de "signal aborted"
  experimental: {
    optimisticClientCache: false,
  },
  // Melhora o comportamento do HMR e navegação
  reactStrictMode: true,
  // Configurações adicionais para evitar abort de requisições
  compiler: {
    removeConsole: false,
  },
  // Desabilita telemetria que pode causar requisições extras
  telemetry: {
    enabled: false,
  },
};

export default nextConfig;
